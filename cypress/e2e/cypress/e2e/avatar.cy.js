describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');                                                //открыть сайт
        cy.get(':nth-child(1) > .auth__input').type('qbkbbjg871@emailnow.ru');                //ввести логин
        cy.get('#password').type('Y.3+6ZX.c$Nm,HE');                                          //ввести пароль
        cy.get('.auth__button').click();                                                      //нажать кнопку войти
        cy.get('.header__btns > [href="/shop"]').click();                                     //нажать вкладку магазин
        //cy.get('.header__btn_active').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(3).click(); //выбрать аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //ввести номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                                //ввести дату
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');               //ввести CV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Kamila Valieva');            //ввести владельца карты
        cy.get('.pay-btn').click();                 //кнопка оплатить
        cy.get('#cardnumber').type('56456');        //код подтверждения
        cy.get('.payment__submit-button').click();  //кнопка отправить
        cy.get('.payment__adv').click();            //кнопка вернуться в магазин
    })
})
