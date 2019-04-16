import users from '../db/user.db';
import jwt from 'jsonwebtoken';

class usercontroller {
  static getUser(req, res) {
    return res.json
    ({
      status:200,
      data:users
    });
  }
 
  static createUser(req, res) { 
    const user = users.find(user => user.email === req.body.email );
    if (!req.body.email) {
        return res.status(400).send({
          status: 400,
          message: 'Email is required',
        });
      } if (!req.body.firstName) {
        return res.status(400).send({
          status: 400,
          message: 'First Name is required',
        });
      } if (!req.body.lastName) {
        return res.status(400).send({
          status: 400,
          message: 'Last Name is required',
        });
      }  
    const { email,firstName,lastName,password, type } = req.body;
  
    if(!user){
        
    jwt.sign({users}, 'pr', { expiresIn: '1h' },(err, token) => {
        if(err) { console.log(err) }  
   const jwtoken=token.split(',')

    const newUser = {
      id: Date.now(),
      jwtoken,
      email,
      firstName,
      lastName,
      password,
      type:"client",
      isAdmin:false
    };
    
    users.push(newUser);
    return res.status(201).json({
      status:201,
      data:newUser
    });
});
  }else{
      res.status(401).send({
          status:400,
          error:"User arleady has account"
      })
  }
}

  static getOneUser(req, res) {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if (user) {
      return res.status(200).json({
        status:200,
        data: user
      });
    } else {
      res.status(400).json({
          status:400,
        error: "Account not found"
      });
    }
  }
  static deleteUser(req, res) {
    const user = users.find(a => a.id === parseInt(req.params.id));
    if (!user) {
      res.status(404).send({
        status: 404,
        error: 'user not found',
      });
    }
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.status(200).send({
      status: 200,
      message: 'user successfully deleted',
    });
    }
    static updateUser(req, res) {
        const { id } = req.params;
        const user = users.find(updateuser => updateuser.id == id);
        if (user) {
          (user.password = req.body.password);
          return res.status(200).json({
            status: 200,
            data: user
          });
        } else {
          res.status(400).json({
            status:400,
            error: "Password not updated"
          });
        }
      }
      
  static login(req,res){      
    const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
   
    if(user){      
       
        res.status(200).send({
        status:200,
        data:{
          token:user.jwtoken,
          id:user.id,
          email:user.email,
          firstName:user.firstName,
          lastName:user.lastName
        }         
            
        })
    }else{
        res.status(401).send({
            status:401,
            error:"Invalid email or Password"
        })
    }

  }
  
}

export default usercontroller;