const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];
  
  // ForEach 
  console.log("Nomi degli studenti:");
  studenti.forEach(studente => {
    console.log(studente.nome);
  });
  
  // Find
  const studenteConVotoSuperioreA90 = studenti.find(studente => studente.voto > 90);
  console.log("\nStudente con voto superiore a 90:", studenteConVotoSuperioreA90);
  
  //Reduce
  const mediaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0) / studenti.length;
  console.log("\nMedia dei voti degli studenti:", mediaVoti);
  
  // Map
  const nomiInMaiuscolo = studenti.map(studente => studente.nome.toUpperCase());
  console.log("\nNomi degli studenti in maiuscolo:", nomiInMaiuscolo);
  
  // Filter
  const studentiConVotiSuperioriA85 = studenti.filter(studente => studente.voto > 85);
  console.log("\nStudenti con voti superiori a 85:", studentiConVotiSuperioriA85);
  