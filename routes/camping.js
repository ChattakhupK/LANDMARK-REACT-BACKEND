const express = require("express");
const {
  listCamping,
  readCamping,
  createCamping,
  updateCamping,
  removeCamping,
} = require("../controllers/camping");
const { authCheck } = require("../middlewares/auth");
const router = express.Router();

//@ENDPOINT localhost:5000/api/camping
//@METHOD GET [list camping]
//@ACCESS Public
router.get("/camping", authCheck, listCamping);

//@ENDPOINT localhost:5000/api/camping/52
//@METHOD GET [read camping]
//@ACCESS Public
router.get("/camping/:id", readCamping);

//@ENDPOINT localhost:5000/api/camping
//@METHOD POST [create camping]
//@ACCESS private

router.post("/camping", createCamping);

//@ENDPOINT localhost:5000/api/camping/52
//@METHOD PUT [edit camping]
//@ACCESS private

router.put("/camping/:id", updateCamping);

//@ENDPOINT localhost:5000/api/camping/52
//@METHOD DELETE [delete camping]
//@ACCESS private

router.delete("/camping/:id", removeCamping);

module.exports = router;
