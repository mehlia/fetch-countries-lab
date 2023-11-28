const getCountryByName = async (countryName) => {

    // fetch data from REST countries API
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    const country = data[0];
    console.log(country);

    const displayCountry = document.getElementById("country-info");

         const name = document.createElement('p');
         name.innerText = `Country Name: ${country.name.common}`;
         
         const capital = document.createElement('p');
         capital.innerText = `Capital: ${country.capital[0]}`;
         
         const languages = document.createElement('p');
         const languagesArray = Object.values(country.languages);
         const languagesString = languagesArray.join(", ");
         languages.innerText = `Language: ${languagesString}`;
         
         const population = document.createElement('p');
         population.innerText = `Population: ${country.population}`;
         
         displayCountry.appendChild(name);
         displayCountry.appendChild(capital);
         displayCountry.appendChild(languages);
         displayCountry.appendChild(population);
    }

// call the function with specific country 
getCountryByName("singapore");