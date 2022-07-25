const fs = require('fs');
const path = require('path');
const users = require ('../data/users.json');
const usersDir = path.join(__dirname, "../data/users.json");

const User = {
    getData: function(){
        return users;
        // return JSON.parse(fs.readFileSync(this.User, 'utf-8'));
    },
    findAll: function(){
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser.userID == id); //el id va como string y en el json esta como Number
        return userFound;
    },
    findByField: function(field, text){
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser[field] === text); 
        return userFound;
    },
    generateId:  function(){
        // let allUsers = this.findAll();
        // let lastUser = allUsers.pop();
        let lastUser = users[users.length-1];
        console.log(lastUser)
        let id = lastUser?lastUser.userID+1 : 1;
        return id;
        // if (lastUser) {                      //seteo para los casos donde el json este sin contenido, sino va sin if
        // return lastUser.userID + 1;
        // }
        // return 1
    },
    create: function(userData){
        let newUser =  {
            userID: User.generateId(),
            ...userData
        }
        users.push(newUser);
        let usersJson = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersDir, usersJson, 'utf-8');
        return newUser;
    },
    delete: function(id){
        let finalUsers = users.filter((user)=> user.userID != id);
        fs.writeFileSync(usersDir, usersJson, 'utf-8');
        return true
    }
}

module.exports = User;
