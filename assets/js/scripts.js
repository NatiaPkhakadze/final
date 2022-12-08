document.addEventListener('DOMContentLoaded', async function () {
    var slider = new Splide('.splide', {
        type: 'loop',
        perPage: 4,
        focus: "center",
        pagination: false,
        arrows: false
    });
    var getUsers = function () {
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
                        '<img class="icon" src="'+ user.avatar +'" alt="avatar">' +
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
    var overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    const navItems = document.querySelectorAll('.nav-item, .filled');

    navItems.forEach(box => {
        box.addEventListener('click', function handleClick(event) {
            burgerMenu.classList.remove("close");
            overlay.classList.remove("overlay");
        });
    });
});