module.exports = function(Como) {
    var _ = require('/lib/Underscore/underscore.min'),
        UI = Como.loadUI(),
        $ = require('/lib/Como/Utils'),
        
        create, buildRow;
        
    create = function(opts) {
        var config = $.extend({}, opts),
            table = UI.tableview(),
            row = [];
            
        $.ajax({
            url: config.url,
            success: function(data) {
                var catering = data.catering,
                    dataSize = catering.length;
                
                for (var i = 0; i < dataSize; i++) {
                    row.push(buildRow(catering[i]));
                };
                table.setData(row);
            },
            failure: function() {
                Ti.UI.createAlertDialog({
                    message: 'Error fetching data',
                    ok: 'Close'
                }).show();
            }
        });
        
        table.click(function(e) {
            Ti.API.info('Section: '+e.source);
            Ti.API.info('Section: '+e.section);
            Ti.API.info('Row: '+e.row);
            Ti.API.info('Row Data: '+e.rowData);
            Ti.API.info('Index: '+e.index);
        });
        
        return table;
    };
    
    buildRow = function(data) {
        var section,
            header = Ti.UI.createView({
                backgroundColor: '#CCC',
                height: '48dp',
                layout: 'vertical'
            }),
            headerTitle = Ti.UI.createLabel({
                color: '#000',
                height: '48dp',
                text: data.name,
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
            }),
            menu = data.menu,
            menuSize = menu.length;
            
        header.add(headerTitle);
        section = Ti.UI.createTableViewSection({
            headerView: header,
            rowCount: menuSize
        });
        
        for (var i=0; i < menuSize; i++) {
            var sectionChild = UI.tablerow({
                    layout: 'absolute'
                }),
                menuName = UI.label({
                    height: '32px',
                    left: '10dp',
                    text: menu[i].name,
                    top: 0
                }),
                menuPrice = UI.label({
                    height: '32px',
                    right: '10dp',
                    text: menu[i].price,
                    top: 0
                });
                
            sectionChild.add(menuName);
            sectionChild.add(menuPrice);
            section.add(sectionChild);
        };
        
        return section;
    };
        
    return {
        create: create
    };
};