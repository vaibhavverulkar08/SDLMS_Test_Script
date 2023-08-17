import { Selector, t } from 'testcafe';

fixture('SDLMS Login and Authentication')
    .page('https://beta.deepthought.education/login'); // SDLMS URL

test('Test unsuccessful login attempts with invalid credentials.', async t => {
    await t
        .typeText('#username', 'user1harry@gmail.com')
        .typeText('#password', '123456')
        .click('#login') //
        .expect(Selector('div[id=\'login-error-notify\'] p').exists).ok()
});