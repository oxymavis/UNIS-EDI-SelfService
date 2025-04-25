# EDI Platform API Documentation

## Base URL
```
http://localhost:3000/api
```

## 0. Authentication & Authorization APIs

### User Registration
- **Endpoint**: `POST /auth/register`
- **Description**: Register a new user
- **Request Body**:
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "admin|user"
}
```
- **Response**:
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "role": "admin|user",
  "createdAt": "string"
}
```
- **Status Codes**:
  - 201: User created successfully
  - 400: Invalid request body
  - 409: Username or email already exists

### User Login
- **Endpoint**: `POST /auth/login`
- **Description**: Authenticate user and get access token
- **Request Body**:
```json
{
  "username": "string",
  "password": "string"
}
```
- **Response**:
```json
{
  "accessToken": "string",
  "refreshToken": "string",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string",
    "role": "admin|user"
  }
}
```
- **Status Codes**:
  - 200: Login successful
  - 401: Invalid credentials

### Refresh Token
- **Endpoint**: `POST /auth/refresh`
- **Description**: Get new access token using refresh token
- **Request Body**:
```json
{
  "refreshToken": "string"
}
```
- **Response**:
```json
{
  "accessToken": "string",
  "refreshToken": "string"
}
```
- **Status Codes**:
  - 200: Token refreshed successfully
  - 401: Invalid refresh token

### User Logout
- **Endpoint**: `POST /auth/logout`
- **Description**: Invalidate refresh token
- **Request Body**:
```json
{
  "refreshToken": "string"
}
```
- **Response**: No content
- **Status Codes**:
  - 204: Logout successful
  - 401: Invalid refresh token

### Get User Profile
- **Endpoint**: `GET /auth/profile`
- **Description**: Get current user's profile
- **Headers**:
  - `Authorization: Bearer <access_token>`
- **Response**:
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "role": "admin|user",
  "createdAt": "string",
  "lastLogin": "string"
}
```
- **Status Codes**:
  - 200: Success
  - 401: Unauthorized

### Update User Profile
- **Endpoint**: `PUT /auth/profile`
- **Description**: Update current user's profile
- **Headers**:
  - `Authorization: Bearer <access_token>`
- **Request Body**:
```json
{
  "email": "string",
  "currentPassword": "string",
  "newPassword": "string"
}
```
- **Response**: Updated user profile
- **Status Codes**:
  - 200: Profile updated successfully
  - 400: Invalid request body
  - 401: Unauthorized
  - 403: Current password is incorrect

### Reset Password Request
- **Endpoint**: `POST /auth/reset-password/request`
- **Description**: Request password reset email
- **Request Body**:
```json
{
  "email": "string"
}
```
- **Response**: No content
- **Status Codes**:
  - 200: Reset email sent successfully
  - 404: Email not found

### Reset Password
- **Endpoint**: `POST /auth/reset-password`
- **Description**: Reset password using token from email
- **Request Body**:
```json
{
  "token": "string",
  "newPassword": "string"
}
```
- **Response**: No content
- **Status Codes**:
  - 200: Password reset successfully
  - 400: Invalid token or password
  - 404: Token not found

## 1. Application Management APIs

### Get All Applications
- **Endpoint**: `GET /apps`
- **Description**: Get list of all applications
- **Response**: Array of applications
- **Example Response**:
```json
[
  {
    "id": "app-1",
    "name": "Order Processor",
    "code": "ORD-PROC",
    "description": "Processes order EDI messages (940)",
    "protocol": "AS2",
    "interfaces": ["940", "997"],
    "status": "active",
    "createdAt": "2024-01-15",
    "lastModified": "2024-03-20",
    "certificates": [
      {
        "id": "cert-1",
        "name": "Partner AS2 Certificate",
        "expiresAt": "2024-12-31",
        "status": "active"
      }
    ],
    "testResults": [
      {
        "id": "test-1",
        "timestamp": "2024-03-20T10:00:00Z",
        "interface": "940",
        "status": "success",
        "message": "All validation checks passed"
      }
    ]
  }
]
```

### Get Application Details
- **Endpoint**: `GET /apps/[id]`
- **Description**: Get detailed information about a specific application
- **Response**: Single application object
- **Example Response**: Same as above

### Create Application
- **Endpoint**: `POST /apps`
- **Description**: Create a new application
- **Request Body**:
```json
{
  "name": "string",
  "code": "string",
  "description": "string",
  "protocol": "AS2|SFTP|API",
  "interfaces": ["string"]
}
```
- **Response**: Created application object
- **Status Codes**:
  - 201: Created successfully
  - 400: Invalid request body

### Update Application
- **Endpoint**: `PUT /apps/[id]`
- **Description**: Update an existing application
- **Request Body**: Same as Create Application
- **Response**: Updated application object
- **Status Codes**:
  - 200: Updated successfully
  - 400: Invalid request body
  - 404: Application not found

### Delete Application
- **Endpoint**: `DELETE /apps/[id]`
- **Description**: Delete an application
- **Response**: No content
- **Status Codes**:
  - 204: Deleted successfully
  - 404: Application not found

## 2. Testing APIs

### Run Test
- **Endpoint**: `POST /testing`
- **Description**: Execute application test
- **Request Body**:
```json
{
  "appId": "string",
  "interface": "string",
  "testData": "string"
}
```
- **Response**:
```json
{
  "id": "string",
  "timestamp": "string",
  "interface": "string",
  "status": "success|failed",
  "message": "string"
}
```
- **Status Codes**:
  - 201: Test executed successfully
  - 400: Invalid request body
  - 404: Application not found

### Get Test Results
- **Endpoint**: `GET /testing/[appId]`
- **Description**: Get test history for an application
- **Response**:
```json
{
  "results": [
    {
      "id": "string",
      "timestamp": "string",
      "interface": "string",
      "status": "success|failed",
      "message": "string"
    }
  ]
}
```
- **Status Codes**:
  - 200: Success
  - 404: Application not found

## 3. Deployment APIs

### Submit Deployment Request
- **Endpoint**: `POST /deployments`
- **Description**: Submit a deployment request
- **Request Body**:
```json
{
  "appId": "string",
  "notes": "string",
  "checklist": {
    "testsCompleted": boolean,
    "certificatesValid": boolean,
    "configurationReviewed": boolean
  }
}
```
- **Response**:
```json
{
  "id": "string",
  "appId": "string",
  "status": "pending|approved|rejected",
  "notes": "string",
  "checklist": {
    "testsCompleted": boolean,
    "certificatesValid": boolean,
    "configurationReviewed": boolean
  }
}
```
- **Status Codes**:
  - 201: Request submitted successfully
  - 400: Invalid request body
  - 404: Application not found

### Get Deployment Status
- **Endpoint**: `GET /deployments/[id]`
- **Description**: Get deployment request status
- **Response**:
```json
{
  "id": "string",
  "appId": "string",
  "status": "pending|approved|rejected",
  "notes": "string",
  "checklist": {
    "testsCompleted": boolean,
    "certificatesValid": boolean,
    "configurationReviewed": boolean
  },
  "connectionDetails": {
    "as2Url": "string",
    "as2Id": "string",
    "partnerAs2Id": "string",
    "goLiveDate": "string"
  }
}
```
- **Status Codes**:
  - 200: Success
  - 404: Deployment request not found

## 4. Certificate Management APIs

### Get Certificates
- **Endpoint**: `GET /certificates`
- **Description**: Get list of all certificates
- **Response**:
```json
{
  "certificates": [
    {
      "id": "string",
      "name": "string",
      "expiresAt": "string",
      "status": "active|expired"
    }
  ]
}
```

### Upload Certificate
- **Endpoint**: `POST /certificates`
- **Description**: Upload a new certificate
- **Request Body**:
```json
{
  "appId": "string",
  "name": "string"
}
```
- **Response**: Created certificate object
- **Status Codes**:
  - 201: Certificate uploaded successfully
  - 400: Invalid request body
  - 404: Application not found

### Delete Certificate
- **Endpoint**: `DELETE /certificates/[id]`
- **Description**: Delete a certificate
- **Response**: No content
- **Status Codes**:
  - 204: Deleted successfully
  - 404: Certificate not found

## 5. Documentation APIs

### Get Documentation List
- **Endpoint**: `GET /docs`
- **Description**: Get list of all documentation
- **Response**:
```json
{
  "categories": [
    {
      "name": "string",
      "documents": [
        {
          "id": "string",
          "title": "string",
          "description": "string",
          "category": "string"
        }
      ]
    }
  ]
}
```

### Get Documentation Content
- **Endpoint**: `GET /docs/[id]`
- **Description**: Get documentation content
- **Response**:
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "content": "string"
}
```
- **Status Codes**:
  - 200: Success
  - 404: Document not found

## Error Responses

All API endpoints may return the following error responses:

```json
{
  "error": "string"
}
```

Common status codes:
- 400: Bad Request - Invalid request body or parameters
- 404: Not Found - Resource not found
- 500: Internal Server Error - Server-side error 