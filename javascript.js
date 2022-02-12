const boxContainer = document.getElementById('boxContainer');
let boxesPerRow;
let widthSmallBox;
let smallBox = document.getElementsByClassName('smallBox');
const clearButton = document.getElementById('buttonClear');
clearButton.addEventListener('click', buttonPress);

function buttonPress() { 
    let rowSquares = prompt('How many squars would you like in each row? Max=30.');
    if (rowSquares>0 && rowSquares<=30) {
        boxContainer.innerHTML = amountOfBoxes(Math.pow(rowSquares,2));
        widthSmallBox = 100/boxesPerRow;
        for (child of smallBox) {
            child.style.width=`${widthSmallBox}%`;
        }
    }
}
function amountOfBoxes(boxCount) { 
    let divCount= '';
    boxesPerRow= Math.sqrt(boxCount);
    for (i=0; i<boxCount; i++) {
        divCount += `<div class="smallBox" id="box${i}"></div>`;
    }
    return divCount;
}
//now only add the hovering -> colorchange feature of the etch a sketch!
