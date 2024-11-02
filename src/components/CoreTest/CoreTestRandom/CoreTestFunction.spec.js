import { generateRandomDataFromSchema } from "./CoreTestFunction.js";
import assert from "assert";

describe("generateRandomDataFromSchema", function () {
  it("should generate integer within the specified range", function () {
    const schema = { type: "integer", minimum: 5, maximum: 10 };
    const result = generateRandomDataFromSchema(schema);
    assert(Number.isInteger(result), "Expected an integer");
    assert(result >= 5 && result <= 10, "Value out of range");
  });

  it("should generate a number within range", function () {
    const schema = { type: "number", minimum: 1.5, maximum: 3.5 };
    const result = generateRandomDataFromSchema(schema);
    assert(typeof result === "number", "Expected a number");
    assert(result >= 1.5 && result <= 3.5, "Value out of range");
  });

  it("should generate a string within length constraints", function () {
    const schema = { type: "string", minLength: 3, maxLength: 5 };
    const result = generateRandomDataFromSchema(schema);
    assert(typeof result === "string", "Expected a string");
    assert(
      result.length >= 3 && result.length <= 5,
      "String length out of bounds",
    );
  });

  it("should generate a boolean", function () {
    const schema = { type: "boolean" };
    const result = generateRandomDataFromSchema(schema);
    assert(typeof result === "boolean", "Expected a boolean");
  });

  it("should generate an array of correct length and type", function () {
    const schema = {
      type: "array",
      minItems: 2,
      maxItems: 4,
      items: { type: "integer", minimum: 1, maximum: 10 },
    };
    const result = generateRandomDataFromSchema(schema);
    assert(Array.isArray(result), "Expected an array");
    assert(
      result.length >= 2 && result.length <= 4,
      "Array length out of bounds",
    );
    result.forEach((item) =>
      assert(
        Number.isInteger(item) && item >= 1 && item <= 10,
        "Array item out of bounds",
      ),
    );
  });

  it("should generate an object with required properties", function () {
    const schema = {
      type: "object",
      properties: {
        id: { type: "integer", minimum: 1, maximum: 10 },
        name: { type: "string", minLength: 3, maxLength: 5 },
        isActive: { type: "boolean" },
      },
      required: ["id", "name"],
    };
    const result = generateRandomDataFromSchema(schema);
    assert(typeof result === "object", "Expected an object");
    assert(result.hasOwnProperty("id"), 'Missing required property "id"');
    assert(result.hasOwnProperty("name"), 'Missing required property "name"');
  });
  it("should generate data according to the schema", function () {
    const schema = {
      type: "object",
      properties: {
        id: { type: "integer", minimum: 1, maximum: 10 },
        name: { type: "string", minLength: 3, maxLength: 5 },
        isActive: { type: "boolean" },
      },
      required: ["id", "name"],
    };
    const result = generateRandomDataFromSchema(schema);

    console.log("Generated Data:", JSON.stringify(result, null, 2));

    assert(typeof result === "object", "Expected result to be an object");
    assert(result.hasOwnProperty("id"), 'Result should have property "id"');
    assert(result.hasOwnProperty("name"), 'Result should have property "name"');
  });
});
