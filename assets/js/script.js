$(function(){

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });
        }
    });
    $(document).ready(function () {
        $('body').fadeIn(6000).removeClass('body');
    });
    $('[data-toggle="popover"]').popover()
    
    $('[data-toggle="tooltip"]').tooltip()


});