//Variable
//For the main page
let listCategory = document.getElementById("img-line");

for(let i = 0; i < categories.length; i++) {
    fnAddCategory(categories[i]);
}

function fnAddCategory(category) {
    //<img className="img-category" src="img/participant.jpg" alt="participant">
    let categoryImg = document.createElement("img");
    categoryImg.className = "img-category";
    categoryImg.src = "img/" + category["image"];
    categoryImg.alt = category["alt"]
    //<a href="participantes.html" target="_blank">
    let categoryURL = document.createElement("a");
    categoryURL.setAttribute('href', category["url"]);
    categoryURL.setAttribute('target', '_blank');
    categoryURL.appendChild(categoryImg);
    //<div className="col-12 col-lg-3 d-flex justify-content-center align-items-center center-image">
    let categoryInsideDiv = document.createElement("div");
    categoryInsideDiv.className = "col-12 col-lg-3 d-flex justify-content-center align-items-center center-image";
    categoryInsideDiv.appendChild(categoryURL);
    //<h2>Transports</h2>
    let titleCategory = document.createElement("h2");
    titleCategory.innerHTML = category["title"];
    //<div>
    let categoryOutsideDiv = document.createElement("div");
    categoryOutsideDiv.appendChild(categoryInsideDiv);
    categoryOutsideDiv.appendChild(titleCategory);

    listCategory.appendChild(categoryOutsideDiv);
}


