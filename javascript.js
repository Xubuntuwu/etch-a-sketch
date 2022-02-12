const boxContainer = document.getElementById('boxContainer');
let boxesPerRow;
let widthSmallBox;
let smallBox = document.getElementsByClassName('smallBox');
const clearButton = document.getElementById('buttonClear');
clearButton.addEventListener('click', buttonPress);
addEventListenerList(smallBox, 'mouseover', colorChange); //keep track of hovering so that boxes can change color

function addEventListenerList(list, event, func) { //addeventlistener to a nodelist with parameter of the list, the event to listen for, and the function you want it to play
    for(i=0;i< list.length;i++) {
        list[i].addEventListener(event, func);
    }
}
function colorChange () { //function that gets inserted into addeventlistener of nodelist
    this.style.backgroundColor="black";
}

function buttonPress() { //when clear button is pressed
    let rowSquares = prompt('How many squars would you like in each row? Max=30.');
    if (rowSquares>0 && rowSquares<=100) { 
        boxContainer.innerHTML = amountOfBoxes(Math.pow(rowSquares,2));
        widthSmallBox = 100/boxesPerRow;
        for (child of smallBox) {
            child.style.width=`${widthSmallBox}%`;
        }
    }
    addEventListenerList(smallBox, 'mouseover', colorChange)
}
function amountOfBoxes(boxCount) {  //counts the amount of boxes to insert after clear button
    let divCount= '';
    boxesPerRow= Math.sqrt(boxCount);
    for (i=0; i<boxCount; i++) {
        divCount += `<div class="smallBox" id="box${i}"></div>`;
    }
    return divCount;
}
//now only add the hovering -> colorchange feature of the etch a sketch!
//HOLYYYY SHITT HOLLY SHITT I DID IT I DID IT I CAN DRAW ON THIS THING OMGGOMGOGMOGMGOGMGG!!!!! 
// and in less than 50 lines this was actually easier than the rock paper scissors ui ( ͡~ ͜ʖ ͡° )
