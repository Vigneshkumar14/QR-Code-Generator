let title = document.getElementById("input");
let button = document.getElementById("submit");
let img = document.getElementById("img");
let main = document.getElementById("main");

let getqr = () => {
  img.style.display = "none";

  let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${title.value}`;
  let loading = document.createElement("p");
  loading.innerText = "Loading...";
  loading.style.fontWeight = "bold";
  loading.style.fontSize = "50px";
  loading.style.marginTop = "40px";
  //   console.log(loading.style);
  main.appendChild(loading);
  setTimeout(() => {
    img.src = url;
    loading.remove();
    img.style.display = "block";
  }, 1000);
};

button.addEventListener("click", getqr);
