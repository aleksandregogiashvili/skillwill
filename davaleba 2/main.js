function userCopy(user){
  let copiedUser = {};

  for (let key in user){
    copiedUser[key] = user[key];
  }

  return copiedUser;
}

const user = [
  { name: 'John Doe', age: 15 },
  { name: 'Jane Smith', age: 32 },
  { name: 'John Jones', age: 40 }
]

const copiedUser = userCopy(user);
console.log(copiedUser);
