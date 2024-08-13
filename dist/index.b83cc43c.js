// for in
const person = {
    name: "Tom",
    age: 30,
    gender: 0
};
// 遍历
// for (let key in person) {
//   console.log(key, person[key]);
// }
const colors = [
    "red",
    "green"
];
colors[2] = "blue";
colors[0] = "hello";
console.log(colors[2]);
console.log(colors);
console.log(colors.length);
for(let index in colors)console.log(index, colors[index]);

//# sourceMappingURL=index.b83cc43c.js.map
