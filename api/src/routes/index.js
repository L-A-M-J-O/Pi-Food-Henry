const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const Country = require('../models/Country');
//const Activity = require('../models/Activity');
//const {Op, Country, Activity} = require('../db');
const { where } = require('sequelize');

const diet = require('./diet');
const recipe = require('./recipe');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/diet', diet);
router.use('/recipe', recipe);

module.exports = router;
