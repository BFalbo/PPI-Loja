

$(document).ready(function () {
    setMasks();
    fileEvent();
});


function setMasks() {
    // Mascara de moeda
    $('.money').mask('000.000.000.000.000,00', { reverse: true, placeholder: "R$ 0,00"});
}

// INput file event
function fileEvent()
{
    $('#inputfile').change(function()
    {
        files = this.files;
        for (var i = 0; i < files.length; i++) 
        {
            let item = $($('#data-template')[0].innerHTML);
            $(item).find('code')[0].innerHTML = files[i].name
            $('#fileList').append(item);
          }
    });
}


function removeFile($this)
{
    // Ainda nÃO REMOVE O ARQUIVO, SÓ VISUAL
    $($this).parent().remove();

}

