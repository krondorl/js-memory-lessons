/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { runMemoryTest } from "./memoryTest.js";

document.getElementById("startTest").addEventListener("click", () => {
  runMemoryTest();
});
