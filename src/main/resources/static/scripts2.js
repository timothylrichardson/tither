/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
*/
// 
// Scripts


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

// Handle Filter Form Submission
document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement filter logic here
    alert('Filter form submitted!');
    // Example: Fetch filtered data and update the table
    // fetchFilteredContributions();
});

// Handle Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login logic here
    alert('Login successful!');
    window.location.href = '/dashboard';
});

// Handle Logout
function logout() {
    // Implement logout logic here
    alert('Logged out!');
    window.location.href = '/login';
}

// Handle Tax Report Generation
function generateTaxReport() {
    // Implement tax report generation logic here
    alert('Tax report generated!');
}

// Additional JS functionalities can be added here