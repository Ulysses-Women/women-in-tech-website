'use strict';

function getProfiles() {
    return fetch('http://localhost:3000/women')
        .then(response => response.json())
}

let html = "";

function formatDate(date) {
    return date.toLocaleDateString()
}
function generateCard(profile) {
    html +=
        `<div class ="card">
            <div class="card-header">${profile.firstName} ${profile.lastName}</div>
            <div class="card-body">
                <h5 class="card-title">${profile.birthDate} - ${profile.deathDate}</h5>
                <p class = "card-text">${profile.bio}</p>
            </div>
        </div>`
    return html;
}


function generateProfiles() {
    getProfiles()
        .then((profiles) => {
            profiles.forEach((profile) => {
                generateCard(profile);
            });
            $('#mainBody').html(html)
        })
}

generateProfiles();

$('#search').on('click', function(){
    console.log("Clicked");
    let html = "";
    getProfiles()
        .then((profiles) => {
            profiles.forEach((profile) => {
                let name = profile.firstName.toLowerCase();
                let lastName = profile.lastName.toLowerCase();
                let searchInput = $('#searchByName').val().toLowerCase();
                if (name.includes(searchInput) || lastName.includes(searchInput)) {
                    html = "";
                    html +=
                        `<div class ="card">
                        <div class="card-header">${profile.firstName} ${profile.lastName}</div>
                        <div class="card-body">
                            <h5 class="card-title">${profile.birthDate} - ${profile.deathDate}</h5>
                            <p class = "card-text">${profile.bio}</p>

                        </div>`
                }
            });
            $('#mainBody').html(html);
            document.getElementById("searchByName").value = "";
        });
});

$('#showAll').on('click', function(){
    generateProfiles();
});


var sort_by = function(field, reverse, primer){

    var key = primer ?
        function(x) {return primer(x[field])} :'' +
        function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
};

$('#sortDate').on('click', function() {
    html="";
    getProfiles()
        .then((profiles) => {
            profiles.sort(sort_by('birthDate', false, parseInt));
            profiles.forEach((profile) => {
                generateCard(profile)
            });
            $('#mainBody').html(html)
        })
});

$('#sortName').on('click', function(){
    html="";
    getProfiles()
        .then((profiles) => {
            profiles.sort(sort_by('lastName', false, function(a){return a.toUpperCase()}));
            profiles.forEach((profile) => {
                generateCard(profile)
            });
            $('#mainBody').html(html)
        })
});






