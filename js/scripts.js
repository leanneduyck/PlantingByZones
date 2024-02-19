prompt("What is your planting zone?");

let plantRepository = (function () {
  let plantList = [];
  let apiUrl =
    "https://perenual.com/api/species-list?key=sk-5nx665d38e92daa284244";
  let showLoadingMessage = "imgloading.gif";

  function add(plant) {
    if (tyepof(plant) === "object" && "other_name" in plant) {
      plantList.push(plant);
    } else {
      console.log("information is unavailable");
    }
  }

  function getAll() {
    return plantList;
  }

  function addListItem(plant) {
    let plantList = document.querySelector(".plant-list");
    let listplant = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = plant.common_name;
    button.classList.add("button-class");
    listplant.appendChild(button);
    plantList.appendChild(listplant);
    button.addEventListener("click", function (event) {
      showDetails(plant);
    });
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.data.forEach(function (id) {
          let plant = {
            name: id.other_name,
            image: id.default_image,
          };
          add(plant);
          console.log(plant);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(id) {
    showLoadingMessage();
    let url = id.default_image;
    return fetch(url)
      .then(function (response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function (id) {
        hideLoadingMessage();
        id.default_image = id.default_image;
        id.otherName = id.other_name;
        id.scientificName = id.scientific_name;
        id.cycle = id.cycle;
        id.watering = id.watering;
        id.sunglight = id.sunlight;
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(plant) {
    plantRepository.loadDetails(plant).then(function () {
      console.log(plant);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

plantRepository.loadList().then(function () {
  plantRepository.getAll().forEach(function (plant) {
    plantRepository.addListItem(plant);
  });
});
