// example-router.test.js
const assert = require("assert");
const httpMocks = require("node-mocks-http");
const echoHandler = require("../api/echo").echo;

describe("Echo Router", () => {
  it("should return 'echo bob' for GET /echo", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/echo",
      query: { message: "bob" }
    });

    const mockResponse = httpMocks.createResponse();

    echoHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = JSON.stringify({ message: "echo bob" });
    assert.deepEqual(actualResponseBody, expectedResponseBody);
  });
});

