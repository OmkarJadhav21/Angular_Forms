import { AngFormsPage } from './app.po';

describe('ang-forms App', () => {
  let page: AngFormsPage;

  beforeEach(() => {
    page = new AngFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
