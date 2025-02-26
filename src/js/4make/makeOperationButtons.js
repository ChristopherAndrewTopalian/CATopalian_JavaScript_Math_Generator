// makeOperationButtons.js

function makeOperationButtons()
{
    let buttonContainer = ce('div');
    buttonContainer.id = 'buttonContainer';
    buttonContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    buttonContainer.style.width = 200 + 'px';
    buttonContainer.style.height = 200 + 'px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.overflowY = 'scroll';
    buttonContainer.style.gap = 5 + 'px';
    ge('layout').append(buttonContainer);

    //-//

    let addition = ce('button');
    addition.textContent = 'Add';
    addition.onmouseover = function()
    {
        hoverSound2();
    };
    addition.onclick = function()
    {
        operation = 'addition';
        clickSound2();
        ge('theTitle').textContent = 'Addition';
    };
    addition.className = 'buttonStyle001';
    buttonContainer.append(addition);

    //-//

    let subtraction = ce('button');
    subtraction.textContent = 'Subtract';
    subtraction.onmouseover = function()
    {
        hoverSound2();
    };
    subtraction.onclick = function()
    {
        operation = 'subtraction';
        clickSound2();
        ge('theTitle').textContent = 'Subtraction';
    };
    subtraction.className = 'buttonStyle001';
    buttonContainer.append(subtraction);

    //-//

    let multiplication = ce('button');
    multiplication.textContent = 'Multiply';
    multiplication.onmouseover = function()
    {
        hoverSound2();
    };
    multiplication.onclick = function()
    {
        operation = 'multiplication';
        clickSound2();
        ge('theTitle').textContent = 'Multiplication';
    };
    multiplication.className = 'buttonStyle001';
    buttonContainer.append(multiplication);

    //-//

    let division = ce('button');
    division.textContent = 'Divide';
    division.onmouseover = function()
    {
        hoverSound2();
    };
    division.onclick = function()
    {
        operation = 'division';
        clickSound2();
        ge('theTitle').textContent = 'Division';
    };
    division.className = 'buttonStyle001';
    buttonContainer.append(division);

    //-//

    let modulo = ce('button');
    modulo.textContent = 'Modulo';
    modulo.onmouseover = function()
    {
        hoverSound2();
    };
    modulo.onclick = function()
    {
        operation = 'modulus';
        clickSound2();
        ge('theTitle').textContent = 'Modulo';
    };
    modulo.className = 'buttonStyle001';
    buttonContainer.append(modulo);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

