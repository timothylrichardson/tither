/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

/* -- JS Feature Additions */

document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle filter logic here
    alert('Filter form submitted!');
});

function goBack() {
    window.history.back();
}

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    alert('Login form submitted!');
});

// Dashboard Logout Function
function logout() {
    alert('Logged out!');
    // Add logout logic here
}

// Contribution History Filter Form Submission
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle filter logic here
    alert('Filter form submitted!');
});

// Back Button Function
function goBack() {
    window.history.back();
}
