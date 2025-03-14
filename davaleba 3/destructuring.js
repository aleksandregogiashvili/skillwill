const FindTheCity = (user) => {
  const {banks} = user;
  if(banks && banks[2] && banks[2].address) {
    const {city} = banks[2].address;
    return city;
  }
  
  return undefined;
}


