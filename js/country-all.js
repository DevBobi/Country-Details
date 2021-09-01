


const loadCountries = () => {
    const url = ('https://restcountries.eu/rest/v2/all');
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries ();

const displayCountries = countries => {
    
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <div class="card-body mt-3 border border-dark rounded bg-info">
        <h3 class="card-title">${country.name}</h3>
        <p class="card-text">Capital: ${country.capital}</p>
        <button onclick="loadCountryInfo('${country.name}')" class="btn btn-outline-dark">More Info</button>
        </div>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryInfo = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML=`
    <div class=" my-4 border border-info rounded">
        <h5 class="mt-3 text-danger">Country: ${country.name}</h5>
        <p>Population: ${country.population}</p>
        <img class="w-50 mb-3" src="${country.flag}">
    </div>
    `;
}