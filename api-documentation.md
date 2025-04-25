# EDI Platform API Documentation

## 1. Application Management APIs

### Get Applications List
- **Endpoint**: `GET /api/apps`
- **Description**: Get list of all applications
- **Response Fields**:
  - `id`: Application ID
  - `name`: Application name
  - `code`: Application code
  - `status`: Application status (active/inactive)
  - `protocol`: Protocol type (AS2/SFTP/API)
  - `interfaces`: List of supported interfaces
  - `createdAt`: Creation timestamp
  - `lastModified`: Last modification timestamp

### Get Application Details
- **Endpoint**: `GET /api/apps/[id]`
- **Description**: Get detailed information about a specific application
- **Response Fields**:
  - All fields from Get Applications List
  - `description`: Application description
  - `certificates`: List of associated certificates
  - `testResults`: List of test results

### Create Application
- **Endpoint**: `POST /api/apps`
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

### Update Application
- **Endpoint**: `PUT /api/apps/[id]`
- **Description**: Update an existing application
- **Request Body**: Same as Create Application

### Delete Application
- **Endpoint**: `DELETE /api/apps/[id]`
- **Description**: Delete an application

## 2. Testing APIs

### Run Test
- **Endpoint**: `POST /api/testing`
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
    "status": "success|failed",
    "message": "string",
    "details": {}
  }
  ```

### Get Test Results
- **Endpoint**: `GET /api/testing/[appId]`
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

## 3. Deployment APIs

### Submit Deployment Request
- **Endpoint**: `POST /api/deployments`
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

### Get Deployment Status
- **Endpoint**: `GET /api/deployments/[id]`
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

## 4. Certificate Management APIs

### Get Certificates
- **Endpoint**: `GET /api/certificates`
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
- **Endpoint**: `POST /api/certificates`
- **Description**: Upload a new certificate
- **Request Body**:
  ```json
  {
    "appId": "string",
    "name": "string",
    "file": "File"
  }
  ```

### Delete Certificate
- **Endpoint**: `DELETE /api/certificates/[id]`
- **Description**: Delete a certificate

## 5. Documentation APIs

### Get Documentation List
- **Endpoint**: `GET /api/docs`
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
- **Endpoint**: `GET /api/docs/[id]`
- **Description**: Get documentation content
- **Response**:
  ```json
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "category": "string"
  }
  ``` 