document.addEventListener('DOMContentLoaded', function() {
    // Code to be executed when the page is fully loaded
    console.log('Page loaded!');
    // Your code here...
    var submitReport = document.createElement("h3");
    submitReport.textContent = "Your form is definitely not submitted"
    document.body.appendChild(submitReport);

    //  <button onclick="location.href='contact_form.html'">Contact Me!</button>
    var homePageButton = document.createElement("button")
    homePageButton.textContent = "Home";
    homePageButton.addEventListener("click", function() {
        location.href = "about_me.html";
    });
    
    document.body.appendChild(homePageButton);
});
