const outputLog = document.getElementById('log');

var textAreaContent = '';

function log( text ) {
    textAreaContent += new Date().toLocaleTimeString() + ' - ';
    textAreaContent += text;
    textAreaContent += '\n';
    outputLog.innerHTML = textAreaContent;
    outputLog.scrollTop = outputLog.scrollHeight;
}