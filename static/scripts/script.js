


var json = $.getJSON({ 'url': "open-beer-database.json", 'async': false });
json - JSON.parse(json.responseText);

function getBeerName() {
    let beerName = "Punk IPA";
    return beerName;
}

function getLastRecord() {
    /*search json for last record
     * and return the whole thing */
}

function printBeerJson() {
    console.log(json);  
}


console.log(getBeerName()); // debug text just to prove that this js file is being called correctly

document.getElementById("beerName").innerHTML = getBeerName(); 