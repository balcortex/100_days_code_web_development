let objInt = {
    2: 'two',
    3: 'three',
    1: 'one',
};

for (let key in objInt) {
    console.log(key); // 1, 2, 3
    console.log(objInt[key]); // one, two, three
}

let objStr = {
    two: 2,
    three: 3,
    one: 1,
};

for (let key in objStr) {
    console.log(key); // two, three, one
    console.log(objStr[key]); // 2, 3, 1
}

let objMix = {
    three: 3,
    two: 2,
    1: 'one',
    0: 'zero',
};

for (let key in objMix) {
    console.log(key); // 0, 1, three, two
    console.log(objMix[key]); // zero, one, 3, 2
}

let objIntStr = {
    '+3': 'three',
    '+2': 'two',
    '+1': 'one',
};

for (let key in objIntStr) {
    console.log(+key); // 3, 2, 1
    console.log(objIntStr[key]); // three, two, one
}