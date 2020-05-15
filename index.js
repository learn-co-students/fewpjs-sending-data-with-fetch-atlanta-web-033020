// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };
    let body = document.querySelector("body")
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", configObject)
    .then(resp => resp.json())
    .then( function (obj) {
        body.append(obj.name, " ", obj.email, " ", obj.id)
    })
    .catch( function (error) {
        body.append(error.message)
    })
}

document.querySelector("body")