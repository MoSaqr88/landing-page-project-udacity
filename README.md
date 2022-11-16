# Landing Page Project
This project is a part of [Udacity](https://www.udacity.com/) Front End Developer Nanodegree program. 
The code in this repository is meant to satisfy the project #1 rubric of the Front End Web Developer nano degree.
A landing page is the conversion of a static page to a page that allows some sort of interaction. The dynamicity is achieved through javascript. 
and to show how javascript can improve the usability of an otherwise static site.

This is my first project, and I hope to be successful in using the tools that I learned to implement what is required of me in this project.

Open and view the Project using the .zip file provided or at my [Github Repository](https://github.com/MoSaqr88/landing-page-project-udacity).

The project is also hosted on [Github](https://mosaqr88.github.io/landing-page-project-udacity/).

## Table of Contents

- [Languages used](#Languages-used)
- [Getting Started](#getting-started)
- [Tools Required](#tools-required)
- [Development](#development)
- [Features](#features)
- [Running the App](#running-the-app)
- [References](#references)
- [sources i used](#sources-i-used)

## Languages used

1. HTML
2. CSS
3. JAVASCRIPT

## Gettiing Started

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

The project will be evaluated by a Udacity code reviewer according to the Landing Page project [rubric](https://review.udacity.com/#!/rubrics/2658/view)

### Tools Required

text-editor Visual Studio Code

## Development

* First challenge is to build the navbar dynamically based on the sections of the page. This can be achieved by using the below mentioned methods of javascript
    > `document.getElementById` or  `querySelectorAll` </br>
      `for or forEach loop` </br>
      `document.createElement` </br>
      `Link.innerHTML` </br>
      `appendChild` </br>

* Next step would be to add functionality to distinguish the section in view. This can be achieved by using the `.getBoundingClientRect()` method of javascript. Active states have to be added to the sections as well as the corresponding nav links.  

* Last part is to add the functionality to scroll to sections. This can be achieved by using the below mentioned methods of javascript
    > scrollIntoView().

## Features

* Active State change for sections and nav links as user scrolls the viewport
* Smooth scrolling using `scrollIntoView` when a nav link is clicked 
* A class called `active_nav` has been added to the CSS file to enable the active  color navbar.

## Running the App

* Open the project through the `.zip` file provided and extract the files. 
  > Open `index.html` in the browser of your choice.

## References

* To check if an element is in Viewport or not from [vanillajstoolkit](https://vanillajstoolkit.com/helpers/isinviewport/) 
* To handle the scrolling part, I have used [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

## sources i used 

* https://developer.mozilla.org/en-US/docs/Web/API/Event
* https://developer.mozilla.org/en-US/docs/Web/API/Document
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
* https://developer.mozilla.org/en-US/docs/Web/API/Element/className
* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods
* https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#examples
