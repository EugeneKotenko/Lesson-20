function delayPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Готово");
    }, 2000);
  });
}
delayPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
