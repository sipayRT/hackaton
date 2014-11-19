/**
 * @module cut
 */

modules.define('cut', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class cut
 * @bem
 */
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._switcher = null;
                this._popup = null;
                this._switcherText = {
                    expanded : this.params.expandedText  || 'Hide',
                    collapsed : this.getSwitcher().text() || 'Show'
                };
            }
        },

        'showed' : function(modName, modVal) {
            this.setMod((this.getSwitcher()), 'opened', modVal);
            this.setMod((this.getContainer()), 'visible', modVal);

            if(this.hasMod('switcher')) return false;

            this._changeSwitcherText(modName, modVal);
        }
    },

    _changeSwitcherText : function(modName, modVal) {
        this.getSwitcher().html(modVal? this._switcherText.expanded : this._switcherText.collapsed);
    },

    /**
     * Returns switcher
     * @returns {i-bem__dom}
     */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findElem('switcher', true));
    },

    /**
     * Returns container
     * @returns {i-bem__dom}
     */
    getContainer : function() {
        return this._container ||
            (this._container = this.findElem('container', true));
    }

}, {
    live : function() {
        this.liveBindTo('switcher', 'click', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    },
    /**
     * On BEM click event handler
     * @param {events:Event} e
     * @protected
     */
    onSwitcherClick : function(e) {
        e.preventDefault();

        this.toggleMod('showed');
    }
}));

});
