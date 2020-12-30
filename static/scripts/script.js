
fetch('https://gregoryjameswalsh.github.io/BeerTigerr/open-beer-database.json')
    .then(function (response) {
        // The JSON should be arriving here sometime and somewhere
        console.log("SUCCESS!", response);
       return response.json();
    })
    .then(function (data) {
        var beers = data[0].fields.name;
        console.log(beers);
        //appendData(data);
})
    .catch(function (err) {
    console.log("JSON Error!");
});

function appendData(data) {
    var mainContainer = document.getElementById("lotsOfData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Beer Name: ' + data[i].fields.name;
        
        mainContainer.appendChild(div);
    }
}


function fetchJson(myRecordNum) {

    i = myRecordNum;
    
    fetch("https://gregoryjameswalsh.github.io/BeerTigerr/open-beer-database.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var x = data.length;
            console.log(x);
            var myBeer = data[myRecordNum].fields.name;
            console.log(myBeer);
            return myBeer;
        })
        .catch(function (err) {
            console.log('JSON Error MoFo!');
        });
}

fetchJson(5);
// console.log(json);

/// document.getElementById("beerName").innerHTML = fetchJson(3); 
console.log(myBeer);