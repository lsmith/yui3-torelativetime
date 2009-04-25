//TODO: extract strings for i18n
YUI.add('relativetime', function (Y) {
    Y.toRelativeTime = function (d,from) {
        d = d || new Date();
        from = from || new Date();

        var delta = (from.getTime() - d.getTime()) / 1000;

        return delta < 60 ? "less than a minute ago" :
               delta < 120 ? "about a minute ago" :
               delta < 3600 ? Math.floor(delta/60) + " minutes ago" :
               delta < 7200 ? "about an hour ago" :
               delta < 86400 ? "about " +Math.floor(delta/3600)+ " hours ago" :
               delta < 172800 ? "1 day ago" :
               Math.floor(delta/86400)+ " days ago";
    };
},'@VERSION@');
