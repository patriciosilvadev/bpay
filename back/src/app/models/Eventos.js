import Sequelize, { Model } from 'sequelize';

class Evento extends Model {
  static init(sequelize) {
    super.init({
      id_produtor: Sequelize.INTEGER,
      nome_evento: Sequelize.STRING,
      data_inicio: Sequelize.DATEONLY,
      data_termino: Sequelize.DATEONLY,
      hora_inicio: Sequelize.TIME,
      hora_termino: Sequelize.TIME,
      valor_min_parcelamento: Sequelize.DECIMAL,
      percentual_juros_parcelamento: Sequelize.DECIMAL,
      qtde_max_parcelas: Sequelize.INTEGER,
      multiplos_cartoes_cliente: Sequelize.BOOLEAN,
      liberado: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
    return this;
  }
};

export default Evento;



