const { faker } = require('@faker-js/faker');

function generateValue(fieldDef) {
  if (typeof fieldDef === "string") {
    // Split string like "name.firstName" into faker.name.firstName()
    const fn = fieldDef.split('.').reduce((obj, key) => obj[key], faker);
    return fn();
  } else if (typeof fieldDef === "object") {
    // Nested object → recurse
    const nested = {};
    for (const nestedField in fieldDef) {
      nested[nestedField] = generateValue(fieldDef[nestedField]);
    }
    return nested;
  } else {
    throw new Error(`Unsupported field definition: ${fieldDef}`);
  }
}

function generateDataFromTemplate(template, count) {
  const data = [];

  for (let i = 0; i < count; i++) {
    const item = {};

    for (const field in template) {
      item[field] = generateValue(template[field]);
    }

    data.push(item);
  }

  return data;
}

function generateApiFromSchema(app, schema) {
  for (const endpoint in schema) {
    const { template, count } = schema[endpoint];
    const data = generateDataFromTemplate(template, count);

    app.get(`/${endpoint}`, (req, res) => {
      res.json(data);
    });
  }
}

module.exports = generateApiFromSchema;
