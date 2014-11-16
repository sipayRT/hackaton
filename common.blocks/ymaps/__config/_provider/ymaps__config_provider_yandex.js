/**
 * @module ymaps__config_provider_yandex
 * @description Configuration for Yandex Map api loader
 */

modules.define('ymaps__config_provider_yandex', function(provide) {

provide(/** @exports */{
    /**
     * URL for loading YMaps API if it does not exist
     */
    url : '//api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.full'
});

});
