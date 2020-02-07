//Menu for media queries
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//filter and display images
var images = [
    {
        title: "Free flying Spacecraft",
        imageUrl:
            "/images/spacecraft.jpg",
        description: "Picture of a flying spacecraft, also known as a dragon.",
        type: "39ALAUNCH"
    },
    {
        title: "falcon 9 and droneship back at port",
        imageUrl:
            "/images/craftSpace.jpg",
        description: "Picture of a spacecraft by the ocean being worked on.",
        type: "firstRe-FLight"
    },
    {
        title: "falcon 9 in the hangar after flight",
        imageUrl:
            "/images/insideCraft.jpg",
        description: "Picture of a spacecraft laying on it's side inside a building.",
        type: "firstRe-FLight",
    },
    {
        title: "Falcon 9",
        imageUrl:
            "/images/rocket.jpg",
        description: "Picture of a spacecraft outside ready for take off.",
        type: "falcon9"
    }
];


//filter

var filteredImages = images;

var imageContainer = document.querySelector("#gallery");

imageContainer.innerHTML = "";

function renderImages() {

    imageContainer.innerHTML = "";

    filteredImages.forEach(function (image) {

        imageContainer.innerHTML += `
        <div class="columnGallery">
        <img onclick="displayImage(this);" class="image-picture" src="${image.imageUrl}">
        <h2 class="image-name">${image.title}</h2>
        <p class="description" >${image.description}</p>
        </div>`;
    });
}


renderImages();


function filterImages(type) {
    filteredImages = images.filter(function (image) {
        if (type === "all") {
            return true;
        }

        if (image.type === type) {
            return true;
        }
    });

    renderImages();

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


    var resultsJson = json;
    console.log(json);


    const resultsContainer = document.querySelector("#mission");
    const results = json;


    resultsContainer.innerHTML += `
                                    <div class="mission">
                                    <h2 class="videoHeading">${results.mission_name}</h2>
                                    <p>This launch happened on ${results.launch_date_local}.</p>
                                    <p>${results.details}</p>
                                    <p>To learn more about the mission, go to: <a href="https://www.spacex.com/sites/spacex/files/starlink_press_kit_jan292020.pdf">press kit.</a></p>
                                    <p class="updatedDate" >This information was updated: ${results.last_date_update}</p>
                                    <p class="updatedSource">Source: ${results.launch_date_source}</p>
                                    </div>
                                    </div>`;


}






// Add active class to the current button
var btnContainer = document.getElementById("galleryBtnContainer");
var btns = btnContainer.getElementsByClassName("btnGallery");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.querySelector(".btnGallery.active");

        if (current) {
            current.className = current.className.replace(" active", "");
        }

        this.className += " active";
    });
}

//Display for bigger image
function displayImage(image) {
    var displayImage = document.getElementById("biggerImageDisplay");

    displayImage.src = image.src;

    displayImage.parentElement.style.display = "block";



}


//Back to top button
document.getElementById("topButton").addEventListener("click", topButtonFunction);

function topButtonFunction() {
    var body = document.body;
    var html = document.documentElement;
    body.scrollTop = 0;
    html.scrollTop = 0;
}


