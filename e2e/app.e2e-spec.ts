import { BoletoFreeMobilePage } from './app.po';

describe('boleto-free-mobile App', () => {
  let page: BoletoFreeMobilePage;

  beforeEach(() => {
    page = new BoletoFreeMobilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
