import { PoliceClientPage } from './app.po';

describe('police-client App', () => {
  let page: PoliceClientPage;

  beforeEach(() => {
    page = new PoliceClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
