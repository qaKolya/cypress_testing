import { fa, faker } from '@faker-js/faker';

class FakerUtils {

  static generateName() {
     return faker.internet.userName();
  }

  static generateSurname() {
    return faker.internet.userName();
  }

  static generateEmail() {
    return faker.internet.email();
  }

  static generateUsername() {
    const usernam = faker.internet.displayName();
    return usernam
  }

  static generatePhoneNumber() {
    return faker.phone.phoneNumber();
  } 

  static generateCourseName() {
    return faker.internet.domainName();
  }

  static generateCategory() {
    return faker.commerce.department();
  }

  static generateDescription() {
    return faker.commerce.productDescription();
  }

  static generateCode() {
    return faker.number.int();
  }
}

export default FakerUtils;