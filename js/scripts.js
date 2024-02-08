alert("What is your planting zone?");

let peaList = [
  { name: "Zone 4", date: 4.15, types: ["vegetable"] },
  { name: "Zone 5", date: 4.1, types: ["vegetable"] },
  { name: "Zone 6", date: 3.15, types: ["vegetable"] },
  { name: "Zone 7", date: 3.1, types: ["vegetable"] },
  { name: "Zone 8", date: 2.15, types: ["vegetable"] },
];

for (let i = 0; i < peaList.length; i++) {
  document.write(
    peaList[i].name + " (plant date: " + peaList[i].date + ")" + "<br>"
  );
}
if (peaList[date] < 3) {
  document.write("wow, that's early!");
}
if (peaList.date > 4) {
  document.write("wow, that's late!");
}
