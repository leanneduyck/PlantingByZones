let zoneRepository = function () {
  let repository = [
    {
      name: "Zone 3",
      imageUrl: "imgPlanting-Zone-3.webp",
    },
    {
      name: "Zone 4",
      imageUrl: "imgPlanting-Zone-4.webp",
    },
    {
      name: "Zone 5",
      imageUrl: "imgPlanting-Zone-5.webp",
    },
    {
      name: "Zone 6",
      imageUrl: "imgPlanting-Zone-6.webp",
    },
    {
      name: "Zone 7",
      imageUrl: "imgPlanting-Zone-7.webp",
    },
    {
      name: "Zone 8",
      imageUrl: "imgPlanting-Zone-8.webp",
    },
    {
      name: "Zone 9",
      imageUrl: "imgPlanting-Zone-9.webp",
    },
  ];

  // zone hardiness API code it said to copy here
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://plant-hardiness-zone.p.rapidapi.com/zipcodes/90210");
  xhr.setRequestHeader(
    "X-RapidAPI-Key",
    "32d2962646msh8f4052ed0227429p1b357ejsn66e28a448638"
  );
  xhr.setRequestHeader(
    "X-RapidAPI-Host",
    "plant-hardiness-zone.p.rapidapi.com"
  );

  xhr.send(data);
  // end of API copied code

  //I am not sure how to call this kind of API, but it would go here

  function showLoadingMessage() {
    document.getElementById("loading_message").style.display = "block";
  }

  function hideLoadingMessage() {
    document.getElementById("loading_message").style.display = "none";
  }

  //adding js
  function getAll() {
    return repository;
  }

  function addListItem(zone) {
    let zoneList = document.querySelector(".zone-list");
    let listzone = document.createElement("li");
    let button = document.createElement("div");
    button.innerText = repository.name;
    button.classList.add("button");

    let zoneContainer = document.createElement("div");
    let zoneImage = document.createElement("img");
    zoneImage.src - repository.imageUrl;
    zoneContainer.appendChild(zoneImage);
    button.appendChild(zoneContainer);

    listzone.appendChild(button);
    zoneList.appendChild(listzone);
    button.addEventListener("click", function () {
      showDetails(zone);
    });
  }

  // modal
  function showDetails(zone) {
    let modalContainer = document.querySelector("#modal-container");
    function showModal(title, text) {
      modalContainer.innerHTML = "";

      let modal = document.createElement("div");
        modal.classList.add("modal");

      let closeButtonElement = document.createElement("button");
        closeButtonElement.classList.add("modal-close");
        closeButtonElement.innerText = "Close";
        closeButtonElement.addEventListener("click", hideModal);

      let titleElement = document.createElement("h1");
        titleElement.innerText = title;
      let contentElement = document.createElement("p");
        contentElement.innerText = text;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

   function hideModal() {
      let modalContainer = document.querySelector("#modal-container");
      modalContainer.classList.remove("is-visible");
    }
    window.addEventListener("keydown", (e) => {
      let modalContainer = document.querySelector("#modal-container");
      if (e.key === "Escape" && modalContainer.classList.contains("is-visible")){
      hideModal();
      }
    });

    document.querySelector("#show-modal").addEventListener("click", () => {
      showModal("Modal title", "Modal content");
    });
  }
};
// end modal

// call js once figure out API

return {
  getAll: getAll,
  addListItem: addListItem,
};
})();

zoneRepository.loadList().then(function () {
  zoneRepository.getAll().forEach(function (zone) {
    zoneRepository.addListItem(zone);
  }
  });
