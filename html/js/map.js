		// Map Scripts
		jQuery(window).on( 'load', function(){

			jQuery('#popular-dest-map').gMap({
				address: 'Spain',
				maptype: 'ROADMAP',
				zoom: 4,
				markers: [
					{
						address: "Ibiza, Spain",
						icon: {
							image: "barber/images/map-marker.png",
							iconsize: [32, 39],
							iconanchor: [16,36]
						}
					}
				],
				doubleclickzoom: false,
				controls: {
					panControl: false,
					zoomControl: true,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					overviewMapControl: false
				},
				styles: [
			{elementType: 'geometry', stylers: [{color: '#333333'}]},
			{elementType: 'labels.text.stroke', stylers: [{color: '#222222'}]},
			{elementType: 'labels.text.fill', stylers: [{color: '#bf9456'}]},
			{
			  featureType: 'administrative.locality',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#bf9456'}]
			},
			{
			  featureType: 'poi',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#bf9456'}]
			},
			{
			  featureType: 'poi.park',
			  elementType: 'geometry',
			  stylers: [{color: '#111111'}]
			},
			{
			  featureType: 'poi.park',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#000000'}]
			},
			{
			  featureType: 'road',
			  elementType: 'geometry',
			  stylers: [{color: '#a07c48'}]
			},
			{
			  featureType: 'road',
			  elementType: 'geometry.stroke',
			  stylers: [{color: '#a07c48'}]
			},
			{
			  featureType: 'road',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#a07c48'}]
			},
			{
			  featureType: 'road.highway',
			  elementType: 'geometry',
			  stylers: [{color: '#bf9456'}]
			},
			{
			  featureType: 'road.highway',
			  elementType: 'geometry.stroke',
			  stylers: [{color: '#bf9456'}]
			},
			{
			  featureType: 'road.highway',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#f3d19c'}]
			},
			{
			  featureType: 'transit',
			  elementType: 'geometry',
			  stylers: [{color: '#000000'}]
			},
			{
			  featureType: 'transit.station',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#bf9456'}]
			},
			{
			  featureType: 'water',
			  elementType: 'geometry',
			  stylers: [{color: '#222222'}]
			},
			{
			  featureType: 'water',
			  elementType: 'labels.text.fill',
			  stylers: [{color: '#222222'}]
			},
			{
			  featureType: 'water',
			  elementType: 'labels.text.stroke',
			  stylers: [{color: '#222222'}]
			}
		  ]
			});
		});