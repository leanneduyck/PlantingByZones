let plantRepository = (function () {
  let plantList = [];
  let apiUrl =
    "https://perenual.com/api/species-list?key=sk-5nx665d38e92daa284244";

  function add(plant) {
    if (tyepof(plant) === "object" && "name" in plant) {
      plantList.push(plant);
    } else {
      console.log("information is unavailable");
    }
  }

  function getAll() {
    return plantList;
  }

  function showLoadingMessage() {
    document.getElementById("loading_message").style.display = "block";
  }

  function hideLoadingMessage() {
    document.getElementById("loading_message").style.display = "none";
  }

  function addListItem(plant) {
    let plantList = document.querySelector(".plant-list");
    let listplant = document.createElement("li");
    let button = document.createElement("div");
    button.innerText = plant.commonName;
    button.classList.add("button-class");

    let plantContainer = document.createElement("div");
    let plantImage = document.createElement("img");
    plantImage.src = plant.image?.thumbnail || "https://placehold.it/300x300";
    plantContainer.appendChild(plantImage);
    button.appendChild(plantContainer);

    listplant.appendChild(button);
    plantList.appendChild(listplant);
    button.addEventListener("click", function () {
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
        json.data.forEach(function (res) {
          let plant = {
            id: res.id,
            name: res.other_name,
            image: res.default_image,
            commonName: res.common_name,
            cycle: res.cycle,
            watering: res.watering,
          };
          add(plant);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(plant) {

    let modalContainer = document.querySelector('#modal-container');
    function showModal(title, text) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
            modal.classList.add('modal');
        let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);
        let titleElement = document.createElement('h1');
            titleElement.innerText = title;
            let contentElement = document.createElement('p');
            contentElement.innerText = text;
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
    }
    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }
    window.addEventListener('keydown', (e) => {
        hideModal();
    }
 });

 modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
        hideModal();
    }
 });

 document.querySelector('#show-modal').addEventListener('click', => {
    showModal('Modal title', 'Modal content');
 });
})();

  return {
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
  };
})();

plantRepository.loadList().then(function () {
  plantRepository.getAll().forEach(function (plant) {
    plantRepository.addListItem(plant);
  });
});
