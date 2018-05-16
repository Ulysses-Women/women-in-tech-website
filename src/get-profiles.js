module.exports = {

    getProfiles: () => {
    return fetch('http://localhost:3000/women')
        .then(response => response.json())
    }

};