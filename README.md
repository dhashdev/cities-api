# Cities API

Cities API is a Nest.js project that provides endpoints for managing city-related information.

## Table of Contents

- [Endpoints](#endpoints)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Endpoints

**Endpoint:** https://cities-api-sqkp.onrender.com

### 1. All Cities

**Endpoint:** https://cities-api-sqkp.onrender.com/cities

**Description:**
Retrieve information about all cities.

### 2. Single City

**Endpoint:** https://cities-api-sqkp.onrender.com/cities/**{id}**

**Description:**
Retrieve information about a single city **{id}**

### 3. Latitude and Longitude of Specific City

**Endpoint:** https://cities-api-sqkp.onrender.com/cities/lat-lng/**{id}**

**Description:**
Retrieve information about the latitude and longitude of a specific city.

> Replace `{id}` with the actual ID of the city when making requests to the specific city and lat-lng endpoints.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Git installed
- `cities.json` file containing city data in the root directory (see the example below)

### Installing Dependencies

```bash
npm install
```

### Running the Application in Development Mode

```bash
npm run start:dev
```

### Example cities.json

```bash
{
  "cities": [
    { "id": 1, "name": "City1", "latitude": 123, "longitude": 456 },
    { "id": 2, "name": "City2", "latitude": 789, "longitude": 101 },
    // ... other city objects
  ]
}
```

## Project Structure

```bash
/src
  /cities
    cities.controller.ts
    cities.repository.ts
    cities.service.ts
  main.ts
/test
  /cities
    cities.controller.spec.ts
    cities.repository.spec.ts
    cities.service.spec.ts
.env
nest-cli.json
package.json
tsconfig.json

```

### Project Structure Explanantion

- `/src`: Contains the application source code.
- `/test`: Contains unit tests for the application.

- `.env`: Configuration file for environment variables.

- `nest-cli.json`: Nest.js CLI configuration file.

- `package.json`: Node.js project configuration file.

- `tsconfig.json`: TypeScript compiler configuration file.

### Important Commands

- `npm install`: Install project dependencies.

- `npm run start:dev`: Run the application in development mode with watch mode enabled.

- `npm run test`: Run unit tests.

### Docker Image

> Docker image for the project as been also setup, just for showcase purpose. Endpoint or using the local running project is more preferable.

Command to pull the docker image:

`docker pull dhashdev/cities-api-image:1.0`

**Set the port of container to:** `3001`

## Contributing

Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

Copy and paste this template into your README file and modify the placeholders accordingly. If you have additional sections or specific information to include, feel free to customize it further.
