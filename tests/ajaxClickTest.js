describe('Test the button is clickable once the ajax loader completes loading', function () {

    it.skip('Attempt to click the button asap', function () {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1')
    })

    it.only('Attempt to click the button after 7 Seconds', function () {
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000)
        browser.pause(7000)
        browser.click('#button1')
        browser.pause(7000)
    })

})