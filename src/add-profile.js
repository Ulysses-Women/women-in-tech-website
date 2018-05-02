    const addProfile = profile => {
        const url = '../data/women-info.json';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        return fetch(url, options)
            .then(response => response.json());
    };

    const capitalize = (input) => {
        input = input.toString();
        var first = input[0].toUpperCase();
        var rest = input.substring(1).toLowerCase();
        return first + rest;
    };

    const capitalizeEachWord = (input) => {
        var inputArray = input.split(" ");
        var output = "";
        inputArray.forEach(function (word) {
            output += " " + capitalize(word);
        });
        return output;
    };

    $('#add-profile').on('click', function () {

        console.log("Clicking");
        addProfile({
            name: ($('#woman-profile-name').val()),
            birthDate: ($('#woman-profile-birthdate').val()),
            living: ($('#woman-profile-living').val()),
            bio: ($('#woman-profile-blurb').val())
        })
    });

})();