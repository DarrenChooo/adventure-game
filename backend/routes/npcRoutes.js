/// ///////////////////////////////////////////////////
// INCLUDES
/// ///////////////////////////////////////////////////
const express = require('express')

const router = express.Router()

const controller = require("../controller/npcController")

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs
/// ///////////////////////////////////////////////////
router.get("/", controller.getAllNpc);

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs/<npcId>/<userId>
/// ///////////////////////////////////////////////////
router.get("/:npcid/:userid", controller.getNpcById);

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs/
/// ///////////////////////////////////////////////////
router.post("/", controller.insertNpc)

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs/<npcId>
/// ///////////////////////////////////////////////////
router.put("/:npcId", controller.updateNpc)

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs/<npcId>
/// ///////////////////////////////////////////////////
router.delete("/:npcId", controller.deleteNpc)

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs/search/<keyword>
/// ///////////////////////////////////////////////////
router.get("/search/:searchInp", controller.searchNpc)

/// ///////////////////////////////////////////////////
// Backend testing via Postman -> http://localhost:3000/api/npcs/getgame/<npcid>
/// ///////////////////////////////////////////////////
router.get("/getgame/:npcid", controller.getGameByNpcId)

module.exports = router