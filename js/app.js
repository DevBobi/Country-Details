const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const countriesDiv = document.getElementById('country-container');

const searchCountries = () => {
    const search = searchInput.value;

    const url = `https://restcountries.eu/rest/v2/name/${search}`;

    fetch(url)
    .then(res => res.json())
    .then (data => displayCountries(data));
    // console.log(data);
    
}

const displayCountries = counties => {
    
    counties.forEach( country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML=`
                <div class="card-body mt-5 col-lg-12">
                  <h5 class="card-title">${country.name}</h5>
                  <p>${country.capital}</p>
                  <button onclick="loadCountries()" class="btn btn-outline-dark">More Info</button>
                </div>
        `;
        countriesDiv.appendChild(div);
    });
} 