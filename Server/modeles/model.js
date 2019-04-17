const model={
	 users=[{
   id:Intiger,
   email: String,
   firstName: String,
   lastName: String,
   password: String,
   type: String,
   isAdmin:boolean
   }],
   Account=[
     {
  id: Integer,
  accountnumber: Integer,
  creatOn: DateTime,
  owner: Integer,
  type: String,
  status: String,
  Balance: float
     }
  ],
   transaction=[
     {
  id: Integer,
  createOn:DateTime,
  type:String,
  accountnumber: Integer,
  cashier: Integer,
  amount:Float,
  oldBalance:Float,
  newBalance:Float 
     }
  ]
}