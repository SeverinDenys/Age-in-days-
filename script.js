
function ageInDays() {
    var birthYear = prompt("Enter your birth year");
    var ageInDay = (2021 - birthYear) * 365;
    var h1 = document.createElement("h1");  /// creates a new element
    var textAnswer = document.createTextNode("You are " + ageInDay + " days old.")
    h1.setAttribute("id", "ageInDays");  /// set the id attribute to h1 and call it "ageInDays"
    h1.appendChild(textAnswer);  /// we are adding the value of textAnswer variable inside the h1 element
    document.getElementById("result").appendChild(h1); /// we grab the needed element and add the created element
}

function reset() {
    document.getElementById("ageInDays").remove();
}
 