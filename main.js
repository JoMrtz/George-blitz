$(document).ready(function(){
    console.log("lestgo");
    $('#iniciar,#fin').on('click', cambiar);

    function cambiar(){
        var v1 = $('#eq1').val();
        var v2 = $('#eq2').val();
        if($('#pantalla1').hasClass('visible')){
            $('#pantalla1').removeClass('visible').addClass('invisible');
            $('#pantalla2').removeClass('invisible').addClass('visible');
        }else{
            $('#pantalla1').removeClass('invisible').addClass('visible');
            $('#pantalla2').removeClass('visible').addClass('invisible');
        }
        console.log("nombreTeam1: "+v1,"nombreTeam2: "+v2)
    }



});