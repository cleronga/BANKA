import users from '../db/user.db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class usercontroller {
  static getUser(req, res) {
    return res.json
    ({
      status:200,
      data:users
    });
  }
 
 static createAdmin(req,res){
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
      }  if (!req.body.password) {
        return res.status(400).send({
          status: 400,
          message: 'password  is required',
        });
      }  
    const { email,firstName,lastName } = req.body;
      const password=bcrypt.hashSync(req.body.password);
    if(!user){
      const payload={
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        type:'staff',
        isAdmin:true
      }
        
    jwt.sign(payload, 'pr', { expiresIn: '1h' },(err, token) => { 
      const newUser = {
      id: Math.floor(Math.random() * 700) + 800,
      token,
      email,
      firstName,
      lastName,
      password:password,
      type:"staff",
      isAdmin:true
    };
    
    users.push(newUser);
    return res.header('Authorization', token).status(201).json({
      status: 201,
      message: 'Admin Registered successfully',
      data:newUser      
    });
 
});
  }else{
      res.status(400).send({
          status:400,
          error:"User arleady has account"
      })
  }

 }
 static createstaff(req,res){
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
      }  if (!req.body.password) {
        return res.status(400).send({
          status: 400,
          message: 'password  is required',
        });
      }  
    const { email,firstName,lastName } = req.body;
      const password=bcrypt.hashSync(req.body.password);
    if(!user){
      const payload={
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        type:'staff',
        isAdmin:false
      }
        
    jwt.sign(payload, 'pr', { expiresIn: '1h' },(err, token) => { 
      const newUser = {
      id: Math.floor(Math.random() * 700) + 800,
      token,
      email,
      firstName,
      lastName,
      password:password,
      type:"staff",
      isAdmin:false
    };
    
    users.push(newUser);
    return res.header('Authorization', token).status(201).json({
      status: 201,
      message: 'Staff Registered successfully',
      data:newUser      
    });
 
});
  }else{
      res.status(400).send({
          status:400,
          error:"User arleady has account"
      })
  }

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
      }  if (!req.body.password) {
        return res.status(400).send({
          status: 400,
          message: 'password  is required',
        });
      }  
    const { email,firstName,lastName, type } = req.body;
    const password=bcrypt.hashSync(req.bod.password);
  
    if(!user){
        
    jwt.sign({users}, 'pr', { expiresIn: '1h' },(err, token) => {
        if(err) { console.log(err) }  
   const jwtoken=token.split(',')

    const newUser = {
      id: Math.floor(Math.random() * 700) + 800,
      jwtoken,
      email,
      firstName,
      lastName,
      password:password,
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
      res.status(400).send({
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
        res.status(400).send({
            status:400,
            error:"Invalid email or Password"
        })
    }

  }
    static loginAdmin(req,res){      
    const user = users.find(u => u.email === req.body.email );
    console.log(bcrypt.hashSync(req.body.password));
    
   
    if(user){   
      const compare = bcrypt.compareSync(req.body.password, user.password);
    if (!compare){ return res.status(400).json({ status: 400, error: 'Incorrect Password' });
    }else{
       
      const generate = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        type:user.type,
        isAdmin:user.isAdmin
      };
const token = jwt.sign(generate, 'pr', { expiresIn: '24h' });
    return res.header('Authorization', `${token}`).status(200).json({
      status: 200,
      message: 'Log in successfully',
      data: {
        token,
        generate,
      },
    });
  }
    }else{
        res.status(400).send({
            status:400,
            error:"Invalid email or Password"
        })
    }
  
  
  }
  static loginCashier(req,res){      
    const user = users.find(u => u.email === req.body.email );
    console.log(bcrypt.hashSync(req.body.password));
    
   
    if(user){   
      const compare = bcrypt.compareSync(req.body.password, user.password);
    if (!compare){ return res.status(400).json({ status: 400, error: 'Incorrect Password' });
    }else{
       
      const generate = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        type:user.type,
        isAdmin:user.isAdmin
      };
const token = jwt.sign(generate, 'pr', { expiresIn: '24h' });
    return res.header('Authorization', `${token}`).status(200).json({
      status: 200,
      message: 'Log in successfully',
      data: {
        token,
        generate,
      },
    });
  }
    }else{
        res.status(400).send({
            status:400,
            error:"Invalid email or Password"
        })
    }
  
  
  }
  
}

export default usercontroller;