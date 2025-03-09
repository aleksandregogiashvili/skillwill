const arr = [
{name: 'Temo', age: 25}, 
{name: 'Lasha', age: 21}, 
{name: 'Ana', age: 28}
]

function YoungestUser(arr){
  if (arr.length === 0) return null;


  let youngest = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i].age < youngest.age){
      youngest = arr[i];
    }
  }
  return youngest.name;
}
  

const youngestName = YoungestUser(arr);
console.log(youngestName);