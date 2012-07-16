Como.Model.MealMenu = (function() {
    "use strict";
    var // include underscore utility-belt
        _ = require('/lib/Underscore/underscore.min'),
        
        // default required namespace
        m = {}, setup;
        
        // custom method namespace

    setup = function () {
        // Table name
        m.table = 'meal_menu';

        // Table Columns
        m.columns = {
            menu_id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
            catering_id: 'INTEGER',
            name: 'TEXT',
            price: 'TEXT'
        };

        /**
         * Declare Table based method(s) here
         */
        m.methods = {};

        /**
         * Declare Record based method(s) here
         */
        m.objectMethods = {};

        return new Como.joli.model(m);
    };
    
    return setup();
}());
