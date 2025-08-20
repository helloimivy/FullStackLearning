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
