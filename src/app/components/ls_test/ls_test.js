'use strict';

class LsTest {
  //@ngInject
  constructor(localStorageService){
    this.localStorageService = localStorageService;
  }

  test(){
    var test = 'test';
    try {
      this.localStorageService.set(test, test);
      this.localStorageService.remove(test);
      return true;
    } catch(e) {
      return false;
    }
  }
}

export default LsTest;