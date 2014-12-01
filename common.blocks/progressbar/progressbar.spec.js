modules.define(
    'spec',
    ['progressbar', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, progressbar, BEMDOM, $, BEMHTML) {

describe('progressbar', function() {
    var progressbar;

    beforeEach(function() {
        progressbar = BEMDOM.init($(BEMHTML.apply({ block : 'progressbar', progress : 10 }))
            .appendTo('body'))
            .bem('progressbar');
    });

    afterEach(function() {
        BEMDOM.destruct(progressbar.domElem);
    });

    describe('setProgress', function() {
        it('should set correct percents', function() {
            var progress = 15;
            progressbar.setProgress(progress);
            progressbar.elem('bar')[0].style.width.should.be.equal(progress + '%');
            progressbar.params.progress.should.be.equal(progress);
        });

        it('should set 0 if percent is negative', function() {
            progressbar.setProgress(-15);
            progressbar.elem('bar')[0].style.width.should.be.equal('0px');
            progressbar.params.progress.should.be.equal(0);
        });

        it('should set 100 if percent is larger than 100', function() {
            progressbar.setProgress(155);
            progressbar.elem('bar')[0].style.width.should.be.equal('100%');
            progressbar.params.progress.should.be.equal(100);
        });

        it('should set correct percent if progress is string with numbers', function() {
            progressbar.setProgress('50');
            progressbar.elem('bar')[0].style.width.should.be.equal('50%');
            progressbar.params.progress.should.be.equal('50');
        });

        it('should set 0 if progress is string with letters', function() {
            progressbar.setProgress('abc');
            progressbar.elem('bar')[0].style.width.should.be.equal('0px');
            progressbar.params.progress.should.be.equal(0);
        });
    });

    describe('getVal', function() {
        it('should return actual value', function() {
            progressbar.getVal().should.be.equal(10);
            progressbar.setProgress(20);
            progressbar.getVal().should.be.equal(20);
        });
    });

});

provide();

});
