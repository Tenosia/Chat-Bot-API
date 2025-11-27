# Chat Bot API

A simple and lightweight chat bot API template built with Express.js and TypeScript. This template provides a solid foundation for building RESTful APIs that can be integrated with various chat bot platforms.

## Features

- Express.js web framework
- TypeScript for type safety
- ESLint for code quality
- Development server with hot reload (nodemon)
- Production-ready build configuration
- Example API route implementation

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-bot-api
```

2. Install dependencies:
```bash
npm install
```

The `postinstall` script will automatically build the TypeScript project after installation.

## Development

### Start Development Server

Run the development server with hot reload:
```bash
npm run dev
```

The server will start on port 3000 by default (or the port specified in the `PORT` environment variable).

### Build for Production

Compile TypeScript to JavaScript:
```bash
npm run build
```

The compiled files will be output to the `dist` directory.

### Start Production Server

After building, start the production server:
```bash
npm start
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
chat-bot-api/
├── src/
│   ├── index.ts          # Main server entry point
│   └── routes/
│       └── index.ts      # Route definitions
├── dist/                 # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json         # TypeScript configuration
└── .eslintrc.json        # ESLint configuration
```

## API Endpoints

### GET /:id

Returns a response with the provided ID parameter.

**Example Request:**
```
GET http://localhost:3000/123
```

**Example Response:**
```
Received id: 123
```

## Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)

### TypeScript Configuration

The project uses TypeScript with strict mode enabled. Configuration can be modified in `tsconfig.json`.

### ESLint Configuration

ESLint is configured with TypeScript-specific rules. Configuration can be modified in `.eslintrc.json`.

## Usage with Chat Bots

This API can be integrated with various chat bot platforms:

### Nightbot
```
!addcom !id $(urlfetch https://your-hosted-api.example.com/id)
```

### WizeBot
```
!cmd add !id $urlcall(https://your-hosted-api.example.com/id)
```

### StreamLabs
```
!command add !id $readapi(https://your-hosted-api.example.com/id)
```

## Deployment

1. Build the project:
```bash
npm run build
```

2. Set the `PORT` environment variable (if needed)

3. Start the server:
```bash
npm start
```

For cloud platforms like Heroku, the `PORT` environment variable is typically set automatically. Make sure your hosting service supports Node.js applications.

## Testing the API

You can test the API using:

- **cURL:**
```bash
curl http://localhost:3000/123
```

- **Postman** or any HTTP client
- **Browser:** Navigate to `http://localhost:3000/123`

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run tsc` - Run TypeScript compiler directly

## Dependencies

### Production
- `express` - Web framework

### Development
- `typescript` - TypeScript compiler
- `@types/express` - TypeScript definitions for Express
- `@types/node` - TypeScript definitions for Node.js
- `eslint` - Linting tool
- `@typescript-eslint/eslint-plugin` - ESLint plugin for TypeScript
- `@typescript-eslint/parser` - ESLint parser for TypeScript
- `nodemon` - Development server with auto-reload

## License

See LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
