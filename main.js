// var arr = ["I", "study", "javascript", "right", "now"];
// let arr2 = arr.slice(2);

// function del(array) {
//   arr.forEach((el) => {
//     el.slice(2, 2);
//   });
// }
// del(arr);
// console.log(del());
// ____________________________________________________________________________________
let salom = "salom dunyo";
function rev(str) {
  let splitted = str.split("").reverse();
  // console.log(splitted);
  let joined = splitted.join("");
  console.log(joined);
}
rev(salom);

// ____________________________________________________________________________________

let number = 3;

function ar(num) {
  if (num % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
ar(number);
