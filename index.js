// Add your code here
function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(obj => appendOnDOM(obj))
    .catch(error => {
      alert("You broke the shit out of this one J");
      document.body.innerHTML = error;
    });
}

function appendOnDOM(obj) {
  document.body.innerHTML = obj.id;
}
