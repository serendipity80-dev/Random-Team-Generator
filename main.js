

let students = [{
    "name": "Gabor Szatmari ",
    "level": "medium"
  },
  {
    "name": "Ljiljana Bagaric ",
    "level": "low"
  },
  {
    "name": "Adam Wrobel",
    "level": "medium"
  },
  {
    "name": "Arifur Rahman Arif",
    "level": "medium"
  },
  {
    "name": "Daniel Ulises *",
    "level": "high"
  },
  {
    "name": "Glauber Nespoli * ",
    "level": "high"
  },
  {
    "name": "Ion Chircu ",
    "level": "medium"
  },
  {
    "name": "Maja Marek ",
    "level": "medium"
  },
  {
    "name": "Manonmani Subramaniam*",
    "level": "high"
  },
  {
    "name": "Matheus Gleizer  ",
    "level": "medium"
  },
  {
    "name": "Nils Walsdorfer ",
    "level": "low"
  },
  {
    "name": "Rashad Alsharaa",
    "level": "low"
  },
  {
    "name": "Rysmendieva Nargiza",
    "level": "low"
  },
  {
    "name": "Santiago Julian ",
    "level": "medium"
  },
  {
    "name": "Tareq Abo Hilal ",
    "level": "medium"
  }
  
];
// let group = document.getElementsByClassName('group')
// group = "";
//  const FbW39 = students.reduce((levels,students)=>{
// const {high = 0,medium = 0, low = 0} = levels;
// if (students.level === 'high') {
//   return {...levels, high:high +1};
// }else if (students.level === 'medium') {
//   return {...levels, medium:medium +1};
// } else {
//   return {...levels, low: low +1};
// }
//  }, {});
// console.log(FbW39);

students.forEach(function(groupOfStudents){
for(let k in groupOfStudents){
  if (groupOfStudents.hasOwnProperty(k)) {
    console.log(k,groupOfStudents[k]);
  }
}
});
let group = [
  {'group':'g1','students':[{
    'name':'Gabor',
    'level':'medium'
  },{
    'name':'Ljiljana',
    'level':'low'
  },{
    'name':'Daniel',
    'level':'high'
  },{
    'name':'Maja',
    'level':'medium'
  }]},
  {'group':'g2','students':[{
    'name':'Adam',
    'level':'medium'
  },{
    'name':'Nargiza',
    'level':'low'
  },{
    'name':'Glauber',
    'level':'high'
  },{
    'name':'Tareq',
    'level':'medium'
  }]},
  {'group':'g3','students':[{
    'name':'Arif',
    'level':'medium'
  },{
    'name':'Nils',
    'level':'low'
  },{
    'name':'Manon',
    'level':'high'
  }]},
  {'group':'g4','students':[{
    'name':'Santiago',
    'level':'medium'
  },{
    'name':'Rashad',
    'level':'low'
  },{
    'name':'Matheus',
    'level':'medium'
  }]}
];
console.log(group);


  function shuffle(group) {
    let currentIndex = group.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      let temporaryValue = group[currentIndex];
      group[currentIndex] = group[randomIndex];
      group[randomIndex] = temporaryValue;
    }
  
    return group;
  }
  console.log( shuffle(group));
 
  
  function shuffler() {
    shuffle(students); 
    document.getElementById("student01")
    .innerHTML =`${students[0].name} 
    `;
  document.getElementById("student02")
  .innerHTML =`${students[1].name}`;
  document.getElementById("student03")
  .innerHTML =`${students[2].name}`;
  document.getElementById("student04")
  .innerHTML =`${students[3].name}`;
  document.getElementById("student05")
  .innerHTML =`${students[4].name} `;
  document.getElementById("student06")
  .innerHTML =`${students[5].name}`;
  document.getElementById("student07")
  .innerHTML =`${students[6].name}`;
  document.getElementById("student08").innerHTML =`${students[7].name}`;
  document.getElementById("student09").innerHTML =`${students[8].name} `;
  document.getElementById("student10").innerHTML =`${students[9].name}`;
  document.getElementById("student11").innerHTML =`${students[10].name}`;
  document.getElementById("student12").innerHTML =`${students[11].name} `;
  document.getElementById("student13").innerHTML =`${students[12].name}`;
  document.getElementById("student14").innerHTML =`${students[13].name}`;

 
  }
  
  // let myInterval = setInterval(shuffler,50);
  // clearInterval(myInterval);
  
  document.getElementById("shuffle").addEventListener("click", shuffler);
  
  window.addEventListener("keypress", checkKeyPressed, false);
   
  function checkKeyPressed(e) {
      if (e.charCode == "32") {
        document.getElementById("shuffle").addEventListener("click", shuffler);    
      }
  }
  