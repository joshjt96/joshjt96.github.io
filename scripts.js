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

function changeListToComma(text, event) {
    event.preventDefault();
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = userString.replace(new RegExp('\r?\n','g'), ',')
    text.value = userString;
    document.getElementById("outputArea").select();
};

function changeListToDQComma(text, event) {
    event.preventDefault();
    var userString = document.getElementById("userInputArea").value;
    userString = userString.replace(/^\s+|\s+$/g, '')
    userString = '"'+userString.replace(new RegExp('\r?\n','g'), '", "')+'"'
    text.value = userString;
    document.getElementById("textOutputArea").select();
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

function starsEitherSide(text, event) {
    event.preventDefault();
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