import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from './app.po';

defineSupportCode(({ Given, When, Then, Before }) => {
  let app: AppPage;

  Before(() => {
    app = new AppPage();
  });

  Given('I am on the {string} page',
    (page: string) => {
      if (page === 'home') {
        app.navigateToBase();
      } else {
        app.navigateTo(page);
      }
    }
  );

  When('I click on the {string} link',
    (action: string) => {
      app.clickByName(action);
    }
  );

  When('I fill {string} in {string}',
    (text: string, elementName: string) => {
      app.fillInputByName(elementName, text);
    }
  );

  Then('I should be on the {string} page',
    (page: string) => app.getCurrentUrl().then(url => expect(url).to.contains(`/${page}`))
  );

  Then('I should see the following text {string} on {string}',
    (message: string, name: string) => app.getTextByName(name).then(msg => expect(msg).to.be.equal(message))
  );

  Then('I should see the following text {string} on {string} id',
    (message: string, id: string) => app.getTextById(id).then(msg => expect(msg).to.be.equal(message))
  );
});
