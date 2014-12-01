modules.define(
    'spec',
    ['progressbar', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, progressbar, BEMDOM, $, BEMHTML) {

describe('progressbar_text', function() {
    var progressbar;

    beforeEach(function() {
        progressbar = BEMDOM.init($(BEMHTML.apply({ block : 'progressbar', progress : 10, mods : { text : true } }))
            .appendTo('body'))
            .bem('progressbar');
    });

    afterEach(function() {
        BEMDOM.destruct(progressbar.domElem);
    });

    describe('get text value', function() {
        it('should get correct value', function() {
            progressbar.elem('text').text().should.be.equal('10');
            progressbar.setProgress(20);
            progressbar.elem('text').text().should.be.equal('20');
        });
    });

});

provide();

});
