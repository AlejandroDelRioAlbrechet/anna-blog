import { AnnaBlogPage } from './app.po';

describe('anna-blog App', function() {
  let page: AnnaBlogPage;

  beforeEach(() => {
    page = new AnnaBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
