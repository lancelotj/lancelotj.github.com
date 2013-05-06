function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
google.load('search', '1', {language : 'en'});
$(function() {
    if (document.getElementById("cse")) {
        var mainSearch = new google.search.CustomSearchControl('014655266183260870578:ekr5namz9u0');
        mainSearch.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
        //mainSearch.setSearchStartingCallback(null, _trackQuery);
        var opts = new google.search.DrawOptions();
        opts.setAutoComplete(true);
        opts.enableSearchResultsOnly();
        mainSearch.draw('cse', opts);
        var queryFromUrl = getURLParameter("q");
        if (queryFromUrl) {
          $("#search_input").val(queryFromUrl);
          mainSearch.execute(queryFromUrl);
        }
    }
});
