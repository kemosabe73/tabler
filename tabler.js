(function(){
    $(document).on("click", '.tabler-button', function(){
        var ctr = 1;
        var tablerTbl = $(".tabler-table");
        var tablerTblFr = $(".tabler-table tr:first");
        tablerTblFr.clone().find("input").each(function(){
            $(this).attr({
                'id' : function(_, id) { return id + i },
                'name' : function(_, name) { return name + i},
                'value' : null
            });
        }).end().appendTo(tablerTbl);
        ctr++;
    });
})();
