/*
    two pieces of information are necessary when defining a model
*/

const sequelize = require("./db");  
/*
    the sequelized connection from the sequelized file. 
    This is so we have access to the table that's gonna be created
    Thus, importing the connection from db.js
*/

const { DataTypes } = require("sequelize");
/*
    access to the sequelize library, but only (in this case) to
    specific key-value pairs (datatypes)
    Activate seems to have used the Sequelize DataTypes here
*/

//defining the model:
const User = sequelize.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rating: DataTypes.NUMBER,
});
/*
    sequelize is the connection to the database (as established in line 27 of db.js).
    Thus, when we use a define() method to define a model/table, we are using it to
    define the model/table in the database.
    The define() method takes two arguments. The name of the model/table, and an object
    which will provide the attributes, the structure of the model/table
*/

module.exports = { User };
/*
    User is exported inside a set of curly braces as it is representing: {User: User}
*/