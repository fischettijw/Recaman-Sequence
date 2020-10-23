let hasLanded;
let count; //  stepNumber   1,2,3,4,5, ...
let recamanSequence; // Recaman Sequence   0,1,3,6,2,7,13,20,12,21,11
let index;
let arcs;
let furtherRight;

function initialize() {
    hasLanded = [];
    count = 0;
    recamanSequence = [];
    index = 0;
    arcs = [];
    furtherRight = 0;
}

function setup() {
    initialize();
    createCanvas(windowWidth, windowHeight);
    frameRate();
}

function draw() {
    background('black');
    step();
    // debugOutput();
    drawArcs();
}

function drawArcs() {
    translate(0, height / 2);
    scale(width / furtherRight);
    for (let nextArc of arcs) {
        nextArc.show();
    }
}

function step() {
    let next = index - count;
    if (next < 0 || hasLanded[next]) {
        next = index + count;
    }
    hasLanded[next] = true;
    recamanSequence.push(next);

    let a = new Arc(index, next, count % 2);
    arcs.push(a);

    index = next;
    if (index > furtherRight) { furtherRight = index; }
    count++;
}

function debugOutput() {
    if (frameCount >= 200) {
        noLoop();
        print(recamanSequence);
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
            arc(x, 0, diameter, diameter, PI, 0); // height / 2
        } else {
            arc(x, 0, diameter, diameter, 0, PI); // height / 2
        }
    }
}