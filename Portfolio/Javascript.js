
const aboutSection = document.getElementById("about")

const projectSection = document.getElementById("projects")

const features = document.getElementById("features");
const featuresOffset = features.offsetTop - 350

const about = document.getElementById("andresIcon")
const project = document.getElementById("projectIcon")

const feature = document.getElementsByClassName("feature");

function showFeatures() {

    if (window.scrollY > featuresOffset) {
        features.style.opacity = "1"
    }
}

document.addEventListener("scroll", showFeatures)

function scrollPageToAbout() {
    let aboutOffset = aboutSection.offsetTop - 100
    window.scrollTo(0, aboutOffset)
}

about.onclick = scrollPageToAbout

function scrollPageToProject() {
    let projectOffset = projectSection.offsetTop - 100
    window.scrollTo(0, projectOffset)
}

project.onclick = scrollPageToProject

