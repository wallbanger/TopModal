;( function( $, window, document, undefined ) {

    'use strict';

    var pluginName = 'topmodal',
        defaults = {
            topmodal:             '.js-topmodal',
            topmodalBtn:          '.js-topmodal-btn',
            topmodalBtnClose:     '.js-topmodal-btn-close',
            topmodalContainer:    '.js-topmodal-container',
            topmodalOverlay:      '.js-topmodal-overlay'
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            var _obj = this.settings;
            Plugin.prototype.handlerMethods( _obj );
        },

        handlerMethods: function( _obj ) {
            $( document ).on( 'click', _obj.topmodalBtn, function() {
                Plugin.prototype.show( _obj );
                Plugin.prototype.showContainer( _obj );
                Plugin.prototype.showOverlay( _obj );
            });

            $( document ).on( 'click', _obj.topmodalBtnClose, function() {
                Plugin.prototype.hide( _obj );
                Plugin.prototype.hideContainer( _obj );
                Plugin.prototype.hideOverlay( _obj );
            });

            $( document ).on( 'click', _obj.topmodalContainer, function() {
                Plugin.prototype.hide( _obj );
                Plugin.prototype.hideContainer( _obj );
                Plugin.prototype.hideOverlay( _obj );
            });

            $( document ).on( 'click', _obj.topmodal, function( event ) {
                event.stopPropagation();
            });
        },

        show: function( _obj ) {
            $( _obj.topmodal ).addClass( 'is-open' );
        },

        hide: function( _obj ) {
            $( _obj.topmodal ).removeClass( 'is-open' );
        },

        showContainer: function( _obj ) {
            $( _obj.topmodalContainer ).addClass( 'is-open' );
        },

        hideContainer: function( _obj ) {
            $( _obj.topmodalContainer ).removeClass( 'is-open' );
        },

        showOverlay: function( _obj ) {
            $( _obj.topmodalOverlay ).addClass( 'is-open' );
        },

        hideOverlay: function( _obj ) {
            $( _obj.topmodalOverlay ).removeClass( 'is-open' );
        }
    });

    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" +
                    pluginName, new Plugin( this, options ) );
            }
        } );
    };

} )( jQuery, window, document );
