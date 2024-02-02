// Importing a local module with a path relative to the `__dirname` or current
// working directory. (On Windows, this would resolve to .\path\myLocalModule.)
const myLocalModule = require('./path/myLocalModule');

// Importing a JSON file:
const jsonData = require('./path/filename.json');

// Importing a module from node_modules or Node.js built-in module:
const crypto = require('node:crypto');