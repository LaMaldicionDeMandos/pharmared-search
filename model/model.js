/**
 * Created by boot on 12/21/16.
 */
class EntitySearch {
  constructor(id, fullName, fullAddress) {
    this.id = id;
    this.fullName = fullName;
    this.fullAddress = fullAddress;
    this.fullSearch = fullName + ' ' + fullAddress;
  }
}

module.exports = EntitySearch;