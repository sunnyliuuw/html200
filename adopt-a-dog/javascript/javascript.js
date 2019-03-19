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

document.getElementById('totalCost').innerHTML = totalCost;

//Form starts
const container = document.getElementById('divBox');
const form = document.createElement('form');
form.setAttribute('class', 'contact-us')
const fieldId = ['firstname', 'lastname', 'email', 'comments'];
const fieldLabel = ['First Name', 'Last Name', 'Email Address', 'Comments'];
const fieldType = ['text', 'text', 'email', 'text'];

for (let i = 0; i < fieldId.length; i++) {
  const label = document.createElement('label');
  label.textContent = fieldLabel[i];
  label.setAttribute('for', fieldId[i]);

  const input = document.createElement('input');
  input.setAttribute('id', fieldId[i]);
  input.setAttribute('type', fieldType[i]);
  input.setAttribute('required', true);

  form.appendChild(label);
  form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your submission has been received');
  for (let j = 0; j < form.elements.length-1; j++) {
    console.log(fieldLabel[j] + ' : ' + form.elements[j].value);
  }
});

container.appendChild(form);

console.log(container);
//form ends
