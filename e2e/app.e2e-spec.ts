import { FrontendInteroperabilidadPage } from './app.po';

describe('frontend-interoperabilidad App', () => {
  let page: FrontendInteroperabilidadPage;

  beforeEach(() => {
    page = new FrontendInteroperabilidadPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
