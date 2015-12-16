/**
 * Created by mizuki on 2015/12/14.
 */

function $(id){
    if (typeof id != 'undefined'){
        return document.getElementById(id);
    }
}

function setText(elementId, message){
    if ((typeof elementId == 'string')
    && (typeof message == 'string')){
        var output = $(elementId);
        if (output.textContent !== undefined){
            output.textContent = message;
        }
        else {
            output.innerText = message;
        }
    }

}

function sortWords(max){
    var words = $('words').value;
    words = words.split(' ');
    var sorted = words.map(function(value){
        return value.toLowerCase();
    }).sort();

        setText('output', sorted.join(', '));
        return false;
    }
function init() {
    $('theForm').onsubmit = sortWords;
}

window.onload = init;
