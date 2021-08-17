const marsCost = 5000;
const moonCost = 4000;

function handleQuantity(planet, isAdd) {
  let quantityText = document.getElementById(`${planet}-input`).value;
  let quantityValue = parseInt(quantityText);
  if (isAdd == true) {
    quantityValue++;
  } else {
    if (quantityValue < 1) {
      return;
    }
    quantityValue--;
  }
  document.getElementById(`${planet}-input`).value = quantityValue;

  totalPlanetCost(planet);
  // updatePlanetCost(planet)
}

/* function updatePlanetCost(planetName) {
    document.getElementById("total-"+planetName+"-cost").innerText=journeyCost(planetName);
    
} */
let totalMarsCost = "";
let totalMoonCost = "";

function totalPlanetCost(planetName) {
  let quantityText = document.getElementById(`${planetName}-input`).value;
  let quantityValue = parseInt(quantityText);

  if (planetName == "mars") {
    totalMarsCost = marsCost * quantityValue;
    document.getElementById("total-" + planetName + "-cost").innerText =
      totalMarsCost;
  } else {
    totalMoonCost = moonCost * quantityValue;
    document.getElementById("total-" + planetName + "-cost").innerText =
      totalMoonCost;
  }
  journeyCost();
}
function journeyCost() {
  const totalJourneyCost = totalMarsCost + totalMoonCost;
  document.getElementById("journey-cost").innerText = totalJourneyCost;
}
