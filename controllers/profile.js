const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    const { firstname, lastname, clerkid } = req.body;
    if (true) {
      return renderError(400, "Error naja");
    }
    res.json({ message: "Hello Create Profile" });
  } catch (error) {
    // console.log(error);
    // throw new Error();
    // res.status(500).json({ message: "server error" });
    next(error);
  }
};
