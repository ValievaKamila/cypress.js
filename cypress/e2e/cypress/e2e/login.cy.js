describe('Автотесты на форму логина', function () {
    it('Верный логин и пароль', function () {
    cy.visit('https://login.qa.studio/');        //открытие сайта
    cy.get('#mail').type('german@dolnikov.ru');  //ввод логина
    cy.get('#pass').type('iLoveqastudio1');      //ввод пароля
    cy.get('#loginButton').click();              //кнопка войти
    cy.get('#messageHeader').should('be.visible');                   //сообщение видно
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //сообщение содержит нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //кнопка видна
    })
    it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/');              //открытие сайта
    cy.get('#forgotEmailButton').click();              //кнопка забыли пароль
    cy.get('#mailForgot').should('be.visible');        //виден инпут для логина
    cy.get('#mailForgot').type('german@dolnikov.ru');  //ввод логина
    cy.get('#restoreEmailButton').should('be.visible');//видна кнопка отправить код
    cy.get('#restoreEmailButton').click();             //нажать кнопку отправить код
    cy.get('#messageHeader').should('be.visible');     //сообщение видно
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //сообщение содержит нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');           //кнопка видна
    })
    it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/');        //открытие сайта
    cy.get('#mail').type('german@dolnikov.ru');  //ввод логина
    cy.get('#pass').type('iLoveqastudio2');      //ввод пароля
    cy.get('#loginButton').click();              //кнопка войти
    cy.get('#messageHeader').should('be.visible');                    //сообщение видно
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//сообщение содержит нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');    //кнопка видна
    })
    it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');        //открытие сайта
    cy.get('#mail').type('erman@dolnikov.ru');   //ввод логина
    cy.get('#pass').type('iLoveqastudio1');      //ввод пароля
    cy.get('#loginButton').click();              //кнопка войти
    cy.get('#messageHeader').should('be.visible');                          //сообщение видно
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//сообщение содержит нужный текст
    })
    it('Логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio/');        //открытие сайта
    cy.get('#mail').type('germandolnikov.ru');   //ввод логина
    cy.get('#pass').type('iLoveqastudio1');      //ввод пароля
    cy.get('#loginButton').click();              //кнопка войти
    cy.get('#messageHeader').should('be.visible');                          //сообщение видно
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//сообщение содержит нужный текст
    })
    it('Приведение логина к строчным буквам', function () {
    cy.visit('https://login.qa.studio/');        //открытие сайта
    cy.get('#mail').type('GerMan@Dolnikov.ru');  //ввод логина
    cy.get('#pass').type('iLoveqastudio1');      //ввод пароля
    cy.get('#loginButton').click();              //кнопка войти
    cy.get('#messageHeader').should('be.visible');                   //сообщение видно
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //сообщение содержит нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //кнопка видна
    })
})