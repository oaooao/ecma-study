// for in
const person = {
  name: 'Tom',
  age: 30,
  gender: 0,
}

// 遍历
// for (let key in person) {
//   console.log(key, person[key]);
// }

const colors = ['red', 'green', 'blue'];

const colorsObj = {
  0: 'red',
  1: 'green',
  2: 'blue',
}

for (let index in colors) {
  console.log(index, colors[index]);
}

for (const element of colors) {
  console.log(element);
}

for(let i = 0; i < colors.length; i++) {
  const element = colors[i];

  console.log(i, element);
}


