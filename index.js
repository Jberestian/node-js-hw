console.log(" hello:");

const fs = require("fs/promises");
const path = require("path");

// const contactPath = `${__dirname}./db/contacts.json`;
const contactPath = path.join(__dirname, "./db/contacts.json");

const getAll = async () => {
  const data = await fs.readFile(contactPath, "utf-8");
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
