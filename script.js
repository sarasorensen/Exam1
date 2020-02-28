//Menu for media queries
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
})

//API for people in space
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

    const astros = json.people;
    const resultsContainer = document.querySelector("#astros");

    let dataHTML = "";

    dataHTML += ` <div class="astrosContainer">
            <p class="bold">These people are currently in space:</p>
            <p class="people"> ${astros[0].name},
             ${astros[1].name} and ${astros[2].name}.</p>
            <p>They are all currently in the ${astros[2].craft} craft.</p>
            </div >
            </div > `;

    resultsContainer.innerHTML = dataHTML;

}
//API for space station
fetch("http://api.open-notify.org/iss-now.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        loadJson(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function loadJson(json) {
    console.log(json);

    const locationContainer = document.querySelector("#location");

    let locationDataHTML = "";

    locationDataHTML += `<div class ="location">
    <p class="bold">Current location:</p>
    <p>The  International Space Station (ISS), is currently located at:</p>
     <p class="longitude">${json.iss_position.longitude}°N,</p> 
     <p class="latitude">${json.iss_position.latitude}°E.</p>
     </div </div > `;

    locationContainer.innerHTML = locationDataHTML;

}
//API display mission info
fetch("https://api.spacexdata.com/v3/launches/latest")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        missionDisplay(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function missionDisplay(json) {

    console.log(json);

    const resultsContainer = document.querySelector("#mission");
    const results = json;

    resultsContainer.innerHTML += `
                                    <div class="mission">
                                    <h2 class="videoHeading">${results.mission_name}</h2>
                                    <p class="description" >This launch happened on ${results.launch_date_local}.</p>
                                    <p class="description">${results.details}</p>
                                    <a href="${results.links.article_link}" class="updatedArticle"><span class="bold">Article link.</span></a>
                                    <p class="updatedDate" ><span class="bold">This information was updated:</span> ${results.last_date_update}</p>
                                    </div>
                                    </div>`;


}
//scroll to video
let button = document.getElementById("button");

button.addEventListener("click", function (e) {

    document.getElementById("video").scrollIntoView();
    e.stopPropagation();

})
//Back to top button
document.getElementById("topButton").addEventListener("click", topButtonFunction);

function topButtonFunction() {
    let body = document.body;
    let html = document.documentElement;
    body.scrollTop = 0;
    html.scrollTop = 0;
}


