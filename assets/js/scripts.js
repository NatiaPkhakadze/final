'use strict';

document.addEventListener('DOMContentLoaded', async function () {
    // Initialize slider
    var slider = new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        focus: "center",
        pagination: false,
        arrows: false
    });
    // Fetch users list and render in DOM
    function getUsers() {
        var users;
        const sliderList = document.getElementById('card-list')
        // Call the API
        fetch('https://reqres.in/api/users').then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function (data) {
            users = data.data;
            users.forEach(function (user) {
                sliderList.innerHTML +=
                    '<li class="card-item splide__slide">' +
                    '<img class="icon" src="' + user.avatar + '" alt="avatar">' +
                    '<h2 class="card-title">' + user.first_name + " " + user.last_name + '</h2>' +
                    '<p class="card-text">' + user.email + '</p>' +
                    '</li>'
            });
            return slider.mount();
        }).catch(function (error) {
            console.warn(error);
        });

    };
    getUsers();

    var burgerMenu = document.getElementById('burger-menu');
    var navigationMenu = document.getElementById('navigation');
    burgerMenu.addEventListener('click', toggleBurgerMenu);

    // Toggle burger menu
    function toggleBurgerMenu() {
        burgerMenu.classList.toggle('close');
        navigationMenu.classList.toggle('active');
    }


    // Initialize form validation
    
});