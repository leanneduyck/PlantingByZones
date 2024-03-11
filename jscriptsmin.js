const init =
  (document.getElementById("zipcode").addEventListener("keyup", (e) => {
    let t = document.getElementById("search");
    5 === e.target.value.length ? (t.disabled = !1) : (t.disabled = !0);
  }),
  document.getElementById("zipcode").addEventListener("keypress", (e) => {
    let t = document.getElementById("search");
    "Enter" === e.key && (e.preventDefault(), t.click());
  }),
  document.getElementById("search").addEventListener("click", () => {
    var e;
    let t = document.getElementById("zipcode").value,
      n = document.querySelector(".spinner-border");
    5 === t.length &&
      (function e(t) {
        let n = String(t).trim();
        for (let l in n) if (!isNaN(n.charAt(l))) return !0;
        return !1;
      })(t) &&
      (n.classList.remove("d-none"),
      ((e = t),
      fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${e}`, {
        headers: {
          "X-RapidAPI-Key":
            "32d2962646msh8f4052ed0227429p1b357ejsn66e28a448638",
          "X-RapidAPI-Host": "plant-hardiness-zone.p.rapidapi.com",
        },
      }).then((e) => e.json())).then((e) => {
        if (null !== e) {
          (function e(t) {
            document.querySelector(".modal").classList.add("show");
            let n = document.querySelector(".modal-body");
            n.innerHTML = "";
            let l = document.createElement("h3");
            (l.style.color = "green"),
              (l.textContent = `The Hardiness Zone for your zipcode is: ${t.hardiness_zone}`);
            let r = document.createElement("img");
            (r.src = `./img/Planting-Zone-${t.hardiness_zone.replaceAll(
              /\D/g,
              ""
            )}.webp`),
              (r.style.width = "100%"),
              (r.style.height = "auto"),
              n.appendChild(l),
              n.appendChild(r);
          })(e),
            n.classList.add("d-none");
          return;
        }
        (document.getElementById("errorMessage").textContent =
          "Error fetching data"),
          setTimeout(() => {
            document.getElementById("errorMessage").textContent = "";
          }, 2e3),
          n.classList.add("d-none");
      }));
  }),
  void document
    .querySelector("#exampleModalCenter .close")
    .addEventListener("click", () => {
      console.log("holaa"),
        document.querySelector(".#exampleModalCenter").classList.remove("show");
    }));
function displaySearchResults(e) {
  let t = document.getElementById("searchResults");
  (t.innerHTML = ""),
    0 === e.length
      ? (t.textContent = "No results found.")
      : e.forEach(function (e) {
          t.innerHTML += e;
        });
}
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let t = document.getElementById("searchInput").value.toLowerCase(),
    n = document.getElementById("content").getElementsByTagName("a"),
    l = [];
  for (let r = 0; r < n.length; r++) {
    let s = n[r].textContent.toLowerCase(),
      a = n[r].getAttribute("href");
    (s.includes(t) || a.includes(t)) && l.push(n[r].outerHTML);
  }
  displaySearchResults(l);
});
