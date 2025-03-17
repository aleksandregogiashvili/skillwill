users = [
  {name: "Lasha", age: 40}, 
  {name: "Saba", age: 26},
  {name: "Ana", age: 25}
];

let AgeSorting = users => {
  return users.slice().sort((a,b) => a.age - b.age);
}

