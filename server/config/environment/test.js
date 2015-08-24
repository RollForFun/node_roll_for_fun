'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/rollforfun-test'
  },
  sequelize: {
    uri: 'mysql://root:@localhost:3306/rollforfun-test?reconnect=true',
    options: {
      logging: false,
      define: {
        timestamps: false
      }
    }
  }
};
