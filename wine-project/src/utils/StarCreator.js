const StarCreator = (number) => {
  const array = [];
  for (let i = 0; i < number; i += 1) {
    array.push(i);
  }
  return array;
}

export default StarCreator;
