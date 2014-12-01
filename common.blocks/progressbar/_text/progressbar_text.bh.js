module.exports = function(bh) {

    bh.match('progressbar_text', function(ctx, json) {

        ctx
            .applyBase()
            .content([
                json.content,
                {
                    elem : 'text',
                    content : ctx.tParam('_progress')
                }
            ], true);

    });

};
