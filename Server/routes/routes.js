import express from "express";
import usercontroller from "../controller/usercontroller";


const router = express.Router();

router.get("/api/v1/users", usercontroller.getUser);
router.post("/api/v1/auth/signup", usercontroller.createUser);
router.post("/api/v1/auth/login", usercontroller.login);
 

export default router;