const { Router } = require('express');
const { getApiInfo, addCountriesToDb, getDbInfo, createActivity } = require('../Functions/index');
const { Country, Activity } = require('../db');

const router = Router();

module.exports = router;

// [ ] POST /activities:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos, relacionada con los países correspondientes

router.post('/', async (req, res) => {
    const {name, difficulty, duration, season, countryId} = req.body;
    try {
        const newActivity = await createActivity(name, difficulty, duration, season, countryId);
        return res.status(200).json(newActivity);
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    const dbActivities = await Activity.findAll();
    let activitiesList = [];
    try {
        await dbActivities.map( e => activitiesList.push(e.name));
        res.status(200).json(activitiesList);
    } catch (error) {
        return res.status(400).send(error);
    }
})

router.delete('/', async (req, res) => {
    const {name} = req.query;
    const deletedActivity = await Activity.destroy({where: {name}})
    try {
        if (deletedActivity) res.status(200).json({message: 'Deleted diet'})
        else res.status(400).json({message: 'Diet not found'})
    } catch (error) {
        res.status(404).json({message: 'Error deleting Diet'})
    }
})