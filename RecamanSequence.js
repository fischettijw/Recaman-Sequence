let numbers; // hasLanded      number already landed on
let count; //  stepNumber   1,2,3,4,5, ...
let sequence; // Recaman Sequence   0,1,3,6,2,7,13,20,12,21,11
let index; // Recaman Sequence current position/index
let arcs; // save arcs (semi-circles)

function initialize() {
    numbers = [];
    count = 0;
    sequence = [];
    index = 0;
    arcs = [];
}

function setup() {
    initialize();
    createCanvas(500, 500);
    // background('black');
}

function draw() {
    background('black');
    step();
    debugOutput();

    for (let ar of arcs) {
        ar.show();
    }

}




function step() {
    let next = index - count;
    if (next < 0 || numbers[next]) {
        next = index + count;
    }
    numbers[next] = true;
    sequence.push(next);

    let a = new Arc(index, next, count % 2);
    arcs.push(a);

    // let diameter = abs(next - index);
    // let x = (next + index) / 2;

    // stroke('white');
    // strokeWeight(1);
    // noFill();
    // if (count % 2 == 0) {
    //     arc(x, height / 2, diameter, diameter, PI, 0);
    // } else {
    //     arc(x, height / 2, diameter, diameter, 0, PI);
    // }
    // arc(x, height / 2, diameter, diameter, 0, PI);
    // ellipse(x, height / 2, diameter);


    index = next;
    count++;

}



function debugOutput() {
    if (frameCount >= 200) {
        noLoop();
        // print(sequence);
    }
}


class Arc {
    constructor(start, end, dir) {
        this.start = start;
        this.end = end;
        this.dir = dir;
    }

    show() {
        let diameter = abs(this.end - this.start);
        let x = (this.end + this.start) / 2;

        stroke('white');
        strokeWeight(1);
        noFill();
        if (this.dir == 0) {
            arc(x, height / 2, diameter, diameter, PI, 0);
        } else {
            arc(x, height / 2, diameter, diameter, 0, PI);
        }
    }
}