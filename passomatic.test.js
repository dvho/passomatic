const test = require('./passomatic');

console.log('Starting password tests');

const test1 = test(1);
if (test1.length < 8 || test1.length > 11) {
    throw new Error(`Test password is wrong length.`);
}

const test2 = test(2);
if (test2.length < 10 || test1.length > 13) {
    throw new Error(`Test password is wrong length.`);
}

const test3 = test(3);
if (test3.length < 12 || test1.length > 15) {
    throw new Error(`Test password is wrong length.`);
}

const test4 = test(4);
if (test4.length < 14 || test1.length > 17) {
    throw new Error(`Test password is wrong length.`);
}

const test5 = test(5);
if (test5.length < 16 || test1.length > 19) {
    throw new Error(`Test password is wrong length.`);
}

const test6 = test(6);
if (test6.length < 18 || test1.length > 21) {
    throw new Error(`Test password is wrong length.`);
}

const test7 = test(7);
if (test7.length < 20 || test1.length > 23) {
    throw new Error(`Test password is wrong length.`);
}

const test8 = test(8);
if (test8.length < 23 || test1.length > 26) {
    throw new Error(`Test password is wrong length.`);
}

const test9 = test(9);
if (test9.length < 26 || test1.length > 29) {
    throw new Error(`Test password is wrong length.`);
}

const test10 = test(10);
if (test10.length < 29 || test1.length > 32) {
    throw new Error(`Test password is wrong length.`);
}
