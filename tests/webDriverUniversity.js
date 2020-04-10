var assert = require('assert');
describe('Verify Whether webdriverUniversity link on homepage works correctly', function () {

    it('Check contactus button opens contact us page', function (done) {
        browser
        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        browser.url('/')
        var title = browser.getTitle()
        assert.equal(title,'WebDriverUniversity.com')
        console.log('Title is: ' + title);
        browser.click('#contact-us')
        browser.pause(3000)
    })



    it('Check Login button opens Login portal page', function (done) {
        browser.url('/')
        browser.click('#login-portal')
        var title = browser.getTitle()
        console.log('Title is: ' + title);
        assert.equal(title,'WebDriverUniversity.com')
       // assert.notEqual(title,'WebDriverUniversity.com')
        browser.pause(3000)

    })

})