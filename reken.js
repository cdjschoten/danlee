var getal1;
var getal2;
var action;

function initialize() {
    getal1 = 0;
    getal2 = 0;
    action = "";
}
function iniload() {
    initialize();
    document.getElementById("result").value = "";
}
function ButtonClicked(key){
resulttext = document.getElementById("result").value;
if (key >="0"  && key <="9")
 document.getElementById("result").value = resulttext + key;
 if (key == "1w")
 document.getElementById ("result").value =resulttext.substr(0, resulttext.length -1);
 if (key == "aw")
 document.getElementById ("result").value = "";
 if (key == "+" || key == "-" || key == "x" || key == ":")
 {
     if (action == "")
     {
         getal1 = parseFloat(document.getElementById("result").value );
         action = key;
         document.getElementById("result").value = "";
     }
 }

 if (key == "=")
 {
    var resultaat = 0;
    getal2 = parseFloat(document.getElementById("result").value);
    switch(action) {
    case "+":
        resultaat = getal1 + getal2;
        break;
    case "-":
        resultaat = getal1 - getal2;
        break;
    case "x":
        resultaat = getal1 * getal2;
        break;
    case ":":
        resultaat = getal1 / getal2;
        break;
    default:
        result = 0;
    }
    initialize();
    document.getElementById("result").value = resultaat;

 }

}