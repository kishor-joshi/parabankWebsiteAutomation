"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrationPageTest_1 = require("./../pages/registrationPageTest");
describe('parabank website automation', function () {
    beforeAll(function () {
        registrationPageTest_1.RegistrationPage.launchApplication();
    });
    it('should validate registration page title', function () {
        registrationPageTest_1.RegistrationPage.validatePageTitle();
    });
    //  RegistrationPage.navigateToRegistrationForm();
    it('validate registation link functionality', function () {
        registrationPageTest_1.RegistrationPage.navigateToRegistrationForm();
    });
    it('Validate  error message functionality of firstName and lastName', function () {
        registrationPageTest_1.RegistrationPage.sendAddress();
        registrationPageTest_1.RegistrationPage.sendCity();
        registrationPageTest_1.RegistrationPage.sendState();
        registrationPageTest_1.RegistrationPage.sendZipcode();
        registrationPageTest_1.RegistrationPage.sendPhoneNumber();
        registrationPageTest_1.RegistrationPage.sendSSN();
        registrationPageTest_1.RegistrationPage.sendPassword();
        registrationPageTest_1.RegistrationPage.sendUserName();
        registrationPageTest_1.RegistrationPage.sendConfirmPassword();
        registrationPageTest_1.RegistrationPage.sendPhoneNumber();
        registrationPageTest_1.RegistrationPage.clickOnRegisterButton();
        registrationPageTest_1.RegistrationPage.validateFirstNameErrorMessage();
        registrationPageTest_1.RegistrationPage.validateLastNameErrorMessage();
    });
    it('varify password functionality for mismatched password with confirm password', function () {
        registrationPageTest_1.RegistrationPage.varifyPasswordFunctionality();
    });
    it('Varify errormessage functionality of first name when first name is filled', function () {
        registrationPageTest_1.RegistrationPage.varifyFirstNameErrorMessage();
    });
    it('should show error message for empty phone number field', function () {
        registrationPageTest_1.RegistrationPage.varifyPhNumberErrorMessage();
    });
    it('fill registration page and validation successfull registration page', function () {
        registrationPageTest_1.RegistrationPage.sendFirstName();
        registrationPageTest_1.RegistrationPage.sendLastName();
        registrationPageTest_1.RegistrationPage.sendAddress();
        registrationPageTest_1.RegistrationPage.sendCity();
        registrationPageTest_1.RegistrationPage.sendState();
        registrationPageTest_1.RegistrationPage.sendZipcode();
        registrationPageTest_1.RegistrationPage.sendPhoneNumber();
        registrationPageTest_1.RegistrationPage.sendSSN();
        registrationPageTest_1.RegistrationPage.sendPassword();
        registrationPageTest_1.RegistrationPage.sendUserName();
        registrationPageTest_1.RegistrationPage.sendConfirmPassword();
        registrationPageTest_1.RegistrationPage.sendPhoneNumber();
        registrationPageTest_1.RegistrationPage.clickOnRegisterButton();
        registrationPageTest_1.RegistrationPage.varifysuccessfulRegisterPage();
    });
});
