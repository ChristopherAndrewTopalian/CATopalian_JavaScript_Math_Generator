// makeLayout.js

function makeLayout()
{
    ba(makeTitleOfApp());

    //-//

    let layout = ce('div');
    layout.id = 'layout';
    layout.style.display = 'flex';
    layout.style.flexDirection = 'row';
    // space between the two divs
    layout.style.gap = '5px';
    // allows divs to wrap to a new line when needed */
    // layout.style.flexWrap = 'wrap';
    ba(layout);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

