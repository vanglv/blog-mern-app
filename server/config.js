const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:123456a-@ds115472.mlab.com:15472/devconnectordb',
  port: process.env.PORT || 8081,
};

module.exports = config;
