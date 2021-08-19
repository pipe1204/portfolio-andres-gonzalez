
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

const project1Section = document.getElementById("project1")
const project1Offset = project1Section.offsetTop - 100

const project2Section = document.getElementById("project2")
const project2Offset = project2Section.offsetTop

const project3Section = document.getElementById("project3")
const project3Offset = project3Section.offsetTop

function showProject1() {
    if (window.scrollY > project1Offset) {
        project1Section.style.opacity = "1"
    }
}

document.addEventListener("scroll", showProject1)

function showProject2() {
    if (window.scrollY > project1Offset) {
        project2Section.style.opacity = "1"
    }
}

document.addEventListener("scroll", showProject2)

function showProject3() {
    if (window.scrollY > project1Offset) {
        project3Section.style.opacity = "1"
    }
}

document.addEventListener("scroll", showProject3)

const sidebar = document.getElementById("sidebar")
const menuIcon = document.getElementById("menuIcon")
let flag = false

function showMenu() {
    flag = !flag
    console.log(flag);

    if (flag === true) {
        sidebar.style.opacity = "1"
    } else if (flag === false) {
        sidebar.style.opacity = "0"
    }
}

menuIcon.onclick = showMenu

