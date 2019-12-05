$('#filter-button')
  .popup({
    popup : $('.custom.popup'),
    on    : 'click',
    lastResort: 'bottom left',
        onShow: function(){
            resizePopup();
    },
  })
;

var resizePopup = function(){$('.ui.popup').css('max-height', $(window).height());};

$(window).resize(function(e){
    resizePopup();
});