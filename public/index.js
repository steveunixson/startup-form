function postUser() {
        axios.post('/api/user', {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    about: document.getElementById("about").value
    })
    .then(function (response) {
        if (response.data === 'OK') {
            window.location.href = "https://steveunixson.github.io";
        }

    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
}