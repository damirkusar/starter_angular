import { browser, by, element, until } from 'protractor';

export class AppPage {
  public navigateToBase() {
    this.navigateTo('');
  }

  public navigateTo(url: string) {
    // const condition = until.urlMatches(new RegExp('home$'));
    browser.manage().window().maximize();
    return browser.get(`/${url}`);
  }

  public getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  public clickByName(name: string) {
    element(by.name(name)).click();
  }

  public getTextByName(name: string) {

    const condition = until.elementsLocated(by.name(name));
    browser.wait(condition, 1000);

    const message = element(by.name(name)).getText();

    return message;
  }

  public getTextById(id: string) {

    const condition = until.elementsLocated(by.id(id));
    browser.wait(condition, 1000);

    const message = element(by.id(id)).getText();

    return message;
  }

  public fillInputByName(name: string, text: string) {
    element(by.name(name)).sendKeys(text);
  }
}
