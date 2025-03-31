function deepCopy(obj) {
  return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
          return reject(new Error('Not an object'));
      }

      const copy = JSON.parse(JSON.stringify(obj));      
     
      resolve(copy);
  });
}


const originalObject = {
  name: 'John',
  age: 30,
  address: {
      city: 'New York',
      zip: '10001'
  }
};

deepCopy(originalObject)
  .then(copiedObject => {
      console.log('Copied Object:', copiedObject);
  })
  .catch(error => {
      console.error('Error:', error.message);
  });