// makeMathGenerator.js

let operation = 'addition';

function makeMathGenerator()
{
    let evaluated;

    // mainDiv
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.className = 'mainDiv';    mainDiv.style.marginLeft = '10px';
    ge('layout').append(mainDiv);

    //-//

    // theTitle
    let theTitle = ce('div');
    theTitle.innerHTML = 'Addition';
    theTitle.className = 'theTitle';
    theTitle.id = 'theTitle';
    mainDiv.append(theTitle);

    //-//

    // generate button
    let generateButton = ce('button');
    generateButton.textContent = 'Generate';
    generateButton.id = 'generateButton';
    generateButton.className = 'buttonStyle001';
    generateButton.onmouseover = function()
    {
        hoverSound2();
    };
    generateButton.onclick = function()
    {
        clickSound2();

        ge('textbox1').value = Math.floor(Math.random() * 100);

        ge('textbox2').value = Math.floor(Math.random() * 100);

        ge('textbox3').value = '';
        ge('textbox4').value = '';

        ge('mainDiv').style.borderColor = 'rgb(255, 255, 255)';
    };
    mainDiv.append(generateButton);

    //-//

    // textbox1
    let textbox1 = ce('input');
    textbox1.type = 'text';
    textbox1.value = Math.floor(Math.random() * 100);
    textbox1.id = 'textbox1';
    mainDiv.append(textbox1);

    //-//

    // textbox2
    let textbox2 = ce('input');
    textbox2.type = 'text';
    textbox2.value = Math.floor(Math.random() * 100);
    textbox2.id = 'textbox2';
    mainDiv.append(textbox2);

    //-//

    // textbox3
    let textbox3 = ce('input'); 
    textbox3.type = 'text';
    textbox3.id = 'textbox3';
    textbox3.placeholder = 'Type Answer Here';
    textbox3.onchange = function()
    {
        let text1 = parseFloat(ge('textbox1').value);

        let text2 = parseFloat(ge('textbox2').value);

        let text3 = parseFloat(ge('textbox3').value);

        if (operation == 'addition')
        {
            evaluated = eval(text1 + text2);
        }
        else if (operation == 'subtraction')
        {
            evaluated = eval(text1 - text2);
        }
        else if (operation == 'multiplication')
        {
            evaluated = eval(text1 * text2);
        }
        else if (operation == 'division')
        {
            evaluated = eval(text1 / text2);
        }
        else if (operation == 'modulus')
        {
            evaluated = eval(text1 % text2);
        }

        cl(evaluated);

        if (text3 == evaluated)
        {
            cl('Correct');

            ge('textbox4').value = 'Correct :-)';

            ge('mainDiv').style.borderColor = 'rgb(0, 255, 255)';
        }
        else
        {
            cl('Not that');

            ge('textbox4').value = 'Not that';

            ge('mainDiv').style.borderColor = 'rgb(255, 0, 0)';
        }
    }
    mainDiv.append(textbox3);

    //-//

    // textbox4
    let textbox4 = ce('input');
    textbox4.type = 'text';
    textbox4.id = 'textbox4';
    textbox4.placeholder = 'Result';
    textbox4.style.textAlign = 'center';
    mainDiv.append(textbox4);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

