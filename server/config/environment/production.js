'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL +
            process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/rollforfun'
  },
  sequelize: {
    uri: process.env.CLEARDB_DATABASE_URL || 'mysql://root:@localhost:3306/rollforfun-dev?reconnect=true',
    options: {
      logging: false,
      define: {
        timestamps: false
      }
    }
  }
};
