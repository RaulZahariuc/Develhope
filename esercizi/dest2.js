const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };
  
  
  const { info: { name, age }, grades: { math, science } } = student;
  

  console.log("Nome:", name);
  console.log("Età:", age);
  console.log("Voto in Matematica:", math);
  console.log("Voto in Scienze:", science);
  