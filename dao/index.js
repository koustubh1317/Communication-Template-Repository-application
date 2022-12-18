const fs = require('fs')
const path = require('path');

module.exports = (models)=> {
    let daos = {};
  const excludeFiles = ["index.js","BaseDAO.js"];
  fs.readdirSync(__dirname)
    .filter((file) => {
      return file.indexOf(".") !== 0 && !excludeFiles.includes(file);
    })
    .forEach((file) => {
      try {
        const dao = require(path.join(__dirname, file));
        return (daos[dao.name] = new dao(models));
      } catch (e) {
        console.log(e);
      }
    });
  return daos;

}
