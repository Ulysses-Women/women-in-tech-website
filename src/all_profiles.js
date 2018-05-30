'use strict';

function getProfiles() {
    return fetch('http://localhost:3000/women')
        .then(response => response.json())
}

function generateProfiles() {
    let html = "";
    getProfiles()
        .then((profiles) => {
            profiles.forEach((profile) => {
                html +=
                    `<div class ="card">
                        <div class="card-header">${profile.name}</div>
                        <div class="card-body">
                            <h5 class="card-title">${profile.birthDate} - ${profile.deathDate}</h5>
                            <p class = "card-text">${profile.bio}</p>
                            
                        </div>`
            });
            $('#mainBody').html(html)
        })
}

generateProfiles();

