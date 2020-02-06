//Menu for media queries
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//filter and display images
var images = [
    {
        link: "Free flying Spacecraft",
        imageUrl:
            "/images/spacecraft.jpg",
        description: "Picture of a flying spacecraft, also known as a dragon.",
        type: "dragon"
    },
    {
        link: "falcon 9 and droneship back at port",
        imageUrl:
            "/images/craftSpace.jpg",
        description: "Picture of a spacecraft by the ocean being worked on.",
        type: "firstRe-FLight"
    },
    {
        link: "falcon 9 in the hangar after flight",
        imageUrl:
            "/images/insideCraft.jpg",
        description: "Picture of a spacecraft laying on it's side inside a building.",
        type: "firstRe-FLight",
    },
    {
        link: "Falcon 9",
        imageUrl:
            "/images/rocket.jpg",
        description: "Picture of a spacecraft outside ready for take off.",
        type: "falcon9"
    },
    {
        link: "long exposure of a falcon 9 launch",
        imageUrl:
            "/images/stars.jpg",
        description: "Picture of a spacecraft creating a shooting star effect.",
        type: "39ALAUNCH"
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
        <a class="image-name">${image.link}</a>
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


