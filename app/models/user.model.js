
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nome: {
        type: Sequelize.STRING
      },
      sexo :{
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celular: {
        type: Sequelize.STRING
      },      
      tipoUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN
      }
    });

    return User;
  };