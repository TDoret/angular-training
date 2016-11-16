export class UserApi {
  firstname: String;
  lastname: String;
  username: String;
  birthDate: Date;
  email: String;
  password: String;
  address: String;//{type:[{ type: Schema.ObjectId, ref: 'Address'}], required: false},
  phoneNumber: String;
  admin: Boolean;
  active: Boolean;
  friends: String; //{type: [{type: Schema.ObjectId, ref: 'User'}], required: false},
  interests: String; //{type: [{type: Schema.ObjectId, ref: 'Game'}], required: false},
  created_at: Date;
  updated_at: Date;
  verified: Boolean;
  loginAttempts: Number;
  lockUntil: Number;
}
