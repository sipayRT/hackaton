/**
 * @module progressbar
 */

modules.define('progressbar', function(provide, Progressbar) {

/**
 * @exports
 * @class progressbar
 * @bem
 */
provide(Progressbar.decl({ modName : 'text', modVal : true }, /** @lends progressbar.prototype */{

    /**
     * Sets text
     * @override
     */
    setProgress : function() {
        this.__base.apply(this, arguments);
        this.elem('text').text(this.params.progress);
    }

}));

});
