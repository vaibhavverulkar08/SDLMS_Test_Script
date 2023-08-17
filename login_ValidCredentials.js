import { Selector, t } from 'testcafe';

fixture('SDLMS Login and Authentication')
    .page('https://beta.deepthought.education/login'); // SDLMS URL

test('Test successful login with valid credentials', async t => {
    await t
        .typeText('#username', 'user2harry@gmail.com') //Enter Username
        .typeText('#password', 'Harry@12') // Enter Password
        .click('#login') //Click on Login
        .expect(Selector('.bold-font.mb-4').exists).ok();
        // Validate Text Message"Welcome to DeepThought after successful login.
});



