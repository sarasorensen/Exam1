//API 
fetch("http://api.open-notify.org/astros.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        appendData(json);
    })
    .catch(function (error) {
        console.log(error);
    });


function appendData(json) {
    console.log(json);

    // get the cards array from the json object
    const astros = json.people;
    //get the container where we will insert all the cards
    const resultsContainer = document.querySelector("#astros");

    let dataHTML = "";
    // loop through the card array and create all the html with the properties from each card
    astros.forEach(function (people) {

        console.log(people)
        dataHTML += '<div class="astrosContainer">' +
            '<h2>' + people.name + '</h2>' +
            '<p>"' + people.craft + '" </p>' +
            '</div>' +
            '</div>';
    })
    resultsContainer.innerHTML = dataHTML;

}


//API 2
fetch("https://api.spacexdata.com/v3/ships")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        appendOtherData(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function appendOtherData(json) {
    console.log(json);


    const shipsResultsContainer = document.querySelector("#ships");
    const results = json;

    results.forEach(function () {
        shipsResultsContainer.innerHTML += '<div class="shipsContainer">' +
            '<h2>' + results[0].ship_id + '</h2>' +
            '<p>"' + results[0].image + '" </p>' +
            '</div>' +
            '</div>';
    })

}



//Menu for media queries
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//Back to top button
document.getElementById("topButton").addEventListener("click", topButtonFunction);

function topButtonFunction() {
    var body = document.body;
    var html = document.documentElement;
    body.scrollTop = 0;
    html.scrollTop = 0;
}








