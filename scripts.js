function removeFromString(text) {
    let userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/H|h/g, " ")
    text.value = userString;
    document.getElementById("outputArea").select();
};

// Main button functions

function sitsOrWildcards(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), '\u00B7|')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function removeSlashN(text) {
    let userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(/-/g, "/")
    userString = userString.replace(new RegExp('\r?\n','g'), '\u00B7|')
    userString = userString.replace(new RegExp('\/[0-9]*','g'), '')
    text.value = userString;
    document.getElementById("outputArea").select()
};

function addSlashOne(text) {
    const input = document.getElementById("userInputArea").value.trim();
    text.value = input + "/1";
    document.getElementById("outputArea").select();
}



function addSlashStar(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(/-/g, "/")
    userString = userString.replace(new RegExp('\/[0-9]*','g'), '')
    userString = userString.replace(new RegExp('\r?\n','g'), '/\u00B7*\u00B7|')+'/\u00B7*'
    text.value = userString;
    document.getElementById("outputArea").select();
};

function changeListToSemiColonSeparated(text) {
    var userString = document.getElementById("userInputArea").value;
    var splitByThis = ';';
    if (outputArea.value == '`') splitByThis = '\u00B7;';
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), splitByThis)
    text.value = userString;
    document.getElementById("outputArea").select();
};

function changeListToComma(text) {
    // event.preventDefault();
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), ',')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function changeListToDQComma(text) {
    // event.preventDefault();
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = '"'+userString.replace(new RegExp('\r?\n','g'), '", "')+'"'
    text.value = userString;
    document.getElementById("outputArea").select();
};

function changeListToQuotedComma(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = '\''+userString.replace(new RegExp('\r?\n','g'), '\', \'')+'\''
    text.value = userString;
    document.getElementById("outputArea").select();
};

function changeListToNotThisSeparated(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = '\u00B7!'+userString.replace(new RegExp('\r?\n','g'), '\u00B7&\u00B7!')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function goldSemiColons(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), '\u00B7;')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function evisionBars(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), '|')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function starAndBar(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), '\u00B7*\u00B7|') + '\u00B7*'
    text.value = userString;
    document.getElementById("outputArea").select();
};

function starsEitherSide(text) {
    // event.preventDefault();
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = '\u00B7*' + userString.replace(new RegExp('\r?\n','g'), '\u00B7*\u00B7|\u00B7*') + '\u00B7*'
    text.value = userString;
    document.getElementById("outputArea").select();
};

// Clear text functions

function clearTextArea(text) {
    text.value = " "
    document.getElementById("userInputArea").focus();
};

function clearOutputArea(text) {
    text.value = " "
    document.getElementById("outputArea").focus;
};

// Output area functions

function removeSpaces(text) {
    var userString = document.getElementById("outputArea").value;
    userString = userString.replace(/\s/g, '')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function countItems () {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    if (userString.length == 0) {
        alert("The input box is empty.");
    }
    else if (userString.length == 1) {
     alert("The input box contains " + userString.split(/\r\n|\r|\n/).length + " item.");
    }
    else {
     alert("The input box contains " + userString.split(/\r\n|\r|\n/).length + " items.");
    }
};

// function countItems () {
//     let countText = [];
//     var userString = document.getElementById("userInputArea").value;
//     userString = userString.replace(/^\s+|\s+$/g, '')
//     for (i = 1; i > countText.length; i++) {
//         if (userString.length == 0) {
//             const element = document.createElement("p");
//                 element.textContent = "The input box is empty."
//                 const grid = document.querySelector('.output-btn-grid')
//                 grid.appendChild(element);
//                 countText.push(element);
//         }
//         else if (userString.length == 1) {
//             const element = document.createElement("p");
//                 element.textContent = "The input box contains " + userString.split(/\r\n|\r|\n/).length + " item."
//                 const grid = document.querySelector('.output-btn-grid')
//                 grid.appendChild(element);
//                 countText.push(element);
//         }
//         else {
//             const element = document.createElement("p");
//             element.textContent = "The input box contains " + userString.split(/\r\n|\r|\n/).length + " items."
//             const grid = document.querySelector('.output-btn-grid')
//             grid.appendChild(element);
//             countText.push(element);
//         }
//     }
//     if (countText.length = 1) {
//         element.remove;
//     };
// };

// Add count items alert to page

// function addCount() {
//     const element = document.createElement("p");
//     const text = element.textContent("The input box contains " + userString.split(/\r\n|\r|\n/).length + " item.")
//     const grid = document.querySelector('.output-btn-grid')
//     grid.appendChild(element);
// }
