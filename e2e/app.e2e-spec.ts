import { MaListeDeCoursesPage } from './app.po';

describe('ma-liste-de-courses App', function() {
  let page: MaListeDeCoursesPage;

  beforeEach(() => {
    page = new MaListeDeCoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
