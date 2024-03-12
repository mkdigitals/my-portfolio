document.addEventListener('DOMContentLoaded', function() {
    var form = document.createElement("form");

    // Set its attributes
    form.setAttribute("action", "./submit_page.html");
    form.setAttribute("method", "post");
    var formList = document.createElement("ul");
    // Create a new list item
    var listItemName = document.createElement("li");

    // Create the label
    var nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";

    // Create the input
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "user_name");
    nameInput.required = true;
    nameInput.setAttribute("pattern", "[a-zA-Z]+");


    // Append the label and input to the list item
    listItemName.appendChild(nameLabel);
    listItemName.appendChild(nameInput);

    // Append the list item to the form list
    formList.appendChild(listItemName);
    form.appendChild(formList);
    // Append the form to the body (or any other container element)
    document.body.appendChild(form);

    var listItemMail = document.createElement("li");

    // Create the label
    var mailLabel = document.createElement("label");
    mailLabel.setAttribute("for", "mail");
    mailLabel.textContent = "e-mail:";

    // Create the input
    var mailInput = document.createElement("input");
    mailInput.setAttribute("type", "text");
    mailInput.setAttribute("id", "mail");
    mailInput.setAttribute("name", "user_email");
    mailInput.required = true;
    mailInput.setAttribute("pattern", "[a-zA-Z0-9]*@[a-zA-Z0-9]*");

    // Append the label and input to the list item
    listItemMail.appendChild(mailLabel);
    listItemMail.appendChild(mailInput);

    // Append the list item to the form list
    formList.appendChild(listItemMail);

    var listItemMsg = document.createElement("li");

    // Create the label
    var msgLabel = document.createElement("label");
    msgLabel.setAttribute("for", "msg");
    msgLabel.textContent = "Message:";

    // Create the input
    var messageArea = document.createElement("textarea");
    messageArea.setAttribute("id", "msg");
    messageArea.setAttribute("name", "user_message");

    // Append the label and input to the list item
    listItemMsg.appendChild(msgLabel);
    listItemMsg.appendChild(messageArea);

    // Append the list item to the form list
    formList.appendChild(listItemMsg);

    var listItemSendButton = document.createElement("li");

    var sendButton = document.createElement("button");
    sendButton.setAttribute("type", "submit");
    sendButton.textContent = "Send your message";
    listItemSendButton.appendChild(sendButton);
    formList.appendChild(listItemSendButton);

    var listItemClearButton = document.createElement("li");

    var clearButton = document.createElement("button");
    clearButton.setAttribute("type", "reset");
    clearButton.textContent = "Clear";
    listItemClearButton.appendChild(clearButton);
    formList.appendChild(listItemClearButton);

    form.addEventListener('submit', function(event) {
        // This prevents the form from submitting
        event.preventDefault();
    
        // Call your function here
        if (form.checkValidity()) {
            form.submit();
        } else {
            form.reportValidity();
        }
    
        // After your function is done, you can manually submit the form if needed
        
    });

    form.addEventListener('reset', function(event) {
        // This prevents the form from submitting
        event.preventDefault();
    
        // Call your function here
        
        if(confirm("Are you sure it wasn't a misclick and you actually want to clear the form?"));
            if(confirm("I know it is not a long form, but I just need to know that you are completely OK with clearing the form"));
                alert("OK! you asked for it")
                form.reset();
    
        // After your function is done, you can manually submit the form if needed
        
    });
    
    form.appendChild(formList);
    
    //  <button onclick="location.href='contact_form.html'">Contact Me!</button>
    var homePageButton = document.createElement("button")
    homePageButton.textContent = "Home";
    homePageButton.addEventListener("click", function() {
        location.href = "about_me.html";
    });
    
    // Append the form to the body (or any other container element)
    document.body.appendChild(form);
    document.body.appendChild(homePageButton);
});