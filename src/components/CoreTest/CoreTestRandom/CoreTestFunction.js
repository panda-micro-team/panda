/**
 * Generates a random data object based on a given JSON Schema.
 * @param {Object} schema - The JSON Schema to generate data from.
 * @returns {any} - The generated data object.
 */
function generateRandomDataFromSchema(schema) {
  if (!schema || typeof schema !== "object") {
    throw new Error("Invalid schema provided");
  }

  switch (schema.type) {
    case "integer":
      return generateRandomInteger(schema);
    case "number":
      return generateRandomNumber(schema);
    case "string":
      return generateRandomString(schema);
    case "boolean":
      return Math.random() < 0.5;
    case "array":
      return generateRandomArray(schema);
    case "object":
      return generateRandomObject(schema);
    default:
      return null;
  }
}

/**
 * Generates a random integer within the min and max constraints.
 * @param {Object} schema
 * @returns {number}
 */
function generateRandomInteger(schema) {
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random floating-point number within the min and max constraints.
 * @param {Object} schema
 * @returns {number}
 */
function generateRandomNumber(schema) {
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random string with a length
 * within minLength and maxLength constraints.
 * @param {Object} schema
 * @returns {string}
 */
function generateRandomString(schema) {
  const minLength = schema.minLength || 1;
  const maxLength = schema.maxLength || 10;
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  return Array.from({ length }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26)),
  ).join("");
}

/**
 * Generates a random array based on item schema and length constraints.
 * @param {Object} schema
 * @returns {Array}
 */
function generateRandomArray(schema) {
  const minItems = schema.minItems || 1;
  const maxItems = schema.maxItems || 5;
  const length =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  return Array.from({ length }, () =>
    generateRandomDataFromSchema(schema.items),
  );
}

/**
 * Generates a random object based on the properties
 * and required fields of the schema.
 * @param {Object} schema
 * @returns {Object}
 */
function generateRandomObject(schema) {
  const obj = {};
  const requiredProps = schema.required || [];

  Object.entries(schema.properties).forEach(([key, propSchema]) => {
    if (requiredProps.includes(key) || Math.random() < 0.5) {
      obj[key] = generateRandomDataFromSchema(propSchema);
    }
  });

  return obj;
}

export { generateRandomDataFromSchema };
