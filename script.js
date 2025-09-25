const container = document.querySelector(".container");
//initial sketchpad
let divArray = [];
for(let i = 0;i<16;i++){
    divArray[i] = [];
    for(let j = 0;j<16;j++){
        divArray[i][j] = document.createElement("div");
        divArray[i][j].classList.add("grid-cell");
        //paint function
            divArray[i][j].addEventListener("mouseover", () => {
            divArray[i][j].style.opacity += 0.5;
            });
        container.appendChild(divArray[i][j]);
    }
    
}
//button functionality
const btn = document.querySelector(".new");
btn.addEventListener("click",()=>newSketchpad());

//new-sketchpad
function newSketchpad(){
    const pixels = prompt("Enter no.of pixels per side (max 100): ");
//old sketchpad deletion
container.innerHTML="";
//new sketchpad creation
    divArray = []
    for(let i = 0;i<pixels;i++){
        divArray[i] = [];
        for(let j = 0;j<pixels;j++){
            divArray[i][j] = document.createElement("div");
            divArray[i][j].classList.add("grid-cell");
            //paint function
                divArray[i][j].addEventListener("mouseover", () => {
                divArray[i][j].style.opacity += 0.5;
                });
            container.appendChild(divArray[i][j]);
        }
        
    }
}

