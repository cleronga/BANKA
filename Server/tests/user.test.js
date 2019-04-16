import chai from 'chai';
import chaiHttp from "chai-http";
import server from '../server';

const {expect}=chai;
chai.use(chaiHttp);

describe('user', ()=>{
it('should sign up /users POST',()=>{
  chai.request(server)
  .post("/api/v1/auth/signup")
  .send({
    email:'mnre@gmail.com',
    firstName:'kamana',
    lastName:'claude',
    type:'client',
    isAdmin:false
  })
  .end((err, res) => {
    expect(res.body.status).to.equal(201);   
  });
  
});
it('should log in /users GET');
it('should get one account /users:id GET');
it('should Admin delete account users/:id DELETE');
});