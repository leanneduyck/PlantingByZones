prompt("What is your planting zone?");

let peaList = [
  { name: "Zone 4", date: "2024-04-15", types: ["vegetable"] },
  { name: "Zone 5", date: "2024-04-01", types: ["vegetable"] },
  { name: "Zone 6", date: "2024-03-15", types: ["vegetable"] },
  { name: "Zone 7", date: "2024-03-01", types: ["vegetable"] },
  { name: "Zone 8", date: "2024-02-15", types: ["vegetable"] },
];

letPeaRepository = (function () {
  let peaList = [];

  return {
    add: function (peaList) {
      peaList.push(peaList);
    },
    getAll: function () {
      return peaList;
    },
  };
})();

function myLoopFunction(peaList) {
  document.write(
    "<p>" +
      peaList.name +
      " should be planted on " +
      peaList.date +
      "." +
      "</p>"
  );

  if (peaList.date < "2024-03-15") {
    document.write("Wow, that's early!");
  } else if (peaList.date > "2024-03-15") {
    document.write("Wow, that's late!");
  }
}

peaList.forEach(myLoopFunction);
