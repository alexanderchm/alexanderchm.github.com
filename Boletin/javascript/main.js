//obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//recorrerlos

links.forEach(function(link) {
    //agregar un evento clic a cada uno de ellos
    link.addEventListener("click",function(evento){
        evento.preventDefault();
        
        let content = document.querySelector('.content');

        //quitar clases en este caso clases de animación
        content.classList.remove("animate__fadeInBottomLeft");
        content.classList.remove("animate__animated");
        
        //agregar nuevas clases de salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/";
        },600);

        
    });
});
