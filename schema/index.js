const mongoose = require("mongoose");
let fs = require("fs");
let path = require("path");

module.exports = () => {
  let models = {};
  const excludeFiles = ["index.js"];
  fs.readdirSync(__dirname)
    .filter((file) => {
      return file.indexOf(".") !== 0 && excludeFiles.indexOf(file) < 0;
    })
    .forEach((file) => {
      try {
        const model = require(path.join(__dirname, file));
        return (models[file.split(".")[0]] = model); 
      } catch (e) {
      }
    });
  return models;
};
