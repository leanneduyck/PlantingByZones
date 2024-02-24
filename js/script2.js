let zoneRepository = (function () {
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
  let apiUrl =
    "https://perenual.com/api/species-list?key=sk-5nx665d38e92daa284244";

  function add(repository) {
    if (typeof repository === "object" && "name") {
      repository.push(repository);
    } else {
      console.log("information is unavailable");
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(repository) {
    let zoneRepository = document.querySelector(".zone-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener("click", function showDetails(repository) {});
    button.innerText = repository.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    zoneRepository.appendChild(listItem);
  }

  function showDetails(repository) {
    console.log(repository.name);
    (function() {
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
  }

 

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
  };
})();

console.log(zoneRepository).getAll();

zoneRepository.loadList().then(function () {
  zoneRepository.getAll().forEach(function (repository) {
    zoneRepository.addListItem(repository);
  });
});
