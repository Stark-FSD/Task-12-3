console.log("File Linked")


// Random User Generator API
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userContainer = document.getElementById('userContainer');
        userContainer.innerHTML = `
            <img src="${user.picture.large}" alt="User Image">
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
        `;
    })
    .catch(error => console.error(error));


  