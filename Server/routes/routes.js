import express from "express";
import usercontroller from "../controller/usercontroller";
import accountcontroller from '../controller/accountcontroller';
import transactioncontroller from'../controller/transactioncontroller';
import auth  from '../midleware/midleware';


const router = express.Router();

router.get("/api/v1/users", usercontroller.getUser);
//Admin
router.post("/api/v1/users", usercontroller.createAdmin);
router.post('/api/v1/auth/admin',auth,usercontroller.loginAdmin);

 router.post('/api/v1/auth/cashier', usercontroller.createstaff);
 router.post('/api/v1/cashier/login', auth,usercontroller.loginCashier);

router.post("/api/v1/auth/signup", usercontroller.createUser);
router.post("/api/v1/auth/login", usercontroller.login);


router.get("/api/v1/accounts",auth, accountcontroller.getAccounts);
router.post('/api/v1/accounts/:id', accountcontroller.createAccount);
router.patch('/api/v1/accounts/:id', accountcontroller.ChangeStatus);
router.delete('/api/v1/accounts/:id', accountcontroller.deleteaccount);

router.get("/api/v1/transactions", transactioncontroller.getTransaction);
router.post("/api/v1/transactions/:id/debit", transactioncontroller.DebitAccount);
router.post("/api/v1/transactions/:id/credit", transactioncontroller.creditAccount);

export default router;