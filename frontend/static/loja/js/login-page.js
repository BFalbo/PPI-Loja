$(document).ready(function()
{
    SignUpEvent();
});

function SignUpEvent()
{
    $('.createAccount').click(function()
    {
        $('.toggle-block').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
}