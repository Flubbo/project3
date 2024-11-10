function increasePetCount{
  petCount += 1;
};

function updatePetCount{
  var newPetCount = '<h2>You have pet Mando '+petCount+' times!</h2>';
  petCountDisplay.innerHTML = newPetCount;
};

var doggo = document.getElementById('doggo');
var petCountDisplay = document.getElementById('petCountDisplay');
var petCount = 0;
doggo.addEventListener('click', increasePetCount);
doggo.addEventListener('click', updatePetCount);