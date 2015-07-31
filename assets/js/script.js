(function($)
{
    $(function()
    {
        var favicon = $('link[rel="shortcut icon"]');

        var emote = function(emoji)
        {
            favicon.attr('href', 'https://cdn.rawgit.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/' + emoji + '.png');
        };

        $(window)
            .blur(function()
            {
                emote('cry');
            })
            .focus(function()
            {
                emote('smile');
            });
    });
}(window.jQuery));
