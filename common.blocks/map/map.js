/**
 * @module map
 * @description TODO.
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

            _drawMap : function() {
                var ctx = this;
                var params = this.params;
                ymaps.ready(function() {
                    ctx.createMap( params.id, {
                            center : params.center,
                            zoom : params.zoom,
                            controls : params.controls
                        }
                    );
                    ctx.addGeoObjects();
                });
            },

            createMap : function(name, config) {
                this._map = new ymaps.Map(name, config);
            },

            deleteMap : function() {
                this._map.destroy();
            },

            addGeoObjects : function() {
                var ctx = this;
                ctx.params.geoObjects.forEach(
                    function(geoObject) {
                        ctx._map.geoObjects.add(new ymaps.GeoObject({
                            geometry : geoObject
                        }));
                    }
                );
            },

            /**
             * @return {Map | Null} Экземпляр карты, либо null, если карта не инстанцирована.
             */
            getMap : function() {
                return this._map || null;
            }
        });

        provide(DOM);
});
