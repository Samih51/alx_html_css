function handleFormSubmit(event){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.createElement("p");
    let messageContainer = document.getElementById("messageContainer");

    let previousError = document.getElementById("message");
    if (previousError) {
        messageContainer.removeChild(previousError);
    }
    if(name =="" || email==""){
        message.textContent = "Please fill in all fields";
        message.id = "message";
        messageContainer.appendChild(message);
        event.preventDefault()
    }
    else{
        message.textContent = "Form submitted successfully!";
        message.id = "message";
        messageContainer.appendChild(message);
    }

}