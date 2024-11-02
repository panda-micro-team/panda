import { generateRandomDataFromSchema } from "./CoreTestFunction.js";
import assert from "assert";

describe("generateRandomDataFromSchema", function () {
  it("should generate integer within the specified range", function () {
    const schema = { type: "integer", minimum: 5, maximum: 10 };
    const result = generateRandomDataFromSchema(schema);
    console.log("Generated Integer:", result);
    assert(result === 5, "Expected integer to be the minimum value of 5");
  });

  it("should generate a number within range", function () {
    const schema = { type: "number", minimum: 1.5, maximum: 3.5 };
    const result = generateRandomDataFromSchema(schema);
    console.log("Generated Number:", result);
    assert(result === 2.5, "Expected fixed midpoint value of 2.5");
  });

  it("should generate a fixed string", function () {
    const schema = {
      type: "string",
      minLength: 3,
      maxLength: 5,
      propertyName: "name",
    };
    const result = generateRandomDataFromSchema(schema);
    console.log("Generated String (name):", result);
    assert(result === "Alice", "Expected fixed name 'Alice'");
  });

  it("should generate a fixed boolean", function () {
    const schema = { type: "boolean" };
    const result = generateRandomDataFromSchema(schema);
    console.log("Generated Boolean:", result);
    assert(result === true, "Expected fixed boolean value of true");
  });

  it("should generate a fixed array of integers", function () {
    const schema = {
      type: "array",
      minItems: 2,
      maxItems: 4,
      items: { type: "integer", minimum: 1, maximum: 10 },
    };
    const result = generateRandomDataFromSchema(schema);
    console.log("Generated Array:", result);
    assert.deepStrictEqual(result, [1, 1], "Expected fixed array [1, 1]");
  });

  it("should generate an object with required properties", function () {
    const schema = {
      type: "object",
      properties: {
        id: { type: "integer", minimum: 1, maximum: 10 },
        name: {
          type: "string",
          minLength: 3,
          maxLength: 5,
          propertyName: "name",
        },
        isActive: { type: "boolean" },
      },
      required: ["id", "name"],
    };
    const result = generateRandomDataFromSchema(schema);
    console.log("Generated Object:", result);
    assert.deepStrictEqual(
      result,
      { id: 1, name: "Alice" },
      'Expected fixed object { id: 1, name: "Alice" }',
    );
  });
});
