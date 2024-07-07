// LoginPage.js

class RegisterPage {
    visit() {
      cy.visit('https://dashboard.melaka.app/register/');
    }
  
    fillname(name) {
      cy.get('[data-testid="register__text-field__name"]').type(name);
    }
  
    fillnomortelephone(mobilephone) {
    cy.get('[data-testid="register__text-field__phone-number"]').type(mobilephone);
    }

    fillnamabisnis(namabisnis) {
    cy.get('[data-testid="register__text-field__business-name"]').type(namabisnis)
      }

    filltipebisnis() {
    cy.get('[data-testid="register__radio-button__distributor"]').click();
      }

    fillemail(email) {
    cy.get('[data-testid="register__text-field__email"]').type(email);
      }

    fillKataSandi(Katasandi) {
    cy.get('[data-testid="register__text-field__password"]').type(Katasandi);
      }
    
    fillKonfirmasiKataSandi(KonfirmKatasandi) {
    cy.get('[data-testid="register__text-field__confirm-password"]').type(KonfirmKatasandi);
        // cy.get('#register__text-field__confirm-password').type(KonfirmKatasandi);
      }
  
    submitAgree() {
    cy.get('[data-testid="register__checkbox__tnc"]').click();
    }

    submitSignup() {
    cy.get('[data-testid="register__button__sign-up"]').click();
        }
  
  }
  
  export default RegisterPage;