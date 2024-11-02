const sampleValues = {
  name: ["Alice", "Bob", "Charlie", "David", "Eve"],
  email: ["alice@example.com", "bob@example.com", "charlie@example.com"],
  theme: ["light", "dark", "system"],
};

/**
 * Generates a deterministic data object based on a given JSON Schema.
 * @param {Object} schema - The JSON Schema to generate data from.
 * @returns {any} - The generated data object.
 */
function generateRandomDataFromSchema(schema) {
  if (!schema || typeof schema !== "object") {
    throw new Error("Invalid schema provided");
  }

  switch (schema.type) {
    case "integer":
      return generateFixedInteger(schema);
    case "number":
      return generateFixedNumber(schema);
    case "string":
      return generateFixedString(schema);
    case "boolean":
      return true;
    case "array":
      return generateFixedArray(schema);
    case "object":
      return generateFixedObject(schema);
    default:
      return null;
  }
}

function generateFixedInteger(schema) {
  return schema.minimum || 1;
}

function generateFixedNumber(schema) {
  return schema.minimum
    ? (schema.minimum + (schema.maximum || schema.minimum)) / 2
    : 1.5;
}

function generateFixedString(schema) {
  if (schema.enum) {
    return schema.enum[0];
  }

  if (schema.propertyName === "name") {
    return sampleValues.name[0];
  }
  if (schema.propertyName === "email") {
    return sampleValues.email[0];
  }
  if (schema.propertyName === "theme") {
    return sampleValues.theme[0];
  }

  const minLength = schema.minLength || 1;
  return "a".repeat(minLength);
}

function generateFixedArray(schema) {
  const length = schema.minItems || 1;
  return Array.from({ length }, () => generateFixedInteger(schema.items));
}

function generateFixedObject(schema) {
  const obj = {};
  const requiredProps = schema.required || [];

  Object.entries(schema.properties).forEach(([key, propSchema]) => {
    propSchema.propertyName = key;
    if (requiredProps.includes(key)) {
      obj[key] = generateRandomDataFromSchema(propSchema);
    }
  });

  return obj;
}

export { generateRandomDataFromSchema };
