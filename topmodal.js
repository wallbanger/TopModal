(function($){

  var methods = {

      init: function() {
          var self = $(this);
    
          $(document).on('click', methods.options.popupBtn, function(event) {
              methods.show(self);
              methods.showOverlay(self);
              methods.showContainer(self);
              event.preventDefault();
          });
    
          $(document).on('click', methods.options.popupBtnClose, function(event) {
              methods.hide(self);
              methods.hideOverlay(self);
              methods.hideContainer(self);
              event.preventDefault();
          });

          $(document).on('click', methods.options.popup, function(event) {
              event.stopPropagation();
          });

          $(document).on('click', methods.options.popupContainer, function(event) {
              methods.hide(self);
              methods.hideOverlay(self);
              methods.hideContainer(self);
              event.preventDefault();
          });
      },

      show: function(self) {
          self.addClass('is-open');
      },

      hide: function(self) {
          self.removeClass('is-open');
      },
      
      showOverlay: function(self) {
          self.parent().siblings(methods.options.popupOverlay).addClass('is-open');
      },

      hideOverlay: function(self) {
          self.parent().siblings(methods.options.popupOverlay).removeClass('is-open');
      },

      showContainer: function(self) {
          self.parent().addClass('is-open');
      },

      hideContainer: function(self) {
          self.parent().removeClass('is-open');
      }
  };

  $.fn.topmodal = function(method) {

      methods.options = $.extend({
          popup: '.js-topmodal',
          popupBtn: '.js-topmodal-btn',
          popupBtnClose: '.js-topmodal-btn-close',
          popupContainer: '.js-topmodal-container',
          popupOverlay: '.js-topmodal-overlay'
      }, method);

      if (methods[method]) {
          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
          return methods.init.apply(this, arguments);
      } else {
          $.error('TopModal has no such method: ' + method);
      }

      return this;
  };

})(jQuery);


$('.js-topmodal--log').topmodal({
    popupBtn: '.js-topmodal-btn--log'
});

$('.js-topmodal--reg').topmodal({
    popupBtn: '.js-topmodal-btn--reg'
});

$('.js-topmodal').topmodal();
