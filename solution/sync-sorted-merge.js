"use strict";

const MinHeap = require("./min-heap");
const { compareDates } = require("../utils/date-comparison");

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const heap = new MinHeap(compareDates);
  
  for (const logSource of logSources) {
    heap.insert(logSource);
  }

  while (heap.size() > 0) {
    const source = heap.removeMin();
    printer.print(source.last);
    if (source && !source.drained) {
      source.pop();
      heap.insert(source);
    }
  }

  printer.done();

  return console.log("Sync sort complete.");
};
