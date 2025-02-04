# Bookstore API

This is a simple Bookstore API built with Node.js, Express, and a `db.json` file. It allows you to perform CRUD operations on a collection of books.

## Features

- Serve static files from the `static` directory
- RESTful API endpoints for managing books
- CORS support
- JSON and URL-encoded body parsing

## Prerequisites

- Node.js
- npm
- JSON Files
- Reading from File System

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/javiguerra777/bookstore-api.git
   cd bookstore-api
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the server
   ```bash
   npm run dev
   ```
## Endpoints

### Get All Books
- URL: `/api/books`
- Method: `GET`
- Query Parameters:
  - `amount`(optional): Number of books to retrieve (default is 10)
- Response: JSON array of books

Example:
```JSON
[
	{
		"id": 1,
		"title": "adeo victus coniuratio trado vitiosus",
		"author": "Melinda Dietrich",
		"isbn": "764bdc47-3037-4583-b7b8-6ef1ab7ee0f6",
		"publishedDate": "2021-01-07T21:57:20.000Z",
		"publisher": "Nitzsche Group",
		"genre": "thema",
		"description": "Adsuesco odio ubi spargo cenaculum distinctio. Xiphias temporibus audacia cuius articulus adficio benigne subseco aptus ullus. Verecundia virtus creator.",
		"pageCount": 896,
		"language": "ja",
		"createdAt": "2024-08-02T01:19:12.000Z",
		"updatedAt": "2024-08-02T01:19:12.000Z"
	},
  ...rest of books
]
```

### Get a Book by ID
- URL: `/api/books/:id`
- Method: `GET`
- Response: JSON array of books

Example:
```JSON
{
	"id": 1,
	"title": "adeo victus coniuratio trado vitiosus",
	"author": "Melinda Dietrich",
	"isbn": "764bdc47-3037-4583-b7b8-6ef1ab7ee0f6",
	"publishedDate": "2021-01-07T21:57:20.000Z",
	"publisher": "Nitzsche Group",
	"genre": "thema",
	"description": "Adsuesco odio ubi spargo cenaculum distinctio. Xiphias temporibus audacia cuius articulus adficio benigne subseco aptus ullus. Verecundia virtus creator.",
	"pageCount": 896,
	"language": "ja",
	"createdAt": "2024-08-02T01:19:12.000Z",
	"updatedAt": "2024-08-02T01:19:12.000Z"
}
```

### Create a New Book
- URL: `/api/books`
- Method: `POST`
- Body: JSON object of the book
- Response: JSON object of the created book

Example:
```JSON
{
  "id": 101,
	"title": "tom and jerry",
	"author": "A guy",
	"isbn": "764bdc47-3037-4583-b7b8-6ef1ab7ee0f9",
	"publishedDate": "2021-01-07T21:57:20.000Z",
	"publisher": "Rey Mysterio Group",
	"genre": "fun",
	"description": "Adsuesco odio ubi spargo cenaculum distinctio. Xiphias temporibus audacia cuius articulus adficio benigne subseco aptus ullus. Verecundia virtus creator.",
	"pageCount": 50,
	"language": "en",
  "createdAt": "2024-08-02T01:19:12.000Z",
	"updatedAt": "2024-08-02T01:19:12.000Z"
}
```

### Update a Book by ID
- URL: `/api/books/:id`
- Method: `PUT`
- Body: JSON object of the updated book
- Response: JSON object of the updated books

Example:
```JSON
{
  "id": 95,
	"title": "leo messi goat",
	"author": "Me",
	"isbn": "764bdc47-3037-4583-b7b8-6ef1ab7ee0f3",
	"publishedDate": "2021-01-07T21:57:20.000Z",
	"publisher": "John Cena Group",
	"genre": "facts",
	"description": "Adsuesco odio ubi spargo cenaculum distinctio. Xiphias temporibus audacia cuius articulus adficio benigne subseco aptus ullus. Verecundia virtus creator.",
	"pageCount": 5000,
	"language": "en",
  "createdAt": "2024-08-02T01:19:12.000Z",
	"updatedAt": "2024-08-02T01:19:12.000Z"
}
```

### Delete a Book by ID
- URL: `/api/books/:id`
- Method: `DELETE`
- Response: JSON object with a message confirming deletion

Example:
```JSON
{
	"id": 43,
	"message": "Book deleted"
}
```

## Static Files
The server serves static files from the `static` directory. Ensure your `index.html` and other static assets are placed in this directory

## Database
The application uses the File System in Node to interact with the `db.json` file, so make sure you have the `db.json` file and contains an array of books.

## License
This project is licensed under the MIT License