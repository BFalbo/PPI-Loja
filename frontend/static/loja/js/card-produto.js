$('.buy').click(function()
{
    $(this).parent().parent().addClass('clicked');
});

$('.remove').click(function(){
    $(this).parent().parent().removeClass("clicked");
});