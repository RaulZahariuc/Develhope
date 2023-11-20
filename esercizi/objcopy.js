const person1 = {        // qui vendono assegnate le proprietà all'oggetto "person1"
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1; // qui viene dichiarato che gli oggetti "person1" e "person2" hanno le stesse identiche proprietà 

person2.firstName = "Simon"; // dato che i 2 oggetti hanno le stesse proprietà cambiando una di esse a "person2" la cambieremo di coseguenza anche a "person1",
                             // inquanto, abbiamo dichiarato che entrambi gli oggetti hanno le stesse proprietà 



console.log(person1);
console.log(person2);
