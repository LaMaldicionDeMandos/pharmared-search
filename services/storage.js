/**
 * Created by boot on 12/21/16.
 */
const EntitySearch = require('../model/model'),
  BlueBied = require('bluebird');

var client;
class DB {
  constructor(esClient) {
    client = esClient;
    this.Schema = {
      index: 'pharmared-search',
      body: {
        mappings: {
          EntitySearch: {
            properties: {
              id: {
                type: 'string',
                index: "not_analyzed"
              },
              fullSearch: {
                type: 'string',
                index: "not_analyzed"
              },
              fullAddress: {
                type: 'string',
                index: "not_analyzed"
              },
              normalizedAddress: {
                type: 'string',
                index: "not_analyzed"
              },
              fullName: {
                type: 'string',
                index: "not_analyzed"
              }
            }
          }
        }
      }
    };
    client.indices.create(this.Schema);
  }
};
