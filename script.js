// JavaScript code can be added here
console.log("Welcome to the Sample Webpage!");


// Dynamically change text content
const textElement = document.createElement('p');
textElement.id = 'dynamicText';
textElement.textContent = 'This is the initial text.';
document.body.appendChild(textElement);

// Modify CSS styles via JavaScript
textElement.style.color = 'blue';
textElement.style.fontSize = '20px';
textElement.style.fontFamily = 'Arial, sans-serif';

// Add a button to trigger adding/removing an element
const button = document.createElement('button');
button.textContent = 'Add/Remove Element';
document.body.appendChild(button);

// Add or remove an element when the button is clicked
let isElementAdded = false;
button.addEventListener('click', () => {
    if (!isElementAdded) {
        const newElement = document.createElement('div');
        newElement.id = 'addedElement';
        newElement.textContent = 'This is a dynamically added element.';
        newElement.style.backgroundColor = 'lightgray';
        newElement.style.padding = '10px';
        newElement.style.marginTop = '10px';
        document.body.appendChild(newElement);
        isElementAdded = true;
    } else {
        const elementToRemove = document.getElementById('addedElement');
        if (elementToRemove) {
            document.body.removeChild(elementToRemove);
        }
        isElementAdded = false;
    }
});