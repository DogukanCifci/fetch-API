//fetch

const controlFunction = () => {
  fetch("./tv-shows.json")
    .then((response) => {
      if (response.ok == false) {
        throw new Error("Veri cekilirken bir hata olustu!");
      } else return response.json();
    })
    .then((data) => pressFunction(data))
    .catch((err) => console.log(err));
};

controlFunction();

const pressFunction = (data) => {
  const display = document.querySelector(".row");

  data.forEach((a) => {
    console.log(a.show["name"]);
    display.innerHTML += ` 
    <div class="col mb-3">
    <div class="card" style="width: 18rem">
      <img src="${a.show.image.original}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${a.show.name}</h5>

        <a href="${a.url}" class="btn btn-primary">Details</a>
      </div>
    </div>
  </div>`;
  });
};
