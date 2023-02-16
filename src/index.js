/*
    we first need to import the user model in the same way we exported it.
    If we imported user as below:
        const user = require("./Model.js")
    It would mean that in order to access the user, we would need to do as follow:
        user.User
    What we are importing is the object ("{ User }") and saving it to the constant 'user'
    This is again a use of object destructuring
*/

const { User } = require("./Model.js");

const sequelize = require("./db");
//sequelize.sync();
/*
    calling the sequelize connection from the 'db.js' file ('const sequelize = require("./db")') allows us to run
    'sequelize.sync()' which will search the entire application for tables and add them
    sequelize.sync() was commented out as it needed to be moved to the async main function below in order to allow
    the file to run (given the we are using sync we have to use the counterpart)
*/


/*
    User.sync();
    
    is another option as we are asking to create and sync the specific
    table in the database. Used in place of the 2 lines of code above
    'User.sync()' will create the user table inside the database
*/

async function main () {
    
    await sequelize.sync();

    await User.create({
        username: "Roddy",
        email: "roddys@email.com",
        password: "test123",
        rating: 5,
    });

    // CREATE/INSERT
  //   await User.create({
  //     username: "Andy",
  //     email: "andyb@email.com",
  //     password: "test123",
  //     rating: 5,
  //   });

  // READ/SELECT
  //   const users = await User.findAll();

  //   console.log(JSON.stringify(users, null, 2));

  // UPDATE
  //   await User.update({ username: "Dave" }, { where: { id: 2 } });

  // DELETE
  //await User.destroy({ where: { username: "Dave" } });

};

main(); //calling the function so the code can run


/*
    When 'creating', we have to remember the parameters estblished on 'Model.js' and their datatypes
    at this point we can run the application in the terminal
    we run as 'node src/index.js' because the index file is inside the src folder, thus on a different
    'level' then we are in the terminal
*/