
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const htmlPath = path.join(__dirname, "public", "index.html");

console.log("Running application tests...");

// Test 1: Check whether the webpage exists
assert.ok(
    fs.existsSync(htmlPath),
    "HTML file should exist"
);

// Test 2: Check whether webpage contains HTML content
const html = fs.readFileSync(htmlPath, "utf8");

assert.ok(
    html.includes("<html") || html.includes("<!DOCTYPE"),
    "HTML content should be valid"
);

console.log("Test 1 passed: HTML file exists");
console.log("Test 2 passed: HTML content is present");

console.log("All tests passed!");
