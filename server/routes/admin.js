import {adminDash,adminDash1, adminDash2} from '../controller/admin'

const express = require("express");
const router = express.Router();

router.get("/admin-dash",adminDash)
router.get("/admin-dash1",adminDash1)
router.get("/admin-dash2",adminDash2)
router.post("/Login",loginpage)






module.exports = router;