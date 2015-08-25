'use strict';

var yelp = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY || 'UtH5trQ8xl7-HGcUcph7fw',
  consumer_secret: process.env.YELP_CONSUMER_SECRET || '2swHhbUwcj-xShP4M9NgcvMnwD8',
  token: process.env.YELP_TOKEN || 'xzDc0PaYsTXkqCfdG_2XBtWOfP9sa7-c',
  token_secret: process.env.YELP_TOKEN_SECRET || 'UluIm4Q3AAY-dLixUMqOKtDb_kI'
});

exports.search = function(req, res) {
  console.log(req.query);
  yelp.search(req.query, function(error, data) {
    if(error) { return res.status(500).send(error); }
    return res.status(200).send(data);
  });
};

exports.business = function(req, res) {
  console.log(req.query);
  yelp.business(req.query, function(error, data) {
    if(error) { return res.status(500).send(error); }
    return res.status(200).send(data);
  });
};