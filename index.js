// const circle3 = {
//   radius: 1,
//   location: {
//     x: 100,
//     y: 100
//   },
//   draw() {
//     console.log('draw');
//   }
// };

// // Factory Function
// function createCircle(radius, location) {
//   return {
//     radius,
//     location,
//     draw() {
//       console.log('draw');
//     }
//   };
// }

// function Circle(radius, location) {
//   this.radius = radius;
//   this.location = location
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const Circle2 = new Function('radius', `
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// `);

// // const circle = new Circle(1);
// // const circle2 = new Circle2(1);











// // const circleFromGrandPa = new (new Function('radius', `
// //   this.radius = radius;
// //   this.draw = function() {
// //     console.log('draw');
// //   }
// // `))(1, { x: 99, y: 99 });



// circle.draw();
// circle.radius;
// circle.location;


