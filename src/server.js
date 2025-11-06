const express = require("express");
const fs = require("fs");
const path = require("path");
const generateApiFromSchema = require("./genApi");
const { readJsonFile } = require("./utils");
const app = express(); 
const port = 3000;  


const schema = readJsonFile("../schema.json");

if (schema) {
  generateApiFromSchema(app, schema);

  app.listen(port, () => {
    console.log(`Mock API server running at http://localhost:${port}`);
  });
} else {
  console.log("Schema loading failed. Exiting...");
  process.exit(1);
}
