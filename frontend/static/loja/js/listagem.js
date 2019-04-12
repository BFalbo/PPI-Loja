$(document).ready(function()
{
    changeHeader();
});

function changeHeader()
{
    $('.logo-loja > img').attr('src', 'https://programathor.com.br/blog/wp-content/uploads/2018/04/github-logo-e1522860474698.png');
    $headerComplement = $('<div id="header-complement"> \
    <div style=""></div>\
    <form class="search-container">\
    <input type="text" id="search-bar" placeholder="O que você procura ?">\
    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></a>\
    </form></div>');
    $('header').css('border-bottom', 'none');
    
    $('.sub-header').append($headerComplement);
    $('.search-box').hide();

}