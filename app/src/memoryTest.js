/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export class MemoryTracker {
  constructor() {
    this.fruits = ["apple", "pear", "plum", "orange"];
    this.names = ["Dan", "Joe", "Christina"];
  }
}

export function runMemoryTest() {
  // Create an instance and store it globally
  window.memoryTracker = new MemoryTracker();
}
