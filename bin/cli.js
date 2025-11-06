#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const generateApiFromSchema = require("../src/genApi");
const { readJsonFile } = require("../src/utils");

const args = process.argv[2];


const schemaPath = path.resolve(process.cwd(), args || 'schema.json');

if (!fs.existsSync(schemaPath)) {
  console.error(`Schema file not found at ${schemaPath}`);
  process.exit(1);
}


const schema = readJsonFile(schemaPath);

if (schema) {
  const express = require("express");
  const app = express();
  const port = 3000;


  generateApiFromSchema(app, schema);

  
  app.listen(port, () => {
    console.log(`Mock API server running at http://localhost:${port}`);
  });
} else {
  console.log("Error reading the schema file. Exiting...");
  process.exit(1);
}
