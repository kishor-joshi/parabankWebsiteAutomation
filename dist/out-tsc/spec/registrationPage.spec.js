"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4jsConfig_1 = require("./../log4js-configurations/log4jsConfig");
const registrationPageTest_1 = require("../pages/registrationPageTest");
describe('parabank website registration page automation', function () {
    beforeAll(function () {
        registrationPageTest_1.RegistrationPage.launchApplication();
        log4jsConfig_1.log4jsConfig.log().debug('navigated to url');
    });
    it('should validate registration page title', function () {
        registrationPageTest_1.RegistrationPage.validatePageTitle();
        log4jsConfig_1.log4jsConfig.log().debug('page title is validated');
    });
    it('validate registration link functionality', function () {
        registrationPageTest_1.RegistrationPage.navigateToRegistrationForm();
        log4jsConfig_1.log4jsConfig.log().debug('navigated to register form page');
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
        log4jsConfig_1.log4jsConfig.log().debug('validated error functionality of firstname and last name');
    });
    it('varify password functionality for mismatched password with confirm password', function () {
        registrationPageTest_1.RegistrationPage.varifyPasswordFunctionality();
        log4jsConfig_1.log4jsConfig.log().debug('validated password functionality ');
    });
    it('Varify error message functionality of first name when first name is filled', function () {
        registrationPageTest_1.RegistrationPage.varifyFirstNameErrorMessage();
        log4jsConfig_1.log4jsConfig.log().debug('validated error functionality with positive scenario');
    });
    it('should show error message for empty phone number field', function () {
        registrationPageTest_1.RegistrationPage.varifyPhNumberErrorMessage();
        log4jsConfig_1.log4jsConfig.log().debug('validated error functionality of phone number');
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
        log4jsConfig_1.log4jsConfig.log().debug('validated successfull registration form');
    });
});
