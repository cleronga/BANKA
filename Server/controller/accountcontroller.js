import accounts from '../db/account.db';
import users from '../db/user.db'

class accountcontroller {
    static getAccounts(req, res) {
      return res.json
      ({
        status:200,
        data:accounts
      });
    }
    static createAccount(req,res){
       
         const user = users.find(u => u.id === parseInt(req.params.id));

        const acc = accounts.find(u => u.owner === req.body.id);
        if(user){
            if(!acc){
            
            const account={
                id:Math.floor(Math.random() * 7000) + 8000,
                accountnumber:Math.floor(Math.random() * 70000) + 80000,
                createon:`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                owner:user.id,
                type:req.body.type,
                status:"draft",
                Openbalance:0
        
            }
            accounts.push(account);
            const data={
                accountNumber:account.accountnumber,
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                type: account.type,
                Balance:account.balance,

            }
            return res.status(201).json({
                status:201,
                message: 'Banka Account created seccessfully',
                data:data
              });
            }else{
                res.status(401).send({
                    status:400,
                    error:"User arleady has account "
                });
            }

        }else{
            res.status(401).send({
                status:400,
                error:" register first before you create account"
            });
        }
    }
    static ChangeStatus(req, res) {
        const { id } = req.params;        
        const accn = accounts.find(acc => acc.accountnumber == id);
        if (accn) {
            
          (accn.status = req.body.status);
          return res.status(200).json({
            status: 200,
            message:'Account status changed successfully',
            data: {
                AccountNumber:accn.accountnumber,
                Status: accn.status
            }
          });        
        } else{
          res.status(400).json({
            status:400,
            error: "Account not updated"
          });
        }

      }

 static deleteaccount(req, res) {      
        const account = accounts.find(acc => acc.accountnumber == req.params.id);
        const user=users.find(us=> us.type==='staff')
        if (!account) {
          res.status(404).send({
            status: 404,
            error: 'account not found',
          });
        }
        const index = accounts.indexOf(account);
        accounts.splice(index, 1);
        res.status(200).send({
          status: 200,
          message: 'account successfully deleted',
        });
        }
}
export default accountcontroller;