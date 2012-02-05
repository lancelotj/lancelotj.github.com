/* Author: Lance Jian
*//* facebook *//*
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

   function autolink(text) {
   var exp = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
   return text.replace(exp,"<a href='$1'>$1</a>"); 
   }
   function recent_tweets(data) {
   for (i=0; i<data.length; i++) {
   document.getElementById("tweets").innerHTML = 
   document.getElementById("tweets").innerHTML + 
   "<li>" + autolink(data[i].text) + "</li>";
   }
   }
   */// google custom search {{{1
/*
   function parseQueryFromUrl () {
   var search = window.location.pathname;
   var parts = search.split('/');
   var q = parts[parts.length - 1];
   if (q) {
   return decodeURIComponent(q.replace(/\+/g, ' '));
   }
   return '';
   }
   */function parseQueryFromUrl(){var a="q",b=window.location.search.substr(1),c=b.split("&");for(var d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0])==a)return decodeURIComponent(e[1].replace(/\+/g," "))}return""}function _trackQuery(a,b,c){var d="q",e=document.location,f=[e.pathname,e.search,e.search?"&":"?",d==""?"q":encodeURIComponent(d),"=",encodeURIComponent(c)].join("");_gaq.push(["_trackPageview",f])}google.load("search","1",{language:"en"}),google.setOnLoadCallback(function(){var a=new google.search.CustomSearchControl("014655266183260870578:ekr5namz9u0");a.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);var b=new google.search.DrawOptions;b.setAutoComplete(!0),b.enableSearchboxOnly("/search.html");if(document.getElementById("cse")){var c=new google.search.CustomSearchControl("014655266183260870578:ekr5namz9u0");c.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET),c.setSearchStartingCallback(null,_trackQuery);var d=new google.search.DrawOptions;d.setAutoComplete(!0),d.enableSearchResultsOnly(),c.draw("cse",d);var e=parseQueryFromUrl();e&&c.execute(e)}},!0)