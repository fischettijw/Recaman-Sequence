let numbers; // hasLanded      number already landed on
let count; //  stepNumber   1,2,3,4,5, ...
let sequence; // Recaman Sequence   0,1,3,6,2,7,13,20,12,21,11
let index; // Recaman Sequence current position/index

function initialize() {
    numbers = [];
    count = 0;
    sequence = [];
    index = 0;
}

function setup() {
    initialize();
    createCanvas(500, 500);
    background('black');
}

function draw() {
    step();
    debugOutput();


}


function step() {
    let next = index - count;
    if (next < 0 || numbers[next]) {
        next = index + count;
    }
    numbers[next] = true;
    sequence.push(next);

    let diameter = next - index;
    let x = (next + index) / 2;

    stroke('white');
    strokeWeight(1);
    noFill();
    ellipse(x, height / 2, diameter);


    index = next;
    count++;

}






function debugOutput() {
    if (frameCount >= 200) {
        noLoop();
        // print(sequence);
    }
}