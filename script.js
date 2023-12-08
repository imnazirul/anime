const btn = document.querySelector(".btn");
const animeimg = document.querySelector(".animeimg");
const img_tag = document.querySelector(".img-tag");
const dynamic_container = document.querySelector(".dynamic-container");

btn.addEventListener("click", () => {
  getImg();
});

async function getImg() {
  btn.disabled = true;
  animeimg.src = "./Rolling-1s-200px.svg";
  btn.innerText = "Loading...";
  const response = await fetch("https://nekos.best/api/v2/neko");
  const responseObj = await response.json();

  animeimg.src = responseObj.results[0].url;
  img_tag.innerText = responseObj.results[0].artist_name;
  dynamic_container.style.display = "block";

  btn.disabled = false;
  btn.innerText = "Get Anime";
}
