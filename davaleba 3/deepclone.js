const original = {
  name: "Alex",
  age: 19,
  address: {
    city: "Tbilisi",
    country: "Georgia"
  },
  hobbies: ["football", "gaming"]
};

const deepCopy = (obj) => {
  const copiedObj = {
    ...obj,
    address: {...obj.address},
    hobbies: {...obj.hobbies},
  }
  
  return copiedObj;
}


