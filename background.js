const picStorage = ["./media/1.jpg", "./media/2.jpg", "./media/3.jpg", "./media/4.jpg", "./media/5.jpg", "./media/6.jpg"]
const picNumber = Math.floor(Math.random() * picStorage.length);

const blackCover = document.querySelector("#backgroundCover");
blackCover.style.backgroundImage = `url(${picStorage[picNumber]})`;