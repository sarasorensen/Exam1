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



//filter and display dates
var events = [
    {
        title: "Feb. 9/10 - Atlas 5",
        launch: "0403 - 0603 GMT on 10th (15:00p.m.- 16:00 a.m.EST on 9th / 10th)",
        site: "SLC-41, Cape Canaveral Air Force Station, California",
        imageUrl:
            "images/delta.jpg",
        info: "A United Launch Alliance Atlas 5 rocket, designated AV-087, will launch the Solar Orbiter spacecraft for NASA and the European Space Agency.",
        type: "mar",
    },
    {
        title: "Feb. 15 - Starlink 4",
        launch: "0403-0603 GMT on 10th (11:03p.m.- 1: 03 a.m.EST on 9th / 10th)",
        site: "SLC-41, Cape Canaveral Air Force Station, Florida",
        imageUrl:
            "images/starship.png",
        info: "A United Launch Alliance Atlas 5 rocket, designated AV-087, will launch the Solar Orbiter spacecraft for NASA and the European Space Agency.",
        type: "feb",
    },
    {
        title: "Mar. 2 - Falcon 9 SpaceX CRS 20",
        launch: "00403-0603 GMT on 10th (18:09p.m.- 20:00 a.m.)",
        site: "SLC-41, Cape Canaveral Air Force Station, Texas",
        imageUrl:
            "images/ariane.jpg",
        info: "A United Launch Alliance Atlas 5 rocket, designated AV-087, will launch the Solar Orbiter spacecraft for NASA and the European Space Agency.",
        type: "mar",
    },
    {
        title: "Mar. 9/10 - Atlas 5 Solar Orbiter",
        launch: "0403-0603 GMT on 10th (00:03p.m.- 3:06 a.m.)",
        site: "SLC-41, Cape Canaveral Air Force Station, Florida",
        imageUrl:
            "images/spacecraft.jpg",
        info: "A United Launch Alliance Atlas 5 rocket, designated AV-087, will launch the Solar Orbiter spacecraft for NASA and the European Space Agency.",
        type: "feb",
    }

];


//display events

var displayedEvents = events;

var container = document.querySelector("#container");

container.innerHTML = "";

function renderEvents() {

    container.innerHTML = "";

    displayedEvents.forEach(function (event) {

        container.innerHTML += `
        <div class="scheduleContent">
        <div class="titleBox"> 
        <p class="eventTitle">${event.title}
        </div>
        <img class="image" src="${event.imageUrl}"</img>
        <p class="launchTime">${event.launch}</p>
        <p class="launchSite" >${event.site}</p>
        <p class="launchInfo">${event.info}</p>
        </div>`;
    });
}

renderEvents();





