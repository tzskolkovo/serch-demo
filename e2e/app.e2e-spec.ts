import { SkolkovoSearchPage } from './app.po';

describe('skolkovo-search App', () => {
  let page: SkolkovoSearchPage;

  beforeEach(() => {
    page = new SkolkovoSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
