//Upper Case
document.getElementById("upper-case").addEventListener("click", function() {

    let text = document.querySelector("textarea");
    let text2 = text.value;
    text.value = text2.toUpperCase();

});

//LowerCase
document.getElementById("lower-case").addEventListener("click", function() {

    let text = document.querySelector("textarea");
    let text2 = text.value;
    text.value = text2.toLowerCase();

});

//Proper Case
document.getElementById("proper-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value.toLowerCase();

    let textSplit = text.split(' ');

    for (let i = 0; i < textSplit.length; i++){
        textSplit[i] = textSplit[i].charAt(0).toUpperCase() + textSplit[i].slice(1);
    }

    document.querySelector("textarea").value = textSplit.join(" ");
});

//Sentence Case
document.getElementById("sentence-case").addEventListener("click", function() {

    let text = document.querySelector("textarea").value.toLowerCase();

    let textSplit = text.split(' ');

    for (let i = 0; i < textSplit.length; i++){
        if (i === 0 || textSplit[i-1].charAt(textSplit[i-1].length - 1) === '.'){
            textSplit[i] = textSplit[i].charAt(0).toUpperCase() + textSplit[i].slice(1);
        }
    }
    document.querySelector("textarea").value = textSplit.join(" ");
});

//Save File

function download(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function(){
    let text = document.querySelector("textarea").value;

    download("text.txt", text);
})