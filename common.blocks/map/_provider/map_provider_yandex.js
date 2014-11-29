/**
 * @module map_provider_yandex
 * @description map block.
 */

modules.define('map_provider_yandex',
    ['i-bem__dom', 'map-helper_provider_yandex'],
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
                    this._map = new ymaps.Map(this.domElem[0], params);
                    this._drawGeoObjects();
                }.bind(this));
            },

            /**
             * Draws geoObjects derived from bemjson
             */
            _drawGeoObjects : function() {
                this.params.geoObjects.forEach(
                    function(geoObject) {
                        var coords = geoObject.coordinates;
                        var properties = geoObject.properties;
                        var options = geoObject.options;
                        var type;
                        switch(geoObject.type) {
                            case 'placemark':
                                type = 'Point';
                                break;
                            case 'polyline':
                                type = 'LineString';
                                break;
                            case 'rectangle':
                                type = 'Rectangle';
                                break;
                        }
                        this.addGeoObject({
                            type : type,
                            coordinates : coords
                        }, properties, options);
                    }, this
                );
            },

            /**
             * Add geoObject to map
             * @param {Object} geometry
             * @param {Object} properties
             * @param {Object} options
             */
            addGeoObject : function(geometry, properties, options) {
                ymaps.ready(function() {
                    this._map.geoObjects.add(new ymaps.GeoObject(
                        {
                            geometry : geometry,
                            properties : properties
                        },
                        options
                    ));
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
