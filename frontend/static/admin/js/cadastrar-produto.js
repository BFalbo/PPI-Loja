$(document).ready(function()
{
    setMasks();
});


function setMasks()
{
    // Mascara de moeda
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
}
