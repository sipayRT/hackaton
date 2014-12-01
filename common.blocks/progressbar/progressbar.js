/**
 * @module progressbar
 */

modules.define('progressbar', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class progressbar
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends progressbar.prototype */{

    /**
     * Sets bar's width
     * @param {Number|String} progress
     */
    setProgress : function(progress) {
        this._setBarWidth(this.params.progress = this._getProgressNum(progress));
    },

    /**
     * Get bar's value
     * @returns {Number}
     */
    getVal : function() {
        return this.params.progress;
    },

    _getProgressNum : function(num) {
        var number = isNaN(+num)? 0 : num < 0? 0 : num > 100? 100 : num;

        return number;
    },

    _setBarWidth : function(progress) {
        this.elem('bar').css('width', progress > 0? progress + '%' : 0);
    }

}, /** @lends progressbar */{
    live : true
}));

});
