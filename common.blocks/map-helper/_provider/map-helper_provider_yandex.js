/**
 * @module map-helper_provider_yandex
 * @description Provide yandex map API (load if it does not exist).
 */

modules.define(
    'map-helper_provider_yandex',
    ['loader_type_js'],
    function(provide, loader) {

    var cfg = {
        version : 2.1,
        lang : 'ru_RU',
        package : 'package.full',
        coreurl : '//api-maps.yandex.ru/'
    };

    var config = cfg.coreurl + cfg.version +
                    '?lang=' + cfg.lang +
                    '&load=' + cfg.package;

    /* global ymaps */

    function doProvide() {
        /**
         * @exports
         * @type Function
         */
        provide(ymaps);
    }

    typeof ymaps !== 'undefined'?
        doProvide() :
        loader(config, doProvide);
});
