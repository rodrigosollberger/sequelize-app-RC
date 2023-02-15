/*
    this file is where we are going to connect with the database file
*/

/*
    const sequelize = require("sequelize") //importing an entire library. the contents of that library are stored in the variable sequelize

    const sequelize = require("./index") //importing from a file
 */

const { Sequelize } = require("sequelize");
/* 
    This is called the sequelize constructor
    Requiring the entirety of the Sequelize class through require.
    Thus, what comes back from the sequelize library is an object.
    But we only want the Sequelize class constructor, so we use
    object destructuring. We're accepting an anonymous set of curly
    brakets, where we pull out the Key of Sequelize with a capital S, as it means a Class.
*/

const path = require("path");
/*
    we also need the path module. This module import is a library as it
    doesn't have a file path ("./")
*/

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"), //this will create the new file/filepath. so sequelize-app-RC/src/db.sqlite
    // logging: false (this would be usual in a production level app as the database always logs to the console. this avoids it)
});

/*
    Link to the database file
*/

module.exports = sequelize;
/*
    exporting the connection (sequelize) so it can be used elsewhere
*/