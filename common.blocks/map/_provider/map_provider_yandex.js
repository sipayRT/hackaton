/**
 * @module map_provider_yandex
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
                        switch(geoObject.type) {
                            case 'placemark':
                                this.addGeoObject(
                                    {
                                        type : 'Point',
                                        coordinates : coords
                                    }, properties, options);
                                break;
                            case 'polyline':
                                this.addGeoObject(
                                    {
                                        type : 'LineString',
                                        coordinates : coords
                                    }, properties, options);
                                break;
                            case 'rectangle':
                                this.addGeoObject(
                                    {
                                        type : 'Rectangle',
                                        coordinates : coords
                                    }, properties, options);
                                break;
                        }
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
