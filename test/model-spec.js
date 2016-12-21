/**
 * Created by boot on 12/21/16.
 */
const EntitySearch = require('../model/model'),
  should = require('should');
describe('Model', () => {
  describe('EntitySearch', () => {
    describe('constructor', () => {
      var entity = new EntitySearch('aa', 'bb', 'cc');
      it('should create entity with id', () => entity.should.have.property('id', 'aa'));
      it('should create entity with fullName', () => entity.should.have.property('fullName', 'bb'));
      it('should create entity with fullAddress', () => entity.should.have.property('fullAddress', 'cc'));
      it('should create entity with fullSearch', () => entity.should.have.property('fullSearch', 'bb cc'));
    });
  });
});