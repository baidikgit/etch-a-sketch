const container = document.querySelector(".container");

let isPainting = false;
document.addEventListener("mousedown", () => isPainting = true);
document.addEventListener("mouseup", () => isPainting = false);

newSketchpad();

//button functionality
const btn = document.querySelector(".new");
btn.addEventListener("click",()=>newSketchpad());

//new-sketchpad
function newSketchpad(){
    const pixels = prompt("Enter no.of pixels per side (max 100): ",16);
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
                if(isPainting){let current  = parseFloat(divArray[i][j].style.opacity) || 0; 
                    if(current<1) divArray[i][j].style.opacity = current + 0.1;}
                });

                divArray[i][j].addEventListener("mousedown", (e) => {
                e.preventDefault(); //no dragging
                let current  = parseFloat(divArray[i][j].style.opacity) || 0; 
                    if(current<1) divArray[i][j].style.opacity = current + 0.1;
                });
            divArray[i][j].style.width = `${966 / pixels}px`;
            divArray[i][j].style.aspectRatio = "1 / 1";
            container.appendChild(divArray[i][j]);
        }
        
    }
}

