import { CrawlerPage } from './app.po';

describe('crawler App', function() {
  let page: CrawlerPage;

  beforeEach(() => {
    page = new CrawlerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('crawl works!');
  });
});
