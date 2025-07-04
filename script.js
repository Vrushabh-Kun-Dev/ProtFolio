function validateForm (){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if(!name || !email || !message){
        document.getElementById("formMessage").innerText = "Please fill all fields."
        return false;
    }

    document.getElementById("formMessage").innerText = "Message sent Successfully!"
    return false;
}