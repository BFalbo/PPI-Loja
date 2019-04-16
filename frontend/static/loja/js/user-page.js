$(document).ready(function()
{
    setTabsEvents();
});

function setTabsEvents()
{
    $('.tab-btn').click(function()
    {
        let newTab = $(this).attr('tab-pointer');
        let tabAtiva = $('.tab-ativa').attr('tab-pointer');

        if(newTab !== tabAtiva)
        {
            $('.' + tabAtiva + ' , .' + newTab).animate({height: "toggle", opacity: "toggle"}, "slow");
    
            $('.tab-ativa').removeClass('tab-ativa');
            $('[tab-pointer=' + newTab + ']').addClass('tab-ativa');

        }

    });
}