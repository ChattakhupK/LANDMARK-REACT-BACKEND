exports.listCamping = (req, res) => {
  try {
    res.send("Hello Controllers Get");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server Error" });
  }
};

exports.readCamping = (req, res) => {
  try {
    res.send("Hello Controllers Read");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
};

exports.createCamping = (req, res) => {
  try {
    res.send("Hello Controllers Create");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateCamping = (req, res) => {
  try {
    res.send("Hello Controllers Update");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.removeCamping = (req, res) => {
  try {
    res.send("Hello Controllers REmove");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
