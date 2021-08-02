const express = require("express");
const { address } = require("faker");
const faker = require('faker');
const app = express();

class User{
    constructor(){
        this._id=faker.random.number;
        this.first_name=faker.name.firstName;
        this.last_name=faker.name.lastName;
        this.phone_number=faker.phone.phoneNumber;
        this.email=faker.internet.email;
        this.password=faker.internet.password;
    }

}
const newUser = new User();
class Address{
    constructor(){
        this.street=faker.address.street;
        this.city=faker.address.city;
        this.state=faker.address.state;
        this.code=faker.address.code;
        this.country=faker.address.country;
    }
}
const newAddress = new Address();

class Company{
    constructor(){
        this._id=faker.random.number;
        this.name=faker.name.companyName;
        this.address = newAddress;
    }
    
}
const newCompany = new Company();

app.get("api/users/new"  ,(req,res) =>
res.send(`first name : ${newUser.first_name}`));
app.get("/api/companies/new",(req,res) =>
res.send(`company name : ${newCompany.name}`));
app.get("/api/user/company",(req,res) =>
res.send(`first name : ${newUser.first_name},company name: ${newCompany.name}`));

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);