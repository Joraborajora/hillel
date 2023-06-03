function redirectToProfile() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    document.getElementById("loader").style.display = "block";
    setTimeout(function() {
        window.location.href = "my_profile_page.html";
    }, 2000);
}