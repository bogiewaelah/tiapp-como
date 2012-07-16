module.exports = function(Como) {
    var _ = require('/lib/Underscore/underscore.min'),
        UI = Como.loadUI(),
        
        create;
        
    create = function(opts) {
        var header, title, items = opts.items;
        
        header = UI.view({
            backgroundColor: '#333',
            height: '48dp',
            left: 0,
            top: 0
        });
        
        title = UI.label({
            color: '#FFF',
            text: opts.title
        });
        
        header.add(title);
        
        if (items) {
            for(var i=0,j=items.length; i<j; i++){
                header.add(items[i]);
            };
        }
        
        return header;
    };
        
    return {
        create: create
    };
};