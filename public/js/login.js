//User Login 
const loginHandler = async (event) => {
    event.preventDefault();

    //Get Input Values 
    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value.trim();

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
        alert("There was an issue logging in");
    }
    }
};

//User Sign Up 
const signupHandler = async (event) => {
    event.preventDefault();

    //Get Input Values
    const username = document.querySelector("#signup-username").value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    if (username && password){
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type": "application/json"}
        })

    if (response.ok){
        //redirect the user to the homepage 
        document.location.replace("/");
    } else {
        alert("There was an issue signing up");
    }
    }
}

//Login Handler Click Event 
document.querySelector("#login-form").addEventListener("submit", loginHandler);
//Signup Handler Click Event
document.querySelector("#signup-form").addEventListener("submit", signupHandler);