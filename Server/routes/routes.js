import express from "express";
import usercontroller from "../controller/usercontroller";
import accountcontroller from '../controller/accountcontroller';


const router = express.Router();

router.get("/api/v1/users", usercontroller.getUser);
router.post("/api/v1/auth/signup", usercontroller.createUser);
router.post("/api/v1/auth/login", usercontroller.login);
router.get("/api/v1/accounts", accountcontroller.getAccounts);
router.post('/api/v1/accounts/:id', accountcontroller.createAccount);

export default router;