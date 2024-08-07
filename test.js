document.addEventListener("DOMContentLoaded", () => {
    
    const action = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // const strObj = { email: email, password: password };

        fetch("http://localhost:3000/api/user", {
            method: "POST",
            body: JSON.stringify({ 'email': email, 'password': password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {response.text()
                // window.location.href ="www.facebook.com"
            })
            .then((data) => console.log(data))
            .catch((err) => console.error(err));


    }
     document.getElementById("sub").addEventListener("click", action);



})
