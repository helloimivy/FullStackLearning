function Stopwatch() {
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;
  let running = false;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;
    duration = 0;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not yet running");

    running = false;

    stopTime = new Date();

    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    running = false;
    startTime = null;
    stopTime = null;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// using function as exercise to add methods to the prototype of the Object
// It was explained that this is not typically something you would want to do here
// Usually only reserved for if you will be having many instances of an object to save memory
// Using as a practice exercise, which will pose other issues that will require fixing

// Not optimized and created other problems: not utilizing abstraction, duration is editable

// function Stopwatch() {
//   let startTime = 0;
//   let stopTime = 0;
//   let running = false;
//   let duration = 0;

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//     set: function (value) {
//       duration = value;
//     },
//   });
//   Object.defineProperty(this, "startTime", {
//     get: function () {
//       return startTime;
//     },
//   });
//   Object.defineProperty(this, "stopTime", {
//     get: function () {
//       return stopTime;
//     },
//   });
//   Object.defineProperty(this, "running", {
//     get: function () {
//       return running;
//     },
//   });
// }

// Stopwatch.prototype.start = function () {
//   if (this.running) throw new Error("The stopwatch is already running");

//   this.running = true;
//   this.startTime = new Date();
// };

// Stopwatch.prototype.stop = function () {
//   if (!this.running) throw new Error("The stopwatch is not running");

//   this.running = false;

//   this.stopTime = new Date();

//   this.duration += (stopTime - startTime) / 1000;
// };

// Stopwatch.prototype.reset = function () {
//   this.startTime = 0;
//   this.stopTime = 0;
//   this.duration = 0;
//   this.running = false;
// };
