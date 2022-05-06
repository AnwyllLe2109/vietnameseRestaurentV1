const {foodLists}  = window;

// Check if the data is available
console.log({ foodLists }, "Store Data");

window.foodLists.forEach(item => cardCreation(item));

// create a card
function cardCreation(item){
    let card = document.createElement('div');
    let img = document.createElement("img");
    let title = document.createElement("h5");
    card.classList.add("col", "card", "m-2");
    img.src = item.image;
    img.classList.add("card-img-top");
    title.innerHTML = item.name;
    title.classList.add("card-title");
    card.appendChild(img);
    card.appendChild(title);
    document.getElementById(item.id).appendChild(card);
}
