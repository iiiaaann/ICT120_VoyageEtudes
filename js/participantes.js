//For the page participants
let participanListMobile= document.getElementById("participant-list-mobile");
let btnAdd = document.getElementById("new-add");
let participanListDesktop = document.getElementById("participant-list-desktop");
let btnAddDesktop = document.getElementById("new-add");

//For the page participants
//For list
for(let i = 0; i < participants.length; i++) {
    fnAddAccor(participants[i]);
    fnAddParticipant(participants[i]);
}


//Smartphone
function fnAddAccor(participant) {
    //<h2 class="accordion__title js-accordion-title mb-0">Accordion Title 1</h2>
    let accoItemTitle = document.createElement("h2");
    accoItemTitle.className = "accordion__title js-accordion-title mb-0";
    accoItemTitle.innerHTML = participant["last-name"] + " " + participant["first-name"];
    //<div className="accordion__content">Accordion Content 1</div>
    let accoItemDetails = document.createElement("div");
    accoItemDetails.className = "accordion__content";
    accoItemDetails.innerHTML = `<div>
                                 <p>Age` +  "\u00A0"  +  "\u00A0"  +  "\u00A0" + `: ` + participant["age"] + `</p>
                                 <p>Email  : <a href="mailto:` + participant["email"] + `">`+ participant["email"] +`</a></p>
                                 <p>URL` +  "\u00A0"  +  "\u00A0"  +  "\u00A0" + `: <a href="` + participant["url"] + `">Itranet (cpnv)</a>
                                 </div>`;
    participanListMobile.appendChild(accoItemTitle);
    participanListMobile.appendChild(accoItemDetails);
}
//accordion list
document.addEventListener("DOMContentLoaded",() => {
    let title = document.querySelectorAll('.js-accordion-title');
    for (let i = 0; i < title.length; i++){
        let titleEach = title[i];
        let content = titleEach.nextElementSibling;
        titleEach.addEventListener('click', () => {
            titleEach.classList.toggle('is-active');
            content.classList.toggle('is-open');
        });
    }

});

//btn add new
btnAdd.addEventListener("click", (event)=> {
    let newLastName = document.getElementById("last-name").value;
    let newFirstName = document.getElementById("first-name").value;
    let newAge = document.getElementById("age").value;
    let newEmail = document.getElementById("email").value;
    let newUrl = document.getElementById("url-cpnv").value;
    if((newLastName == "") || (newFirstName == "")) {
        alert("Nom et prénom sont obligatoires.");
        return;
    }
    if (newAge < 1) {
        alert("Veuillez entrer un âge plus grand que 1");
        return;
    }
    //For mobile
    //<h2 class="accordion__title js-accordion-title mb-0">Accordion Title 1</h2>
    let newAccoItemTitle = document.createElement("h2");
    newAccoItemTitle.className = "accordion__title js-accordion-title mb-0 is-active";
    newAccoItemTitle.innerHTML = newLastName + " " + newFirstName;
    newAccoItemTitle.id = "new-accordion-title";
    //<div className="accordion__content">Accordion Content 1</div>
    let newAccoItemDetails = document.createElement("div");
    newAccoItemDetails.className = "accordion__content  is-open";
    newAccoItemDetails.innerHTML = `<div>
                                 <p>Age&nbsp&nbsp&nbsp:` + +  newAge + `</p>
                                 <p>Email  : <a href="mailto:` + newEmail + `">`+ newEmail +`</a></p>
                                 <p>URL&nbsp&nbsp&nbsp: <a href="` + newUrl + `">Itranet (cpnv)</a>
                                 </div>`;
    participanListMobile.appendChild(newAccoItemTitle);
    participanListMobile.appendChild(newAccoItemDetails);

    //For Desktop
    let newNumberDesktop =
        {   "last-name":newLastName,
            "first-name":newFirstName,
            "age":newAge,
            "email":newEmail,
            "url" : newUrl
        }
    fnAddParticipant(newNumberDesktop);
    window.scroll(0, (document.documentElement.scrollHeight- document.documentElement.clientHeight));
    event.preventDefault();

    event.preventDefault();
});

//Desktop
function fnAddParticipant(participant) {
    //<div className="col-lg-3 mb-3">
    let participantDiv = document.createElement("div");
    participantDiv.className ="col-lg-3 mb-3";
    //<h3 class = "mb-0" >
    let participantName = document.createElement("h3");
    participantName.innerHTML = participant["last-name"] + " " + participant["first-name"];
    participantName.className = "mb-0";
    //<div>
    let participantDetailText = document.createElement("div");
    participantDetailText.className = "participant-details"
    participantDetailText.innerHTML =
                                `<p>Age` +  "\u00A0"  +  "\u00A0"  +  "\u00A0" + `: ` + participant["age"] + `</p>
                                 <p>Email  :<br><a href="mailto:` + participant["email"] + `">`+ participant["email"] +`</a></p>
                                 <p>URL` +  "\u00A0"  +  "\u00A0"  +  "\u00A0" + `: <a href="` + participant["url"] + `">Intranet</a>
                                 `;
    participantDiv.appendChild(participantName);
    participantDiv.appendChild(participantDetailText);
    participanListDesktop.appendChild(participantDiv);
}
