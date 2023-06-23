let nodePath = process.argv[0];
let appPath = process.argv[1];
let n = process.argv[2];

console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("количество первых чисел: " + n);

let arr = [];
let i = 0;
while (arr.length < n) {
    if (i % 2 === 0) { console.log('И все таки оно делится!' + i)} 
    else {arr.push(i); console.log('Простое число ' + i)};
    i++;
}
console.log(arr);