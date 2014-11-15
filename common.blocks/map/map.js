/**
 * @module map
 * @description map block.
 */

modules.define(this.name,
    ['i-bem__dom', 'ymaps'],
    function(provide, DOM, ymaps) {

        DOM.decl('map', {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._drawMap();
                    }
                }
            },

            /**
             * Draw map unit
             */
            _drawMap : function() {
                var params = this.params;
                ymaps.ready(function() {
                    this._map = new ymaps.Map(params.id, params);
                    this._drawGeoObjects();
                }.bind(this));
            },

            /**
             * Draws geoObjects derived from bemjson
             */
            _drawGeoObjects : function() {
                this.params.geoObjects.forEach(
                    function(geoObject) {
                        this.addGeoObject(geoObject);
                    }, this
                );
            },

            /**
             * Add geoObject to map
             * @param {Object} geoObject
             */
            addGeoObject : function(geoObject) {
                ymaps.ready(function() {
                    this._map.geoObjects.add(new ymaps.GeoObject({
                        geometry : geoObject
                    }));
                }.bind(this));
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
