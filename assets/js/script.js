(function($)
{
    $(function()
    {
        var favicon = $('link[rel="shortcut icon"]');

        var emote = function(emoji)
        {
            favicon.attr('href', 'http://www.emoji-cheat-sheet.com/graphics/emojis/' + emoji + '.png');
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
