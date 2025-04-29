const countries = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await data.json();
  
    const container = document.querySelector(".country-container");
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const regionFilter = document.getElementById("region-filter");
    const noResultsMessage = document.querySelector(".no-results");
  
    const displayCountries = (countriesArray) => {
      container.innerHTML = "";
  
      if (countriesArray.length === 0) {
        noResultsMessage.style.display = "block";
      } else {
        noResultsMessage.style.display = "none";
  
        countriesArray.forEach((c) => {
          const countryDiv = document.createElement("div");
          countryDiv.classList.add("country-card");
  
          countryDiv.innerHTML = `
            <img src="${c.flags.png}" alt="${c.name.common} Flag" class="flag" />
            <div class="country-info">
              <h2>${c.name.common}</h2>
              <p><strong>Population:</strong> ${c.population.toLocaleString()}</p>
              <p><strong>Continent:</strong> ${c.region}</p>
            </div>
          `;
  
          // ➡️ ADD: Click event to card
          countryDiv.addEventListener("click", () => {
            localStorage.setItem("selectedCountry", JSON.stringify(c));
            window.location.href = "country.html";
          });
  
          container.appendChild(countryDiv);
        });
      }
    };
  
    displayCountries(countryData);
  
    const applyFilters = () => {
      const query = searchInput.value.trim().toLowerCase();
      const selectedRegion = regionFilter.value;
  
      let filteredCountries = countryData;
  
      if (query) {
        filteredCountries = filteredCountries.filter((c) =>
          c.name.common.toLowerCase().includes(query)
        );
      }
  
      if (selectedRegion) {
        filteredCountries = filteredCountries.filter((c) =>
          c.region === selectedRegion
        );
      }
  
      displayCountries(filteredCountries);
    };
  
    searchButton.addEventListener("click", applyFilters);
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        applyFilters();
      }
    });
    regionFilter.addEventListener("change", applyFilters);
  };
  
  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle i");
  const body = document.body;
  
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      themeToggle.classList.remove("fa-moon");
      themeToggle.classList.add("fa-sun");
    } else {
      themeToggle.classList.remove("fa-sun");
      themeToggle.classList.add("fa-moon");
    }
  });
  
  countries();
  