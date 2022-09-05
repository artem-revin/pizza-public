export const example =
  () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
  and an optimized production build.`

/*import Swiper from "swiper";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});*/


let firstSlide = document.querySelector("#swipe1");
let secondSlide = document.querySelector("#swipe2");
let thirdSlide = document.querySelector("#swipe3");

/*console.log(firstSlide);*/

firstSlide.addEventListener("click", (e) => createNewSlide(e.target));
secondSlide.addEventListener("click", (e) => createNewSlide(e.target));
thirdSlide.addEventListener("click", (e) => createNewSlide(e.target));

function createNewSlide(slide) {
    /*let forDel = document.querySelector("#main");
    document.body.removeChild(forDel);*/

    let init = slide.id;

    let container = document.createElement("div");
    let containerImage = document.createElement("div");
    let image = document.createElement("img");
    let containerInfo = document.createElement("div");
    let containerHeader = document.createElement("div");
    let header = document.createElement("p");
    let containerName = document.createElement("div");
    let name = document.createElement("p");
    let containerDesc = document.createElement("div");
    let desc = document.createElement("p");
    let containerButtons = document.createElement("div");
    let containerFirstB = document.createElement("div");
    let firstBName = document.createElement("p");
    let containerSecondB = document.createElement("div");
    let secondBName = document.createElement("p");

    containerFirstB.append(firstBName);
    containerSecondB.append(secondBName);
    containerButtons.append(containerFirstB);
    containerButtons.append(containerSecondB);

    containerDesc.append(desc);
    containerName.append(name);
    containerHeader.append(header);

    containerInfo.append(containerHeader);
    containerInfo.append(containerName);
    containerInfo.append(containerDesc);
    containerInfo.append(containerButtons);

    containerImage.append(image);

    switch (init) {
        case "swipe1" : {
            header.innerText = "Delicious";
            header.classList.add("head");
            containerHeader.classList.add("wood-item");
            name.innerText = "Italian Cuizine";
            name.classList.add("head2");
            containerName.classList.add("wood-item");
            desc.innerText = "A small river named Duden flows by their place and supplies it with the necessary regelialia";
            desc.classList.add("head3");
            containerDesc.classList.add("wood-item");
            firstBName.innerText = "Order Now";
            secondBName.innerText = "View Menu";
            containerButtons.classList.add("main-container-wood-buttons");
            image.src = "assets/img/bg_1.png";
            image.setAttribute("width", "500px");
            image.setAttribute("height", "500px");

            container.append(containerInfo);
            container.append(containerImage);

            container.classList.add("main-container-wood1");
            container.setAttribute("id", "main");

            let slidePlace = document.querySelector("#main");
            slidePlace.replaceWith(container);
            break;
        }

        case "swipe2" : {
            header.innerText = "Crunchy";
            header.classList.add("head");
            containerHeader.classList.add("wood-item");
            name.innerText = "Italian Pizza";
            name.classList.add("head2");
            containerName.classList.add("wood-item");
            desc.innerText = "A small river named Duden flows by their place and supplies it with the necessary regelialia";
            desc.classList.add("head3");
            containerDesc.classList.add("wood-item");
            firstBName.innerText = "Order Now";
            secondBName.innerText = "View Menu";
            containerButtons.classList.add("main-container-wood-buttons");
            image.src = "assets/img/bg_2.png";
            image.setAttribute("width", "500px");
            image.setAttribute("height", "500px");

            container.append(containerImage);
            container.append(containerInfo);

            container.classList.add("main-container-wood2");
            container.setAttribute("id", "main");

            let slidePlace = document.querySelector("#main");
            slidePlace.replaceWith(container);
            break;
        }

        case "swipe3" : {
            header.innerText = "Welcome";
            header.classList.add("head");
            name.innerText = "We cooked your desired pizza recipe";
            name.classList.add("head2");
            desc.innerText = "A small river named Duden flows by their place and supplies it with the necessary regelialia";
            desc.classList.add("head3");
            firstBName.innerText = "Order Now";
            secondBName.innerText = "View Menu";
            containerButtons.classList.add("main-container-wood-buttons");

            container.append(containerInfo);

            container.classList.add("main-container-wood3");
            container.setAttribute("id", "main");

            let slidePlace = document.querySelector("#main");
            slidePlace.replaceWith(container);
            break;
        }
    }
}