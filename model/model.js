/**
 * Created by boot on 12/21/16.
 */
class EntitySearch {
  constructor(id, fullName, fullAddress) {
    this.id = id;
    this.fullName = fullName;
    this.fullAddress = fullAddress;
    this.normalizedAddress = EntitySearch.normalizeAddress(fullAddress);
    this.fullSearch = fullName + ' ' + this.normalizedAddress;
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
    return tokens.slice(0, tokens.length-1).join(' ') + ' ' + last;
  }
}

module.exports = EntitySearch;