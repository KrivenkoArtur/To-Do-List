
const txt1 = [
    'To-Do List.'
];

function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.title');

    function typeLine() {
        let interval = setTimeout(function() {
            out += txt1[line][count];
            htmlOut.innerHTML = out + '|';
            count++;

            // Проверки

            if (count >= txt1[line].length) {
                count = 0;
                line++;
                if (line == txt1.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out;
                    return true;
                }
            }

            typeLine()

        }, getRandomInt(350));
    }

    typeLine();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

typeText();



var nodeList = document.getElementsByTagName('LI')
var i;
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < nodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("e5cd");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);

}

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Поле не может быть пустым.");
    }else {
        document.getElementById("todoUl").appendChild(li);
    }
    document.getElementById("todoInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}

