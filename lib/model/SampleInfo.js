/* eslint-disable no-console */
const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const SampleInfo = sequelize.define(
  "sample_info",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    created_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      noUpdate: true
    },
    last_modified_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  },
  {
    freezeTableName: true,
    underscored: true,
    updatedAt: "last_modified_date",
    createdAt: "created_date"
  }
);

module.exports = SampleInfo;
