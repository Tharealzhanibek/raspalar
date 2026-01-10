// RASPALAR
import { Students } from './raspalar.js'

// FUNCTIONS
import { findMatchingClasses } from './matchingClasses.js'
import { showRaspa } from './showRaspa.js'

/// ELEMENTS
const mainSelectElement = document.getElementById("main-person-select");
const secondSelectElement = document.getElementById("second-person-select");
const personButton = document.getElementById("main-person-button");
const matchingClassesButton = document.getElementById("second-person-button");
const tableContainer = document.getElementById("table-container");

/// BUTTONS
matchingClassesButton.addEventListener("click", (e) => {
    e.preventDefault();

    const mainPerson = mainSelectElement.value;
    const secondPerson = secondSelectElement.value;

    const matchingClasses = findMatchingClasses(Students[mainPerson], Students[secondPerson]);

    showRaspa(matchingClasses);
})

personButton.addEventListener("click", (e) => {
    e.preventDefault();

    const selectedPerson = mainSelectElement.value;

    showRaspa(Students[selectedPerson]);
})