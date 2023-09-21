const logoutHandle = async() => {
    console.log('Logout button was clicked');
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
    })

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("There was an issue logging out");
    }
}

document.querySelector("#logout").addEventListener("click", logoutHandle);