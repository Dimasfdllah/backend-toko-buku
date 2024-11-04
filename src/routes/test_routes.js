const express = require("express")
const testController = require("../controllers/test_controller")

const  testRoutes = express.Router()

testRoutes.get("/test/health",testController.healthCheck)

module.exports = testRoutes