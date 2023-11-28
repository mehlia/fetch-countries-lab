function getCountryByName(countryName){
    fetch("https://restcountries.com/v3.1/name/{countryName}")
    .then(response => {
        return response.json;
    })

    .then(data => {
        console.log(data);
    })
}