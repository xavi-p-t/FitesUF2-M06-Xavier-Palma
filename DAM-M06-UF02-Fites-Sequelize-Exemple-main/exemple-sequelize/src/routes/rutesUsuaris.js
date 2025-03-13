/**
 * rutesUsuaris.js
 * Definició de les rutes relacionades amb els vídeos
 */

const express = require('express');
const router = express.Router();
const usuarisController = require('../controllers/UsuarisController');

/**
 * @swagger
 * /api/usuaris:
 *   post:
 *     summary: Crea un nou usuari
 *     description: Crea un nou usuari amb les dades proporcionades
 *     tags: [usuaris]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - nom
 *               - idioma
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nom Usuari
 *               email:
 *                 type: string
 *                 description: mail usuari
 *               password:
 *                 type: string
 *                 description: contraseña usuari
 *               nom:
 *                 type: string
 *                 description: nom real usuari
 *               idioma:
 *                  type: string
 *                  descripcio: idioma aplicacio
 *     responses:
 *       201:
 *         description: usuari creat amb èxit
 *       400:
 *         description: error de la validacio
 *       409:
 *         description: dades repetides
 */
router.post('/', usuarisController.crearUsuari);

module.exports = router;