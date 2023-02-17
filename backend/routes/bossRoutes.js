const express = require('express')

const router = express.Router()

const controller = require("../controller/bossController")

/// ///////////////////////////////////////////////////
// Backend URL  -> http://localhost:3000/boss/
/// ///////////////////////////////////////////////////
router.post("/", controller.createBoss);

/// ///////////////////////////////////////////////////
// Backend URL  -> http://localhost:3000/boss/:id
/// ///////////////////////////////////////////////////
router.get("/:id", controller.getBoss);

/// ///////////////////////////////////////////////////
// Backend URL  -> http://localhost:3000/boss/:id
/// ///////////////////////////////////////////////////
router.put("/:id", controller.updateBoss);

/// ///////////////////////////////////////////////////
// Backend URL  -> http://localhost:3000/boss/:id
/// ///////////////////////////////////////////////////
router.delete("/:id", controller.deleteBoss);

module.exports = router