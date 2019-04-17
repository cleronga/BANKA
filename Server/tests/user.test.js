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
    expect(res.body.status).to.equal(400);   
  });
  
});
 it('All fields are required', () => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      })
      .end((err, res) => {
        expect(res.body.status).to.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('error');
        
      });
  });
 it('User Signin', () => {
    const user = {
      email: 'mnre@gmail.com',
      password: '123456',
    };
    chai.request(server)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.body.status).to.equal(400);
        expect(res.body).to.have.property('status');        
        expect(res.body).to.have.property('error');
        expect(res.body).to.be.an('object');
        
      });
  });
});