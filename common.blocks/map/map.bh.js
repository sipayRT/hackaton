// Сейчас он не актуальный
// TODO: Сделать его с тем же функционалом что и bemhtml

module.exports = function(bh) {

    bh.match('map', function(ctx, json) {
        ctx.js({
          id : json.id,
          center : json.center,
          zoom : json.zoom,
          controls : json.controls,
          geoObjects : json.geoObjects
        });
        ctx.attr('id', json.id);
    });
};
