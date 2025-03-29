function makeToys(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Undefected");
      } else {
        reject("Defected");
      }
    }, time);
  });
}

function sellToys(status, time) {
  return new Promise((resolve, reject) => {
    if (status === "Undefected") {
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve("Toy has been sold");
        } else {
          reject("Toy was unsuccessful");
        }
      }, time);
    }
  });
}

function deliverToys(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Toys delivered");
    }, time);
  });
}

async function processToys(makeTime, sellTime, deliveryTime) {
  try {
    const makeStatus = await makeToys(makeTime);
    console.log(makeStatus);

    const sellStatus = await sellToys(makeStatus, sellTime);
    console.log(sellStatus);

    const deliveryStatus = await deliverToys(deliveryTime);
    console.log(deliveryStatus);
  } catch (err) {
    console.log(err);
  }
}

processToys(3000, 1000, 2000);