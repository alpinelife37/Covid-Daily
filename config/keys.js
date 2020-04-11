require("dotenv").config();

module.exports = {
  secretOrKey: `${process.env.authKey}`,
};
