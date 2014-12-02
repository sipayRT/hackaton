modules.define(
    'spec',
    ['cut', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Cut, BEMDOM, $, BEMHTML) {

describe('cut', function() {
    var body = $('body'),
        cut;

    beforeEach(function() {
        cut = BEMDOM.init($(BEMHTML.apply({
                block : 'cut',
                expandedText : 'Hide',
                mods : { theme : 'hackaton' },
                switcher : 'Show',
                content : 'Text here'
            }))
            .appendTo(body))
            .bem('cut');
    });

    afterEach(function() {
        BEMDOM.destruct(cut.domElem);
    });

    describe('open/close', function() {
        it('should show/hide container on open/close', function() {
            var container = cut.elemInstance('container');

            container.hasMod('visible').should.be.false;
            cut.setMod('showed');
            container.hasMod('visible').should.be.true;
            cut.delMod('showed');
            container.hasMod('visible').should.be.false;
        });
    });

    describe('change switcher text', function() {
        it('should change switcher text on open/close', function() {
            cut.elem('switcher').text().should.be.equal('Show');
            cut.setMod('showed');
            cut.elem('switcher').text().should.be.equal('Hide');
            cut.delMod('showed');
            cut.elem('switcher').text().should.be.equal('Show');
        });
    });
});

provide();

});
