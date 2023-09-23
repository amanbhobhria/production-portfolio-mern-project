const express=require('express')
const { sendEmailController } = require('../controller/portfolioController')

// Router object

const router = express.Router()

// routes
router.post('/sendEmail',sendEmailController)


// export
module.exports=router
