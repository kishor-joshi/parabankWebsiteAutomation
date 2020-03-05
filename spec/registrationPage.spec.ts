import { log4jsConfig } from './../log4js-configurations/log4jsConfig';
import { RegistrationPage } from '../pages/registrationPageTest';


describe('parabank website registration page automation', function () {

    beforeAll(function () {
        RegistrationPage.launchApplication();
        log4jsConfig.log().debug('navigated to url');

    })

    it('should validate registration page title', function () {
        RegistrationPage.validatePageTitle();
        log4jsConfig.log().debug('page title is validated');

    });

    it('validate registration link functionality', function () {
        RegistrationPage.navigateToRegistrationForm();
        log4jsConfig.log().debug('navigated to register form page');

    })


    it('Validate  error message functionality of firstName and lastName', function () {
        RegistrationPage.sendAddress();
        RegistrationPage.sendCity();
        RegistrationPage.sendState();
        RegistrationPage.sendZipcode();
        RegistrationPage.sendPhoneNumber();
        RegistrationPage.sendSSN();
        RegistrationPage.sendPassword();
        RegistrationPage.sendUserName();
        RegistrationPage.sendConfirmPassword();
        RegistrationPage.sendPhoneNumber();
        RegistrationPage.clickOnRegisterButton();
        RegistrationPage.validateFirstNameErrorMessage();
        RegistrationPage.validateLastNameErrorMessage();
        log4jsConfig.log().debug('validated error functionality of firstname and last name');

    })


    it('varify password functionality for mismatched password with confirm password', function () {
        RegistrationPage.varifyPasswordFunctionality();
        log4jsConfig.log().debug('validated password functionality ');

    })

    it('Varify error message functionality of first name when first name is filled', function () {
        RegistrationPage.varifyFirstNameErrorMessage();
        log4jsConfig.log().debug('validated error functionality with positive scenario');

    })


    it('should show error message for empty phone number field', function () {
        RegistrationPage.varifyPhNumberErrorMessage();
        log4jsConfig.log().debug('validated error functionality of phone number');

    })


    it('fill registration page and validation successfull registration page', function () {
        RegistrationPage.sendFirstName();
        RegistrationPage.sendLastName();
        RegistrationPage.sendAddress();
        RegistrationPage.sendCity();
        RegistrationPage.sendState();
        RegistrationPage.sendZipcode();
        RegistrationPage.sendPhoneNumber();
        RegistrationPage.sendSSN();
        RegistrationPage.sendPassword();
        RegistrationPage.sendUserName();
        RegistrationPage.sendConfirmPassword();
        RegistrationPage.sendPhoneNumber();
        RegistrationPage.clickOnRegisterButton();
        RegistrationPage.varifysuccessfulRegisterPage();
        log4jsConfig.log().debug('validated successfull registration form');

    })
});

