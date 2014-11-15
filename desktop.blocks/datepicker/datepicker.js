modules.define('datepicker', ['i-bem__dom'], function(provide, BEMDOM) {
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var input = this.findBlockInside('input');
                var popup = this.findBlockInside('popup');
                // console.log(input);
                // console.log(popup);
                input.on({ modName: 'focused', modVal: true }, function () {
                    // this._sendRequest(form.getVal());
                    // console.log('tet');
                    popup.setAnchor(this).setMod('visible');
                }, this);
                // this.bindTo('input', 'focus', function () {
                    
                //     console.log('test');
                //     // 
                // }, this);
            }
        }
    },
}));

});
