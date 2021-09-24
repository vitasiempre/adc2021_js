// console.log('yoo');
//
// let name = "HSe";
// name = "ADC";
// console.log(name);
//
// const city = "Petersburg";
//
// const person = {
//   name: "Vitalya",
//   age: "20",
//   spiritAnimal: "cow",
// };
//
// person["spiritAnimal"] = "cat";
// person["favColor"] = "blue";
// console.log(person);
//
// let years = [2019, 2020, 2021, 2022, 2023];
// let trips = {
//   trip2019: [
//     "Berlin",
//     "Paris",
//     "Petersburg"
//   ],
//   trip2020: "Petersburg",
//   trip2021: "Petersburg",
//   trip2022: "Greece",
//   trip2023: "USA"
// }
//
// years.push(2024);

// console.log(years);
// console.log(trips);

// years.forEach((item, i) => {
//   console.log(item, i);
//   if (item == 2019) {
//     years[i] = "iloveu";
//   }
// });


// Object.keys(trips).forEach((key) => {
//   console.log(trips[key]);
//   if (key == "trip2019") {
//     trips[key][0] = "berlik";
//     trips[key][1] = "pariss";
//   }
// });

// document.addEventListener('click', markAllAsLoved);
// function markAllAsLoved() {
//   let updatedYears = years.map((item) => {
//      return item + "i love you";
//   });
//   console.log(updatedYears);
// }


  // create web audio api context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // create Oscillator node
  const oscillator = audioCtx.createOscillator();

  function start() {
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
    oscillator.started = false
  }

  function stop() {
    oscillator.stop(audioCtx.currentTime)
  }

  let startButton = document.createElement('div');
  let stopButton = document.createElement('div');
  startButton.innerText = 'Start';
  stopButton.innerText = 'Stop';

  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);

  let body = document.getElementsByTagName('body')[0];
  console.log(body);
  body.appendChild(startButton);
  body.appendChild(stopButton);
