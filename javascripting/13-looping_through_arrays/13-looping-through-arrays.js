var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(pet, i) {
	pet = pet + 's';
	pets[i] = pet;
});


console.log(pets);