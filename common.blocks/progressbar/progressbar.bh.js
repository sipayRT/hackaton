module.exports = function(bh) {

    bh.match('progressbar', function(ctx, json) {
        var progress = json.progress,
            num = isNaN(+progress)? 0 : progress < 0? 0 : progress > 100? 100 : progress;

        ctx
            .tParam('_progress', num)
            .js({ progress : num })
            .content({
                elem : 'box',
                content : {
                    elem : 'bar',
                    attrs : { style : 'width:' + (num > 0? num + '%' : 0) }
                }
            });
    });
};
