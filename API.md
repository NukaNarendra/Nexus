# API Documentation

## Base URL
```
http://localhost:4000
```

## Authentication
Currently, the API has no authentication. All endpoints are public.

---

## Users API

### GET /users
Get all users

**Response (200):**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### GET /users/:id
Get a specific user by ID

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### POST /users
Create a new user

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "age": 28
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 28,
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

### PUT /users/:id
Update a user

**Request Body:**
```json
{
  "name": "Jane Doe",
  "age": 29
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 29,
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:30:00Z"
  }
}
```

### DELETE /users/:id
Delete a user

**Response (200):**
```json
{
  "success": true,
  "message": "user deleted successfully"
}
```

---

## Products API

### GET /products
Get all products

**Response (200):**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439021",
      "name": "Laptop",
      "description": "High-performance laptop",
      "price": 1299.99,
      "category": "Electronics",
      "stock": 15,
      "isavail": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### GET /products/:id
Get a specific product by ID

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439021",
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 1299.99,
    "category": "Electronics",
    "stock": 15,
    "isavail": true,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### POST /products
Create a new product

**Request Body:**
```json
{
  "name": "Keyboard",
  "description": "Mechanical keyboard",
  "price": 149.99,
  "category": "Accessories",
  "stock": 50,
  "isavail": true
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439022",
    "name": "Keyboard",
    "description": "Mechanical keyboard",
    "price": 149.99,
    "category": "Accessories",
    "stock": 50,
    "isavail": true,
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

### PUT /products/:id
Update a product

**Request Body:**
```json
{
  "stock": 45,
  "price": 139.99
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439022",
    "name": "Keyboard",
    "description": "Mechanical keyboard",
    "price": 139.99,
    "category": "Accessories",
    "stock": 45,
    "isavail": true,
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:30:00Z"
  }
}
```

### DELETE /products/:id
Delete a product

**Response (200):**
```json
{
  "success": true,
  "message": "product deleted successfully"
}
```

---

## Orders API

### GET /orders
Get all orders (with populated user and product details)

**Response (200):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439031",
      "user": {
        "_id": "507f1f77bcf86cd799439011",
        "name": "John Doe",
        "email": "john@example.com",
        "age": 30
      },
      "products": [
        {
          "product": {
            "_id": "507f1f77bcf86cd799439021",
            "name": "Laptop",
            "price": 1299.99
          },
          "quantity": 1,
          "price": 1299.99
        }
      ],
      "totalAmount": 1299.99,
      "status": "pending",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### GET /orders/:id
Get a specific order by ID

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439031",
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "products": [
      {
        "product": {
          "_id": "507f1f77bcf86cd799439021",
          "name": "Laptop"
        },
        "quantity": 1,
        "price": 1299.99
      }
    ],
    "totalAmount": 1299.99,
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### POST /orders
Create a new order

**Request Body:**
```json
{
  "user": "507f1f77bcf86cd799439011",
  "products": [
    {
      "product": "507f1f77bcf86cd799439021",
      "quantity": 1,
      "price": 1299.99
    }
  ],
  "totalAmount": 1299.99,
  "status": "pending"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439032",
    "user": "507f1f77bcf86cd799439011",
    "products": [
      {
        "product": "507f1f77bcf86cd799439021",
        "quantity": 1,
        "price": 1299.99
      }
    ],
    "totalAmount": 1299.99,
    "status": "pending",
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

### PUT /orders/:id
Update an order

**Request Body:**
```json
{
  "status": "confirmed"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439032",
    "user": "507f1f77bcf86cd799439011",
    "products": [...],
    "totalAmount": 1299.99,
    "status": "confirmed",
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:30:00Z"
  }
}
```

### DELETE /orders/:id
Delete an order

**Response (200):**
```json
{
  "success": true,
  "message": "order deleted successfully"
}
```

---

## Error Responses

All error responses follow this format:

**Response (4xx or 5xx):**
```json
{
  "success": false,
  "message": "Error description"
}
```

### Common Error Codes

- **400** - Bad Request (validation error)
- **404** - Not Found (resource doesn't exist)
- **500** - Server Error

---

## Status Values for Orders

Valid status values:
- `pending` - Order just created
- `confirmed` - Order confirmed by seller
- `shipped` - Order shipped to customer
- `delivered` - Order delivered
- `cancelled` - Order cancelled

---

## Filtering & Pagination

Currently, the API returns all records without pagination or filtering. Future enhancements could include:
- Limit and offset parameters
- Search by name/email
- Sort by date, price, etc.

---

## Rate Limiting

There is currently no rate limiting. For production, consider implementing:
- Request rate limiting (using express-rate-limit)
- IP-based throttling
- Authentication & authorization

---

## Testing the API

### Using cURL

```bash
# Get all users
curl http://localhost:4000/users

# Create a user
curl -X POST http://localhost:4000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","age":30}'

# Get specific user
curl http://localhost:4000/users/507f1f77bcf86cd799439011

# Update user
curl -X PUT http://localhost:4000/users/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"age":31}'

# Delete user
curl -X DELETE http://localhost:4000/users/507f1f77bcf86cd799439011
```

### Using Postman

1. Import the collection or create requests for each endpoint
2. Set base URL to `http://localhost:4000`
3. For POST/PUT requests, set Content-Type to `application/json`
4. Use the request body examples above

---

## Future Enhancements

- [ ] Add authentication (JWT)
- [ ] Add request validation middleware
- [ ] Add pagination support
- [ ] Add search/filter endpoints
- [ ] Add sorting options
- [ ] Add logging middleware
- [ ] Add API documentation (Swagger/OpenAPI)
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add caching (Redis)
