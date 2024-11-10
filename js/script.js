function increasePetCount{
  petCount += 1;
};

function updatePetCount{
    petCountDisplay.innerHTML = 'You have pet Mando '+petCount+' times!';
};

var doggo = document.getElementById('doggo');
var petCountDisplay = document.getElementById('petCountDisplay');
var petCount = 0;
doggo.addEventListener('click', increasePetCount);
doggo.addEventListener('click', updatePetCount);