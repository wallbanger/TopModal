(function($){

  var methods = {

      init: function() {
          var self = $(this);

          $(document).on('click', methods.options.topmodalBtn, function(event) {
              methods.show(self);
              methods.showOverlay(self);
              methods.showContainer(self);
              event.preventDefault();
          });

          $(document).on('click', methods.options.topmodalBtnClose, function(event) {
              methods.hide(self);
              methods.hideOverlay(self);
              methods.hideContainer(self);
              event.preventDefault();
          });

          $(document).on('click', methods.options.topmodalContainer, function(event) {
              methods.hide(self);
              methods.hideOverlay(self);
              methods.hideContainer(self);
              event.preventDefault();
          });

          $(document).on('click', methods.options.topmodal, function(event) {
              event.stopPropagation();
          });
      },

      show: function(self) {
          self.addClass('is-open');
      },

      hide: function(self) {
          self.removeClass('is-open');
      },
      
      showOverlay: function(self) {
          self.parent().siblings(methods.options.topmodalOverlay).addClass('is-open');
      },

      hideOverlay: function(self) {
          self.parent().siblings(methods.options.topmodalOverlay).removeClass('is-open');
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
          topmodal: '.js-topmodal',
          topmodalBtn: '.js-topmodal-btn',
          topmodalBtnClose: '.js-topmodal-btn-close',
          topmodalContainer: '.js-topmodal-container',
          topmodalOverlay: '.js-topmodal-overlay'
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
    topmodal: '.js-topmodal--log',
    topmodalBtn: '.js-topmodal-btn--log',
    topmodalBtnClose: '.js-topmodal-btn-closesss'
});

$('.js-topmodal--reg').topmodal({
    topmodal: '.js-topmodal--reg',
    topmodalBtn: '.js-topmodal-btn--reg'
});

$('.js-topmodal').topmodal();
