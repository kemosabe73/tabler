(function(){
    $(document).on("click", '.tabler-button', function(){
        var ctr = 1;
        var tablerTbl = $(".tabler-table");
        var tablerTblFr = $(".tabler-table > tbody > tr:first");
        tablerTblFr.clone().find("input").val("").each(function(){
            $(this).attr({
                'id' : function(_, id) { return id + ctr },
                'name' : function(_, name) { return name + ctr}
            });
        }).end().appendTo(tablerTbl);
        ctr++;
    });
})();
