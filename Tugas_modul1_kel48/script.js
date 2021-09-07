var myArray = [];
var outArray = {};

const addMerk = () => {
    let input = document.getElementById("addMerk").value.trim()
    output = input.length > 0 ? myArray.push(input.toUpperCase()) : "";
    let output;
}

const showMerk = () => {
    let text = myArray.length === 0 ? "empty" : "";

    if (text != "empty") {
        const outArr = myArray.reduce((index, value) => index.set(value, (index.get(value) || 0) + 1), new Map());
        outArr.forEach((item, index) => {
            text += index + ": " + item + "<br>";
        });
    }

    document.getElementById("outMerk").innerHTML = text;

}