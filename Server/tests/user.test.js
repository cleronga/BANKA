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
        expect(res.body).to.have.property('message');
        
      });
  });

});


describe('User Signin', (done) => {
    const user = {
      email: 'mnre@gmail.com',
      password: '123456'
    };
  it("should test if email and password are valid",()=>{
    chai.request(server)
    .post('/api/v1/auth/signin')
    .send({
      email:'kiki@ymail.com',
      password:'3434'
    })
    .end((err,res)=>{
      expect(res.body.status).equal(404);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('error');
      expect(res.body).to.be.an('object');
    })
  })
    it('should sign in',()=>{      

    chai.request(server)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {        
        expect(res.body.status).to.equal(200);
        expect(res.body).to.have.property('status');        
        expect(res.body).to.have.property('data');
        expect(res.body).to.be.an('object');       
        
      });
      })
  });
