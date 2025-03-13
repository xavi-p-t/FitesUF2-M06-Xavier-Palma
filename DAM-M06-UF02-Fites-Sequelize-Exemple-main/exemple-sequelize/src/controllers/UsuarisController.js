const { Usuaris, Video } = require('../models');
const { logger } = require('../config/logger');
/**
 * Crea un nou vídeo
 * @param {Object} req - Objecte de petició
 * @param {Object} res - Objecte de resposta
 * @param {Function} next - Funció següent del middleware
 */
const crearUsuari = async (req, res, next) => {
    try {
      const { username, email, password, nom, idioma } = req.body;
      logger.info('Petició per crear un nou usuari', { username });
      
      const user = await Usuaris.findByPk(username);
      const mail = await Usuaris.findByPk(email);
      if (username.length < 3) {
        return res.status(400).json({
          ok: false,
          codi:"ERROR_VALIDACIO",
          missatge: `Les dades proporcionades no compleixen els requisits`,
          detalls: [
                {
                camp: "username",
                error: "El nom d'usuari ha de tenir com a mínim 3 caràcters"
                }
            ]
        });
      }
      
      else if (user != null){
        return res.status(409).json({
            ok: false,
            codi: "ERROR_DUPLICAT",
            missatge: "Ja existeix un usuari amb aquest nom d'usuari o email",
            detalls: [
                {
                camp: username,
                error: "Aquest usuari ja està registrat"
                }
            ]

          });
      }else if ( mail != null){
        return res.status(409).json({
            ok: false,
            codi: "ERROR_DUPLICAT",
            missatge: "Ja existeix un usuari amb aquest nom d'usuari o email",
            detalls: [
                {
                camp: email,
                error: "Aquest email ja està registrat"
                }
            ]

          });
      }
      
      // Crear el vídeo
      const usuari = await Usuaris.create({
        username,
        email,
        password,
        nom,
        data_registre: Date(),
        idioma
      });
      
      res.status(201).json({
        ok: true,
        missatge: "Usuari creat amb èxit",
        resultat: {
            username: username,
            email: email,
            nom: nom,
            data_registre: Date() ,
            idioma: idioma
        }

      });
    } catch (error) {
      logger.error('Error creant nou vídeo:', error);
      next(error);
    }
  };

  module.exports = {
    crearUsuari
  };