

$(document).ready(function() {
	$('.gallery-item').magnificPopup({
	  type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
            verticalFit: true,
            titleSrc: function(item) {
            	var title = item.el.attr('title');
            	if (title !== undefined) {
          			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">Image source</a>';
            	}
          		return '<a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">Image source</a>';
            }
          },
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 350, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
          }
	});
});