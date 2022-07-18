#!/usr/bin/env node

packageJson = require('../package.json');

console.log("Kalium19 v" + packageJson.version);
console.log("Package name: " + packageJson.name);
console.log("License: " + packageJson.license);
console.log("SASS version: " + packageJson.devDependencies.sass);
