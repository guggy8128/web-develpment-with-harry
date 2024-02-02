console.log("This is module");

function average(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
}

// module.exports = average={
//     avg: average,
//     name: "Dharmesh",
//     repo: "GitHub"
// }

module.exports.name="Dharmesh"
module.exports.avg=average