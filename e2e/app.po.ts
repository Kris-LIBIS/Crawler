import { browser, element, by } from 'protractor';

export class CrawlerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('crawl-root h1')).getText();
  }
}
