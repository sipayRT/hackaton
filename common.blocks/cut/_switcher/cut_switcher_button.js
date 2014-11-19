/**
 * @module cut
 */

modules.define('cut', ['button'], function(provide, _, Cut) {

/**
 * @exports
 * @class cut
 * @bem
 */
provide(Cut.decl({ modName : 'switcher', modVal : 'button' }, /** @lends cut.prototype */{
    onSetMod : {
        'showed' : function(_, modVal) {
            this.__base.apply(this, arguments);
            this._changeSwitcherButtonText(_, modVal);
        }
    },

    _changeSwitcherButtonText : function(modName, modVal) {
        var button = this.findBlockOn(this.getSwitcher(), 'button');
        this.__base.apply(this, arguments);

        button.setText(modVal? this._switcherText.expanded : this._switcherText.collapsed);
    }
}, /** @lends cut */{
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'button', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
}));

});
