/**
 * Created by boot on 12/21/16.
 */
var er = /av(enida)?\.? /gi;
var numEr = /[0-9]+/;
var gNumErr = /([0-9]+)([0-9][0-9])/;

class EntitySearch {
  static get EntityType() {
    return {
      GOVERNMENTAL: 'GOVERNMENTAL',
      PHARMACY: 'PHARMACY',
      PHARMACIST: 'PHARMACIST',
      LABORATORY: 'LABORATORY',
      DRUGSTORE: 'DRUGSTORE'
    };
  };

  constructor(id, fullName, fullAddress, entityType) {
    this.id = id;
    this.fullName = fullName;
    this.fullAddress = fullAddress;
    this.normalizedAddress = EntitySearch.normalizeAddress(fullAddress);
    this.fullSearch = fullName + ' ' + this.normalizedAddress;
    this.entityType = entityType;
  }

  static normalizeAddress(address) {
    var normalized = address.replace(er, 'av. ').toLowerCase().trim();
    var tokens = normalized.split(' ');
    var last = tokens[tokens.length-1].trim();
    if (numEr.test(last)) {
      if (last.length > 2) {
        last = last.replace(gNumErr, "$100");
      } else {
        last = '00';
      }
    }
    return (tokens.slice(0, tokens.length-1).join(' ') + ' ' + last).trim();
  }
}

module.exports = EntitySearch;