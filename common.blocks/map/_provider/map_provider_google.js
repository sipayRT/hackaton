/**
 * @module map_provider_google
 * @description map block.
 */

modules.define('map_provider_google',
    ['i-bem__dom', 'map-helper_provider_google'],
    function(provide, DOM, gmaps) {

        DOM.decl('map', {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        if(this.getMod('provider') === 'google') {
                            this._drawMap();
                        }
                    }
                }
            },

            /**
             * Draw map unit
             */
            _drawMap : function() {
                var options = {
                    center : this._toLatlng(this.params.center),
                    zoom : this.params.zoom,
                    mapTypeId : gmaps.MapTypeId[this.params.type]
                };
                window.onload = function() {
                    this._map = new gmaps.Map(this.domElem[0], options);
                };
            },

            /**
             * Convert coordinates array to Latlng object
             *
             * @param {Array} coord
             * @returns {google.maps.Latlng}
             */
            _toLatlng : function(coord) {
                return new gmaps.Latlng(coord[0], coord[1]);
            },

            /**
             * @return {Map | Null}
             */
            getMap : function() {
                return this._map || null;
            }
        });

        provide(DOM);
});
