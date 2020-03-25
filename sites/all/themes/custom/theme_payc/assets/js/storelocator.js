var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -25.72289,
            lng: 27.85378
        },
        zoom: 4
    });
    jQuery.each(stores, function(index, val) {
        var lat = val.Latitude.replace(",", ".");
        var lng = val.Longitude.replace(",", ".");
        var myLatlng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: val.Name,
            map: map,
        });
        var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h2 id="firstHeading" class="firstHeading">' + val.Name + '</h2><p>' + val.Address1+" " +val.Address2+", <br>"+val.Address3+"<strong>"+val.City+","+val.PostalCode+"</strong>"+'</p></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        markers.push(marker);
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
    jQuery('#region').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
    jQuery('#region').on('selectric-select', function(event, element, selectric) {
        jQuery('#stores').find('option').remove().end().append('<option value="999999">SELECT OUTLET</option>').val('whatever');
        jQuery.each(stores, function(index, val) {
            if (val.City == jQuery(element).val()) {
                console.log(val.City + "   " + jQuery(element).val());
                jQuery('#stores').append('<option value="' + index + '">' + val.Name + '</option>');
            }
        });
        jQuery('#stores').selectric('destroy');
        jQuery('#stores').selectric('init');
    });
    
    jQuery('#stores').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
    
    jQuery('#stores').on('selectric-select', function(event, element, selectric) {
        var lat = stores[jQuery(element).val()].Latitude.replace(",", ".");
        var lng = stores[jQuery(element).val()].Longitude.replace(",", ".");
        var myLatlng = new google.maps.LatLng(lat, lng);
        map.panTo(myLatlng);
        map.setZoom(20);
        jQuery('#stores').selectric('refresh');
    });
}