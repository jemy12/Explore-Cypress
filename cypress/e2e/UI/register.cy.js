// LoginTest.js
import RegisterPage from '../../object/registerPage.js';

describe('Register Tests', () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.visit();
  });

  it('should register successfully with valid credentials', () => {
    registerPage.fillname('abcde');
    registerPage.fillnomortelephone('0859597411');
    registerPage.fillnamabisnis('abcde');
    registerPage.filltipebisnis();
    registerPage.fillemail('123@gmail.com');
    registerPage.fillKataSandi('1239kertas');
    registerPage.fillKonfirmasiKataSandi('1239kertas');
    registerPage.submitAgree();
    // registerPage.assertLoginSuccess();
  });
});