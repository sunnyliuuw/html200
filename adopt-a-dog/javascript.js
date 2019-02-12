let totalCost = 0;
let selectedDogs = [];

function dogDetail(name, breed, cost) {
  alert(name + ', ' + breed + ', ' + cost);
}

function adoptAdd(cost, name) {
  if (!hasName(name)) {
    selectedDogs.push(name);
    totalCost = totalCost + cost;
    alert(totalCost);
  }
}

function hasName(name) {
  for (let i = 0; i < selectedDogs.length; i++) {
    if (name == selectedDogs[i]) {
      alert ('You have picked this dog');
      return true;
    }
  }
  return false;
}
