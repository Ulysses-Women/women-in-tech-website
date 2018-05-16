import getProfiles from './get-profiles';

function generateCards() {
    let html = "";
    getProfiles()
        .then((women) => {
            women.forEach((woman) => {
                html +=
                    `<div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">${woman.name}</h5>
                        <p class="card-text">Genre: ${woman.bio}</p>
                    </div>
                </div>`
            })
        })
}

generateCards();