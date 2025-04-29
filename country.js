const selectedCountry = JSON.parse(localStorage.getItem("selectedCountry"));

if (selectedCountry) {
    
  const flagImg = document.getElementById("flag");
  flagImg.src = selectedCountry.flags?.png || "";
  flagImg.alt = `${selectedCountry.name.common} Flag`;

  document.getElementById("name").textContent = selectedCountry.name.common || "N/A";

  document.getElementById("official-name").textContent = 
    selectedCountry.name.official || "N/A";

  document.getElementById("capital").textContent = 
    selectedCountry.capital ? selectedCountry.capital.join(", ") : "N/A";

  document.getElementById("region").textContent = 
    selectedCountry.region || "N/A";

  document.getElementById("subregion").textContent = 
    selectedCountry.subregion || "N/A";

  document.getElementById("population").textContent = 
    selectedCountry.population?.toLocaleString() || "N/A";

  document.getElementById("area").textContent = 
    selectedCountry.area?.toLocaleString() || "N/A";

  document.getElementById("languages").textContent = 
    selectedCountry.languages ? Object.values(selectedCountry.languages).join(", ") : "N/A";

  document.getElementById("currencies").textContent = 
    selectedCountry.currencies 
      ? Object.values(selectedCountry.currencies)
          .map((curr) => `${curr.name} (${curr.symbol})`)
          .join(", ")
      : "N/A";

  document.getElementById("timezones").textContent = 
    selectedCountry.timezones ? selectedCountry.timezones.join(", ") : "N/A";
  
} else {
  document.querySelector(".country-details-container").innerHTML = `
    <p>Country data not available.</p>
  `;
}

const themeToggle = document.querySelector(".theme-toggle i");
  const body = document.body;
  
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    document.body.classList.toggle("dark");
  
    if (body.classList.contains("dark-mode")) {
      themeToggle.classList.remove("fa-moon");
      themeToggle.classList.add("fa-sun");
      
    } else {
      themeToggle.classList.remove("fa-sun");
      themeToggle.classList.add("fa-moon");
    }
  });


darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
