export const chunkArray = (array, chunkSize) => {
  const numberOfChunks = Math.ceil(array.length / chunkSize);
  return [...Array(numberOfChunks)].map((_, index) => {
    return array.slice(index * chunkSize, (index + 1) * chunkSize);
  });
};
