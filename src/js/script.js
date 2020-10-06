document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");


    var hamburger = document.querySelector('.hamburger-animated') ;
    var menuMobile = document.querySelector(".nav-primary-mobile")
    hamburger.addEventListener('click', openmenu);


    function openmenu(evt){
        evt.preventDefault();

        var cible = evt.currentTarget;

        if (cible.classList.contains("open")){
            cible.classList.remove("open");
            menuMobile.classList.remove("open");
        }
        else{
            cible.classList.add("open");
            menuMobile.classList.add("open");
        }
    }

});