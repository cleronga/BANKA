import transactions from '../db/transaction.db';
import accounts from '../db/account.db';

class transactioncontroller {
    static getTransaction(req, res) {
      return res.json
      ({
        status:200,
        data:transactions
      });
    }
    static creditAccount(req,res){
        const account=accounts.find(acc=>acc.accountnumber===req.params.id);
        const status=accounts.status; 
        const id=req.body.cashierId;
        const user=users.find(user=>user.id===id && user.type==='staff');       
        if(account){
            if(user){
                if(status==='aactive'){
           const oldBalance=account.balance;
            const newBalance=oldBalance+req.body.amout;
            const tra={
                id:Date.now(),
                accountnumber:acc.accountnumber,
                amout:req.body.amount,
                cashier:signi.id,
                transactiontype:"credit",
                oldBalance:oldBalance,
                newBalance:newBalance
            }
            transactions.push(tra);
            res.status.send({
                message:'transactions was successfull completed',
                status:200,
                data:tra
            })
        }else{
            res.status(400).send({
            status:400,
            error:"Please contact Admin to active Account"
            })

        }
        }else{
            res.status(400).send({
                status:400,
                error:"You don't have privillege"
            });
        }
    }else{
        res.status(400).send({
            status:400,
            error:"Account not found"
        });

    }
    }
    static DebitAccount(req,res){
        const account=accounts.find(acc=>acc.accountnumber===req.params.id);        
        if(account){
            const oldBalance=acc.balance;
            const newBalance=oldBalance-req.body.amout;
            if(newBalance>0){
            const tra={
                id:Date.now(),
                accountnumber:acc.accountnumber,
                amout:req.body.amount,
                cashier:u.id,
                transactiontype:"credit",
                oldBalance:oldBalance,
                newBalance:newBalance
            }
            transactions.push(tra);
            res.status.send({
                message:'transactions was successfull completed',
                status:200,
                data:tra
            });
        }else{
            res.status(400).send({
                status:400,
                error:`enter ammount grater than ${oldBalance}`
            });
        }
        }else{
            res.status(400).send({
                status:400,
                error:"Account not found"
            });
        }
    }

}
export default transactioncontroller; 