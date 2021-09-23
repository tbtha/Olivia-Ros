$(function){
//agregando desplazamiento 
$("a").click(function(event){

    if(this.hash !== ""){

//impedir el comportamiento predeterminado
    event.preventDefault();
    var hash = this.hash;
    $('html,body').animate({
        scrollTop:$(hash).iffset().scrollTop
    },800,funtion(){
        window.location.hash = hash;
    });
    }
    });
    
};

$('[data-bs-toggle="popover"]').popover();
};