const init = (function () {
  document.getElementById("zipcode").addEventListener("keyup", (event) => {
    const btn = document.getElementById("search");
    if (event.target.value.length === 5) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  // enter also submits
  document.getElementById("zipcode").addEventListener("keypress", (event) => {
    const btn = document.getElementById("search");
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });

  //zipcode entry, must be length 5
  document.getElementById("search").addEventListener("click", () => {
    const zipcodeValue = document.getElementById("zipcode").value;
    const loadingSpinner = document.querySelector(".spinner-border");
    if (zipcodeValue.length === 5 && isValidZipcode(zipcodeValue)) {
      // show loading spinner
      loadingSpinner.classList.remove("d-none");
      getZoneByZipcode(zipcodeValue).then((response) => {
        if (response !== null) {
          showModal(response);
          // hide loading spinner after modal is shown
          loadingSpinner.classList.add("d-none");
          return;
        }
        displayErrorMessage();
        // hide loading spinner on error
        loadingSpinner.classList.add("d-none");
      });
    }
  });

  function displayErrorMessage() {
    document.getElementById("errorMessage").textContent = "Error fetching data";

    // clears error mssage after 2 seconds
    setTimeout(() => {
      document.getElementById("errorMessage").textContent = "";
    }, 2000);
  }

  // modal
  function showModal(response) {
    document.querySelector(".modal").classList.add("show");
    const modalContent = document.querySelector(".modal-body");
    modalContent.innerHTML = "";

    const title = document.createElement("h3");
    title.style.color = "green";
    title.textContent = `The Hardiness Zone for your zipcode is: ${response.hardiness_zone}`;

    const img = document.createElement("img");
    img.src = `./img/Planting-Zone-${response.hardiness_zone.replaceAll(
      /\D/g,
      ""
    )}.webp`;

    img.style.width = "100%";
    img.style.height = "auto";

    modalContent.appendChild(title);
    modalContent.appendChild(img);
  }

  //listen for on click close
  document
    .querySelector("#exampleModalCenter .close")
    .addEventListener("click", () => {
      console.log("holaa");
      document.querySelector(".#exampleModalCenter").classList.remove("show");
    });

  // API
  function getZoneByZipcode(zipcode) {
    return fetch(
      `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcode}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "32d2962646msh8f4052ed0227429p1b357ejsn66e28a448638",
          "X-RapidAPI-Host": "plant-hardiness-zone.p.rapidapi.com",
        },
      }
    ).then((res) => res.json());
  }

  function isValidZipcode(str) {
    const zipcode = String(str).trim();
    for (let character in zipcode) {
      if (!isNaN(zipcode.charAt(character))) {
        return true;
      }
    }
    return false;
  }
})();

// navbar search
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const searchQuery = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const links = document.getElementById("content").getElementsByTagName("a");
    const searchResults = [];

    // loop through links and check for matching text
    for (let i = 0; i < links.length; i++) {
      const linkText = links[i].textContent.toLowerCase();
      const linkHref = links[i].getAttribute("href");
      if (linkText.includes(searchQuery) || linkHref.includes(searchQuery)) {
        searchResults.push(links[i].outerHTML);
      }
    }

    displaySearchResults(searchResults);
  });

function displaySearchResults(results) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.textContent = "No results found.";
  } else {
    results.forEach(function (result) {
      resultsContainer.innerHTML += result;
    });
  }
}
