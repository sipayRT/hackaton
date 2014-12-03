/**
 * @module map-helper_provider_google
 * @description Provide google map API (load if it does not exist).
 */

modules.define(
    'map-helper_provider_google',
    ['loader_type_js'],
    function(provide, loader) {

    var cfg = {
        version : '3.exp',
        language : 'ru',
        coreurl : '//maps.googleapis.com/maps/api/js'
    };

    var config = cfg.coreurl +
                    '?v=' + cfg.version +
                    '&language=' + cfg.language;

    /* global google */

    function doProvide() {
        /**
         * @exports
         * @type Function
         */
        provide(google.maps);
    }

    (typeof google || (typeof google && typeof google.maps)) !== 'undefined'?
        doProvide() :
        loader(config, doProvide);
});
