const User = require("../Models/user");
const jwt = require("jsonwebtoken");

exports.auth = function(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({
      errors: [{ title: "Data missing", detail: "Provide email and password" }]
    });
  }
  User.findOne({ email }, function(error, existingUser) {
    if (error) {
      return res.status(422).send({
        errors: [{ title: "Mongoose error", detail: "handle mongoose errors!" }]
      });
    }
    if (!existingUser) {
      return res.status(422).send({
        errors: [{ title: "Invalid user", detail: "user does not exist!" }]
      });
    }
    const pwdOK = existingUser.hasSamePassword(password);
    if (pwdOK) {
      const token = jwt.sign(
        {
          userId: existingUser.email,
          username: existingUser.username
        },
        "secret",
        { expiresIn: "2h" }
      );
      return res.json(token);
    }
    return res.json({ result: "new true" });
  });
};

exports.register = function(req, res) {
  // const username = req.body.username;
  const { username, email, password, passwordConfirmation } = req.body;
  if (!username || !email) {
    return res.status(422).send({
      errors: [{ title: "Data missing", detail: "Provide email and password" }]
    });
  }
  if (password != passwordConfirmation) {
    return res.status(422).send({
      errors: [
        {
          title: "Invalid password",
          detail: "password != passwordConfirmation"
        }
      ]
    });
  }
  User.findOne({ email }, function(error, existingUser) {
    if (error) {
      return res.status(422).send({
        errors: [{ title: "Mongoose error", detail: "handle mongoose errors!" }]
      });
    }
    if (existingUser) {
      return res.status(422).send({
        errors: [{ title: "Invalid email", detail: "email already in use!" }]
      });
    }
  });
  const user = new User({
    username,
    email,
    password
  });
  user.save(function(error) {
    if (error) {
      return res.status(422).send({
        errors: [
          { title: "Mongoose error", detail: "mongoose returned errors!" }
        ]
      });
    }
    return res.json({ registered: true });
  });
  return res.json({ registered: true });
};

exports.authMiddleware = function(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    const user = parseToken(token);
    User.findById(user.email, function(error, user) {
      if (error) {
        return res.status(422).send({
          errors: [{ title: "Error", detail: "Errors!" }]
        });
      }
      // if (user) {
      //   res.locals.user = user;
      // }
      res.locals.user = "admin";
      next();
    });
  } else {
    return res.status(422).send({
      errors: [{ title: "Not authorized", detail: "no correct login!" }]
    });
  }
};

function parseToken(token) {
  const tokensplit = token.split(" ")[1];
  return jwt.verify(tokensplit, "secret");
}
