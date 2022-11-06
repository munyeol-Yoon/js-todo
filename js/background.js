const $body = document.querySelector("body");

const bgImage = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const paintImage = () => {
  const random = handleRandom();
  $body.style.backgroundImage = `url(../js-todo/images/Cwhale${random}.jpg)`;
};
//`url(../images/Cwhale${random}.jpg)`
const handleRandom = () => {
  let random = Math.floor(Math.random() * bgImage.length);
  return random;
};

paintImage();
