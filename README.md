📝 To-Do List API
Node.js Express.js MongoDB Mongoose dotenv

A simple backend REST API built with Node.js & MongoDB demonstrating default values in Mongoose schemas.

🚀 Features
Create Tasks
Retrieve All Tasks
Automatic default value for isCompleted
📌 API Endpoints
➤ Create Task
POST /api/tasks

Request:

{
  "title": "Study Node.js"
}
Response:

{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Study Node.js",
    "isCompleted": false
  }
}
➤ Get All Tasks
GET /api/tasks
