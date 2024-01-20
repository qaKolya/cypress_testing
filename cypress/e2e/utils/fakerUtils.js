// import faker from 'faker'
import { faker } from '@faker-js/faker';

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
}

export default FakerUtils;