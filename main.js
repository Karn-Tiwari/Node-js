let inputArr = Process.argv.slice(2);
console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help
let command = inputArr[0];
switch (command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Please ❤ input a valid command");
        break;
}
function treeFn(dirPath) {

}
function organizeFn(dirPath) {

}
function helpFn() {
    consol.log(`
List of All commands:
node main.js tree "directoryPath"
node main.js organize "directoryPath"
node main.js help
`);
}
