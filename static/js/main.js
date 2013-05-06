var _gaq = [['_setAccount','UA-1637721-4'],['_trackPageview'],['_trackPageLoadTime']];
$.getScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
$(function(){
    window.disqus_developer = 1;
    window.disqus_shortname = "lancejian";
    $.getScript("http://"+ window.disqus_shortname + ".disqus.com/count.js");
    var sidebar = $("#sidebar");
    var offset = sidebar.offset().top - $("#navbar").height() + 5;
    console.log(offset);
    if (offset < 0) {
        ofsset = 0;
    }
    sidebar.affix({offset:{top: offset}});
});
