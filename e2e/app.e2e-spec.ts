import { AngularGojsTestPage } from './app.po';

describe('angular-gojs-test App', () => {
  let page: AngularGojsTestPage;

  beforeEach(() => {
    page = new AngularGojsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
