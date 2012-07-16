module.exports = function (Como) {
    var _ = require('/lib/Underscore/underscore.min'),
        UI = Como.loadUI(),
        $ = require('/lib/Como/Utils'),
        isOnline = $.deviceOnline(),
        
        create, createHeader, createList, getRemoteData, getLocalData,
        
        win = UI.win({
            backgroundColor: '#EEE',
            exitOnClose: true,
            layout: 'vertical',
            navBarHidden: true
        });
        
    create = function() {
        var header = createHeader(),
            container = createList();
            
        win.add(header);
        win.add(container);
        
        return win;
    };
    
    createHeader = function() {
        var Header = require('/app/views/common/Header'),
            header = new Header(Como);
            
        return header.create({
            title: 'Meal'
        });
    };
    
    createList = function() {
        var ListAccordion = require('/app/views/common/ListAccordion'),
            list = new ListAccordion(Como);
        
        return list.create({
            url: 'http://110.74.169.145/educonnect/meals.php',
            model: Como.db.models.get('meal_catering')
        });
    };
    
    getRemoteData = function() {
        
    };
    
    getLocalData = function() {
        var data = JSON.parse(Como.Model.Meal.all());
        return $.extend({error: false}, {data: data});
    };
        
    return {
        create: create
    }
};
