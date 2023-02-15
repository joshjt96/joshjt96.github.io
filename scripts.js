function removeFromString(text) {
    let userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/H|h/g, " ")
    text.value = userString;
    document.getElementById("outputArea").select();
};

// Main button functions

function sitsOrWildcards(text) {
    var userString = document.getElementById("textInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), '\u00B7|')
    text.value = userString;
    document.getElementById("textOutputArea").select();
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

function addSlashStar(text) {
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(/-/g, "/")
    userString = userString.replace(new RegExp('\/[0-9]*','g'), '')
    userString = userString.replace(new RegExp('\r?\n','g'), '/\u00B7*\u00B7|')+'/\u00B7*'
    text.value = userString;
    document.getElementById("outputArea").select();
}

function changeListToSemiColonSeparated(text) {
    var userString = document.getElementById("textInputArea").value;
    
    var splitByThis = ';';
    if (textOutputArea.value == '`') splitByThis = '\u00B7;';
       
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), splitByThis)
    text.value = userString;
    document.getElementById("textOutputArea").select();
}

function changeListToComma(text, event) {
    event.preventDefault();
    var userString = document.getElementById("textInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), ',')
    text.value = userString;
    document.getElementById("textOutputArea").select();
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