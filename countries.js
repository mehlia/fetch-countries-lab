// create function to get specific country & details
const getCountryByName = async (countryName) => {

    // fetch data from REST countries API
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    // getting one country as opposed to an array of countries
    const country = data[0];
    console.log(country);
    
    // displays country info on webpage by creating a section
    const displayCountry = document.getElementById("country-info");

        // Create HTML elements to display country info
         const name = document.createElement('p');
         name.innerText = `Country Name: ${country.name.common}`;
         console.log(name.innerText);
         
         const capital = document.createElement('p');
         capital.innerText = `Capital: ${country.capital[0]}`;
         console.log(capital.innerText);
         
        // countries with multiple languages
        // create Object path to find all languages to specific country
         const languages = document.createElement('p');
         const languagesArray = Object.values(country.languages);
         const languagesString = languagesArray.join(", ");
         languages.innerText = `Languages: ${languagesString}`;
         console.log(languages.innerText);
         
         const population = document.createElement('p');
         population.innerText = `Population: ${country.population}`;
         console.log(population.innerText);
         
        //  append each element to output container(displayCountry) together
         displayCountry.appendChild(name);
         displayCountry.appendChild(capital);
         displayCountry.appendChild(languages);
         displayCountry.appendChild(population);

         const hr = document.createElement('hr');
         displayCountry.appendChild(hr);
}

// call the function with specific country 
getCountryByName("comoros");


// EXTENSION 
// create function to get all countries & details
const getAllCountries = async (allCountries) => {

    // fetch data from REST countries API
    const response = await fetch (`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    const getAllCountries = document.getElementById("country-info");

    // create array to get all attributes for all countries
    data.forEach(country => {

        const languagesArray = Object.values(country.languages);
        const languagesString = languagesArray.join(", ");

        const countryDetails = document.createElement('p');

        // iterate each country in the array
        countryDetails.innerText +=
        `Country Name: ${country.name.common}

         Capital: ${country.capital[0]}

         Languages: ${languagesString}

         Population: ${country.population}`
         
        //  append the country details to output container(getAllCountries)
         getAllCountries.appendChild(countryDetails);

        //  create separation line between each country
         const hr = document.createElement('hr');
         getAllCountries.appendChild(hr);
    });
}

// call function to get all country details
getAllCountries();


