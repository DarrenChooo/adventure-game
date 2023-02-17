/// ///////////////////////////////////////////////////
// INCLUDES
/// ///////////////////////////////////////////////////
const express = require('express')

const router = express.Router()

const floorsRoutes = require('./floorsRoutes')
const gamesRoutes = require('./gamesRoutes')
const inventoryRoutes = require('./inventoryRoutes')
const itemRoutes = require('./itemRoutes')
const npcRoutes = require('./npcRoutes')
const dialogueRoutes = require('./dialogueRoutes')
const userRoutes = require('./userRoutes')
const imageRoutes = require('./imageRoutes')
const currencyRoutes = require('./currencyRoutes')
const postboardRoutes = require('./postboardRoutes')
const bossRoutes = require('./bossRoutes')
const gameDurationRoutes = require('./gameDurationRoutes')
const sessionRoutes = require('./sessionRoutes')
const spinRoutes = require('./spinRoutes')
const dialogueStateRoutes = require('./dialogueStateRoutes')

// EXAMPLE
// router.use("/user", userRoutes)
// router.use("/inventory", inventoryRoutes)

/// ///////////////////////////////////////////////////
// Inventory route 
/// ///////////////////////////////////////////////////
router.use("/inventory", inventoryRoutes)

/// ///////////////////////////////////////////////////
// Floor route 
/// ///////////////////////////////////////////////////
router.use("/floors", floorsRoutes)

/// ///////////////////////////////////////////////////
// Image route 
/// ///////////////////////////////////////////////////
router.use("/image", imageRoutes)

/// ///////////////////////////////////////////////////
// Items route 
/// ///////////////////////////////////////////////////
router.use("/items", itemRoutes)

/// ///////////////////////////////////////////////////
// User route 
/// ///////////////////////////////////////////////////
router.use("/users", userRoutes)

/// ///////////////////////////////////////////////////
// Post route 
/// ///////////////////////////////////////////////////
router.use("/posts", postboardRoutes)

/// ///////////////////////////////////////////////////
// NPC route 
/// ///////////////////////////////////////////////////
router.use("/npcs", npcRoutes)

/// ///////////////////////////////////////////////////
// Dialogue route 
/// ///////////////////////////////////////////////////
router.use("/dialogues", dialogueRoutes)

/// ///////////////////////////////////////////////////
// Currency route 
/// ///////////////////////////////////////////////////
router.use("/currency", currencyRoutes)

/// ///////////////////////////////////////////////////
// Boss route 
/// ///////////////////////////////////////////////////
router.use("/boss", bossRoutes)

/// ///////////////////////////////////////////////////
// Games route 
/// ///////////////////////////////////////////////////
router.use("/games", gamesRoutes)

/// ///////////////////////////////////////////////////
// Game Duration route 
/// ///////////////////////////////////////////////////
router.use("/gameDuration", gameDurationRoutes)

/// ///////////////////////////////////////////////////
// Game Duration route 
/// ///////////////////////////////////////////////////
router.use("/sessions", sessionRoutes)

/// ///////////////////////////////////////////////////
// Spin Route
/// ///////////////////////////////////////////////////
router.use("/spin", spinRoutes)

/// ///////////////////////////////////////////////////
// Dialogue state route 
/// ///////////////////////////////////////////////////
router.use("/dialogueState", dialogueStateRoutes)

module.exports = router