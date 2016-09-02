(function($){

  var methods = {

      init: function() {
          var self = $(this);
    
          $(document).on('click', methods.options.popupBtn, function() {
              console.log(methods.options.popupBtnClose);
              methods.show(self);
          });
    
          $(document).on('click', methods.options.popupBtnClose, function() {
              self.toggleClass('is-open');
          });
      },

      show: function(self) {
          self.toggleClass('is-open');
      },

      hide: function(self) {
          // if(!self.hasClass('is-open')) {
          self.toggleClass('is-open');
          // }
      }
  };

  $.fn.popupsic = function(method) {

      methods.options = $.extend({
          popup: '.js-popup',
          popupBtn: '.js-popup-btn',
          popupBtnClose: '.js-popup-btn-close',
          popupOverlay: '.js-popup-overlay'
      }, method);

      if (methods[method]) {
          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
          return methods.init.apply(this, arguments);
      } else {
          $.error('has no such method: ' + method);
      }

      return this;
  };

})(jQuery);



$('.js-popup--log').popupsic({
    popupBtn: '.js-popup-btn--log'
});

$('.js-popup--reg').popupsic({
    popupBtn: '.js-popup-btn--reg'
});

$('.js-popup').popupsic();
