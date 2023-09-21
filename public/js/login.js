//User Login 
const loginHandler = async (event) => {
    console.log('Login button was clicked');
    event.preventDefault();

    //Get Input Values 
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username && password){
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type": "application/json"},
        })
    if (response.ok){
        //redirect the user to the homepage
        document.location.replace("/")
    } else {
        alert(response.statusText);
    }
    }
};

//Login Handler Click Event 
document.querySelector("#login").addEventListener("click", loginHandler);