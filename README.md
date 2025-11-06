# Mock API Generator

A simple tool to generate a mock API based on a customizable schema template. This project uses **Faker.js** to generate random data for different endpoints and can be configured to create mock APIs for testing or development purposes.

## Features

- Generate mock API endpoints using a JSON schema.
- Customize the data structure using Faker.js format.
- Easily run the mock API server locally.
- Supports dynamic data generation based on the schema provided.

## Installation

### Clone the Repository

```bash
git clone https://github.com/venktesh0755/Mock-api-generator.git
cd mock-api
```

### Install Dependencies

```bash
npm install
```

## Usage

### CLI Usage
You can generate a mock API by running the following command:

```bash
npx faker-api-mock [schema-path]
```

If the schema-path argument is not provided, it will look for a schema.json file in the root directory.

For example:

```bash
npx faker-api-mock ./my-schema.json
```
This will generate a mock API server at http://localhost:3000 based on the provided schema.json.

### Schema Format
Your schema.json file should define the endpoints and the data structure for each endpoint. Here is an example:

```json
{
  "users": {
    "template": {
      "id": "random.uuid",
      "name": "name.firstName",
      "email": "internet.email",
      "phone": "phone.phoneNumber"
    },
    "count": 5
  },
  "products": {
    "template": {
      "id": "random.uuid",
      "name": "commerce.productName",
      "price": "commerce.price"
    },
    "count": 3
  }
}
```

### Example Schema Breakdown

- users endpoint: Generates 5 mock user profiles with random id, name, email, and phone.
- products endpoint: Generates 3 mock product profiles with random id, name, and price.
 
>  **Tip:** Tip: To define the structure of the mock data, you may need to refer to the [Faker documentation](https://fakerjs.dev/api/) for the correct template format and available methods. This will help you customize the data generation for different fields like name, address, commerce, and more.


### How It Works

- CLI: The CLI reads the provided schema.json and uses it to generate data using Faker.js.
- Data Generation: Faker.js generates random data based on the provided schema (e.g., name.firstName, internet.email).
- Express Server: The data is served through an Express.js server, creating API endpoints dynamically.

### Endpoints

The mock API server will have endpoints for each key defined in your schema. In the example schema above, the following endpoints would be created:

- GET /users - Returns an array of 5 mock user objects.
- GET /products - Returns an array of 3 mock product objects.

### Example Response for /users

```json
[
  {
    "id": "8fa6d54f-27bb-4c8f-9b9c-bc9c0f6fcb18",
    "name": "Ashley",
    "email": "ashley@example.com",
    "phone": "123-456-7890"
  },
  ...
]
```

# License

This project is licensed under the MIT License.

# Acknowledgements

- Faker.js for generating random data.
- Express.js for creating the mock API server.
- Node.js for running the server-side code.



> ⚠️ **Note:** This is an early version of the project and may lack some features or optimizations. Contributions and suggestions are welcome!