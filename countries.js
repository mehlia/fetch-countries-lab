const getCountryByName = async (countryName) => {

    // fetch data from REST countries API
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    console.log(data);

    const displayCountry = document.getElementById("country-info");

    // array to get all attributes
    data.message.forEach((countryInfo) => {
         const name = document.createElement('p');
         name.textContent = `Country Name: ${countryInfo.name}`;
         
         const capital = document.createElement('p');
         capital.textContent = `Capital: ${countryInfo.capital}`;
         
         const language = document.createElement('p');
         language.textContent = `Language: ${countryInfo.language}`;
         
         const population = document.createElement('p');
         population.textContent = `Population: ${countryInfo.population}`;
         
         displayCountry.appendChild(name);
         displayCountry.appendChild(capital);
         displayCountry.appendChild(language);
         displayCountry.appendChild(population);
        })

        document.querySelector('body').appendChild(displayCountry);
}

// call the function with specific country 
getCountryByName("bangladesh");