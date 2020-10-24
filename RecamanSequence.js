let hasLanded;
let stepCount; //  stepNumber   1,2,3,4,5, ...
let recamanSequence; // Recaman Sequence   0,1,3,6,2,7,13,20,12,21,11
let lastLanded; // 
let arcs;
let furthestRight;
let screenScale;

function initialize() {
    hasLanded = [];
    stepCount = 0;
    recamanSequence = [];
    lastLanded = 0;
    arcs = [];
    furthestRight = 0;
    screenScale = windowWidth;
}

function setup() {
    initialize();
    createCanvas(windowWidth, windowHeight);
    frameRate();
}

function draw() {
    background('black');
    step();
    debugOutput();
    drawArcs();
}

function drawArcs() {
    translate(0, height / 2);
    screenScale = width / furthestRight;
    scale(screenScale);
    for (let nextArc of arcs) {
        nextArc.show();
    }
}

function step() {
    let next = lastLanded - stepCount;
    if (next < 0 || hasLanded[next]) {
        next = lastLanded + stepCount;
    }
    hasLanded[next] = true;
    recamanSequence.push(next);

    let a = new Arc(lastLanded, next, stepCount % 2);
    arcs.push(a);

    lastLanded = next;
    if (lastLanded > furthestRight) { furthestRight = lastLanded; }
    stepCount++;
}

function debugOutput() {
    if (screenScale < 2) {
        console.log(recamanSequence);
        debugger;
        noLoop();
    }
}

class Arc {
    static clrs = ['white', 'blue', 'red', 'yellow', 'magenta'];
    constructor(start, end, dir) {
        this.start = start;
        this.end = end;
        this.dir = dir;
        this.clr = random(Arc.clrs);
    }

    show() {
        let diameter = abs(this.end - this.start);
        let x = (this.end + this.start) / 2;

        stroke(this.clr);
        strokeWeight(1);
        noFill();

        if (this.dir == 0) {
            arc(x, 0, diameter, diameter, PI, 0); // height / 2
        } else {
            arc(x, 0, diameter, diameter, 0, PI); // height / 2
        }
    }
}