const person1 = {        // qui vengono assegnate le proprietà all'oggetto "person1"
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1; // qui viene dichiarato che gli oggetti "person1" e "person2" hanno le medesime proprietà 

person2.firstName = "Simon"; // poiché i 2 oggetti hanno le stesse proprietà, cambiando una di esse a "person2" modificheremo di coseguenza anche "person1"
                             // in quanto abbiamo dichiarato che entrambi gli oggetti presentano le stesse proprietà 



console.log(person1);
console.log(person2);
