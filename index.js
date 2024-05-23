let loading = true;
const isReduced = window.matchMedia('(prefers-reduced-motion)').matches;
function pasteCode(htmlCode, cssCode, jsCode) {
    elementHTML = document.querySelector("#editing-html");
    elementCSS = document.querySelector("#editing-css");
    elementJS = document.querySelector("#editing-js");

    let result_elementHTML = get_highlighter_content(elementHTML);
    elementHTML.value = htmlCode;
    result_elementHTML.innerHTML = htmlCode.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
    Prism.highlightElement(result_elementHTML);

    let result_elementCSS = get_highlighter_content(elementCSS);
    elementCSS.value = cssCode;
    result_elementCSS.innerHTML = cssCode.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
    Prism.highlightElement(result_elementCSS);

    let result_elementJS = get_highlighter_content(elementJS);
    elementJS.value = jsCode;
    result_elementJS.innerHTML = jsCode.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
    Prism.highlightElement(result_elementJS);

    document.querySelector(".code-container:has(#editing-css)").classList.remove("disable");
    run();
    return;
}

async function typeCode(iteration, htmlCode, cssCode, jsCode){
    let element;
    let text;

    switch (iteration) {
        case 0:
            element = document.querySelector("#editing-html");
            text = htmlCode;
            break;
        case 1:
            element = document.querySelector("#editing-css");
            text = cssCode;
            break;
        case 2:
            element = document.querySelector("#editing-js");
            text = jsCode;
            loading = false;
            break;
        default:
            return true;
    }

    let timer;
    timer = setInterval(() => {
        text = updateByChar(element, text)
        if(text.length != 0){
            text = updateByChar(element, text)
        }
        element.scrollTop = element.scrollHeight;
        if(text.length == 0){
            clearInterval(timer);
            sync_scroll(element)
            if(element.id === "editing-css"){
                document.querySelector(".code-container:has(#editing-css)").classList.remove("disable");
            }
            iteration += 1
            typeCode(iteration, htmlCode, cssCode, jsCode);
        }
    }, 1)
}

function updateByChar(element, text){
    element.value += text[0];
    update(element);
    return text.substring(1);
}

function update(element) {
    let result_element = get_highlighter_content(element);
    if(result_element === null) return;
    let text = element.value
    if(text[text.length-1] == "\n") {
        text += " ";
    }
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;").replace(/\n/g, '<br>\n');
    Prism.highlightElement(result_element);
    if(!loading || (loading && text[text.length-1] == '}' || text[text.length-1] == '>')) run();
}

function block_key(e){
    e.preventDefault();
    return false;
}

function sync_scroll(element) {
    let result_element = get_highlighter(element);
    if(result_element === null) return;
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
}

function check_tab(element, event) {
    let code = element.value;
    if(event.key == "Tab") {
        event.preventDefault();
        let before_tab = code.slice(0, element.selectionStart);
        let after_tab = code.slice(element.selectionEnd, element.value.length);
        let cursor_pos = element.selectionEnd + 1;
        element.value = before_tab + "\t" + after_tab;
        element.selectionStart = cursor_pos;
        element.selectionEnd = cursor_pos;
        update(element);
    }
}

function get_highlighter(element){
    switch (element.id) {
        case 'editing-html':
            return document.querySelector('#highlighting-html');
        case 'editing-css':
            return document.querySelector('#highlighting-css');
        case 'editing-js':
            return document.querySelector('#highlighting-js');
        default:
            return null;
    }
}

function get_highlighter_content(element){
    switch (element.id) {
        case 'editing-html':
            return document.querySelector('#highlighting-content-html');
        case 'editing-css':
            return document.querySelector('#highlighting-content-css');
        case 'editing-js':
            return document.querySelector('#highlighting-content-js');
        default:
            return null;
    }
}

function setBorder(){
    if(document.activeElement?.tagName == "IFRAME") document.activeElement.className = "active";
}

function clearBorder(){
    document.querySelector("#output").className = "";
}

function minimizeCode(element){
    let maxMin =  element.querySelector("#max-min");

    let nextSibling = element.nextSibling;
    while(nextSibling && nextSibling.nodeType != 1) {
        nextSibling = nextSibling.nextSibling
    }

    element.classList.toggle("minimize");
    nextSibling.classList.toggle("minimize");
    maxMin.innerHTML == "-" ? maxMin.innerHTML = "+" : maxMin.innerHTML = "-";
}

function handleFullscreen(element){
    document.querySelector(".left").classList.toggle("minimize")
    element.classList.toggle("close");
}

function run() {
    let htmlCode = document.getElementById("editing-html").value;
    let cssCode = document.getElementById("editing-css").value;
    let jsCode = document.getElementById("editing-js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + `<style>${cssCode}</style>`;
    try {
        output.contentWindow.eval(jsCode);   
    } catch (error) {
        return true;
    }
}

async function fetchHTML() {
    return fetch('default.html')
    .then(response => response.text())
    .then((data) => {
        return data;
    })
    .catch(() => {
        return null;
    })
}

async function fetchCSS() {
    return fetch('default.css')
    .then(response => response.text())
    .then((data) => {
        return data;
    })
    .catch(() => {
        return null;
    })
}

async function fetchJS() {
    return fetch('default.js')
    .then(response => response.text())
    .then((data) => {
        return data;
    })
    .catch(() => {
        return null;
    })
}

async function initWebsite(){
    let codeBlocks = []
    codeBlocks[0] = await fetchHTML();
    codeBlocks[1] = await fetchCSS();
    codeBlocks[2] = await fetchJS();
    if(isReduced){
        pasteCode(codeBlocks[0], codeBlocks[1], codeBlocks[2]);
        return;
    }
    typeCode(0, codeBlocks[0], codeBlocks[1], codeBlocks[2]);
}

document.addEventListener('DOMContentLoaded', function() {
    initWebsite()
}, false);