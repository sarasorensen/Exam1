//Menu for media queries
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//filter and display images
var images = [
    {
        title: "flying man",
        imageUrl:
            "images/working.jpg",
        alt: "An astronaut working in space.",
        type: "astronaut"
    },
    {
        title: "the crafter",
        imageUrl:
            "images/craftSpace.jpg",
        alt: "A spaceship being worked on.",
        type: "spaceships"
    },
    {
        title: "the insider",
        imageUrl:
            "images/insideCraft.jpg",
        alt: "A spacecraft laying inside.",
        type: "firstRe-FLight"
    },
    {
        title: "the star",
        imageUrl:
            "images/stars.jpg",
        alt: "A spacecraft creating a shooting star.",
        type: "firstRe-FLight"
    },
    {
        title: "the spaceship",
        imageUrl:
            "images/rocket.jpg",
        alt: "A spacecraft ready for take off.",
        type: "spaceships"
    },
    {
        title: "the american",
        imageUrl:
            "images/astronaut.jpg",
        alt: "An astronaut in space above earth.",
        type: "astronaut"
    }

];


//display images 
var filteredImages = images;

var imageContainer = document.querySelector("#gallery");

imageContainer.innerHTML = "";

function renderImages() {

    imageContainer.innerHTML = "";


    filteredImages.forEach(function (image) {

        var imageSrc = "/images/1x/errorimage.png";
        if (image.imageUrl !== undefined) {
            imageSrc = image.imageUrl;
        }

        imageContainer.innerHTML += `
        <div class="columnGallery">
        <img onclick="displayImage(this);" alt="Column pictures of rockets, austronauts and shooting stars" class="image-picture" src="${imageSrc}"</img>
        <h2 class="image-name">${image.title}</h2>
        <p class="alt" >${image.alt}</p>
        </div>`;
    });
}


renderImages();



//filter type 
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


