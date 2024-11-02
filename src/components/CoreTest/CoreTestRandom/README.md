# JSON Schema-Based Random Object Generator

This project provides a function to generate random data objects based on a JSON Schema.

## Functionality

The `generateRandomDataFromSchema` function takes a JSON Schema as input and produces a data object matching the schema constraints.

## Supported Data Types and Constraints

- Integer: Generates integers within min and max.
- Number: Generates floating-point numbers within min and max.
- String: Generates strings with length constraints.
- Boolean: Randomly produces true or false.
- Array: Generates arrays with length and unique constraints.
- Object: Generates nested objects based on properties and required fields.

## Example Usage

```javascript
const schema = {
  type: 'object',
  properties: {
    id: { type: 'integer', minimum: 1, maximum: 10 },
    name: { type: 'string', minLength: 3, maxLength: 5 },
    tags: {
      type: 'array',
      minItems: 1,
      maxItems: 3,
      items: { type: 'string' }
    },
    isActive: { type: 'boolean' }
  },
  required: ['id', 'name']
};

const randomData = generateRandomDataFromSchema(schema);
console.log(randomData);
