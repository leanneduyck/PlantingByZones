prompt("What is your planting zone?");

let peaRepository = (function () {
  let repository = [
    { name: "Zone 4", date: "2024-04-15", types: ["vegetable"] },
    { name: "Zone 5", date: "2024-04-01", types: ["vegetable"] },
    { name: "Zone 6", date: "2024-03-15", types: ["vegetable"] },
    { name: "Zone 7", date: "2024-03-01", types: ["vegetable"] },
    { name: "Zone 8", date: "2024-02-15", types: ["vegetable"] },
  ];

  function add(respository) {
    if (
      tyepof(repository) === "object" &&
      "name" in repository &&
      "date" in repository &&
      "types" in repository
    ) {
      repository.push(repository);
    } else {
      console.log("zone is not correct");
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(repository) {
    let peaRepository = document.querySelector(".pea-list");
    let listpea = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener("click", function showDetails(respository) {});
    button.innerText = repository.name;
    button.classList.add("button-class");
    listpea.appendChild(button);
    peaRepository.appendChild(listpea);
  }

  function showDetails(repository) {
    console.log(repository.date);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

console.log(peaRepository.getAll());

peaRepository.getAll().forEach(function (repository) {
  peaRepository.addListItem(repository);
});
