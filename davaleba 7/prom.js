function mySetTimeout(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

// Usage
mySetTimeout(2000).then(() => {
  console.log('2 seconds have passed!');
});