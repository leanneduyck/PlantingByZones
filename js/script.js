const init = (function () {
  document.getElementById("zipcode").addEventListener("keyup", (event) => {
    const btn = document.getElementById("search");
    if (event.target.value.length === 5) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  document.getElementById("zipcode").addEventListener("keypress", (event) => {
    const btn = document.getElementById("search");
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });

  document.getElementById("search").addEventListener("click", () => {
    const zipcodeValue = document.getElementById("zipcode").value;
    if (zipcodeValue.length === 5 && isValidZipcode(zipcodeValue)) {
      getZoneByZipcode(zipcodeValue).then((response) => {
        if (response !== null) {
          showModal(response);
          return;
        }
        displayErrorMessage();
      });
    }
  });

  function displayErrorMessage() {
    document.getElementById("errorMessage").textContent = "Error fetching data";

    //Clears error mssage after 2 seconds
    setTimeout(() => {
      document.getElementById("errorMessage").textContent = "";
    }, 2000);
  }

  function showModal(response) {
    document.querySelector("#modal-container").classList.add("show");
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "";

    const p = document.createElement("h1");
    p.textContent = `${response.hardiness_zone}`;

    modalContent.appendChild(p);
  }

  //listen for on click close
  document.querySelector(".modal-close").addEventListener("click", () => {
    console.log("holaa");
    document.querySelector(".modal").classList.remove("show");
  });

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

function toggleImage(imageId) {
  var image = document.getElementById(imageId);
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}
