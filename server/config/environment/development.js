'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/rollforfun-dev'
  },
  sequelize: {
    uri: 'mysql://root:@localhost:3306/rollforfun-dev?reconnect=true',
    options: {
      logging: false,
      define: {
        timestamps: false
      }
    }
  },

  seedDB: true
};
