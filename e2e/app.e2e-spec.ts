import { CloneProjectPage } from './app.po';

describe('clone-project App', () => {
  let page: CloneProjectPage;

  beforeEach(() => {
    page = new CloneProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
