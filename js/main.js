document.addEventListener("DOMContentLoaded", function () {
    const burgerMenuBtn = document.querySelector('#burger-button');
    const menuItems = document.querySelectorAll( '.menu-item' );

    burgerMenuBtn.addEventListener( 'click', function() {
            document.body.classList.toggle( 'mobile-menu-active' );

    } );

    menuItems.forEach( function( menuItem )  {
        menuItem.addEventListener ( 'click', function () {
            document.body.classList.remove( 'mobile-menu-active' );
            
            let currentItem = document.querySelector ( '.active' );
            currentItem.classList.remove( 'active' );

            this.classList.add( 'active' );
        } );
        

    });
    
    const btn = document.querySelector ("#btn");
    const fotoApi = document.querySelector ("#foto-api");
    
    btn.addEventListener( "click", function() {
        fetch ( 'https://api.thecatapi.com/v1/images/search' )
            .then(function (response) {
                return response.json();
            })
            .then (function (gatite) {
                fotoApi.src = gatite[0].url;
            })
    });
    




});

