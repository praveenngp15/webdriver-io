describe('Verify Whether webdriverUniversity link on homepage works correctly', function () {

    it('Check contactus button opens contact us page', function (done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        this.timeout(30000)
        browser.url('/')
        var title = browser.getTitle()
        expect(title).to.equal('WebDriverUniversity.com')
        console.log('Title is: ' + title);

        browser.click('#contact-us')
        var tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');

        var url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL Mismatch');
        browser.close();
    })



    it('Check Login button opens Login portal page', function (done) {
        browser.url('/')
        this.timeout(30000)

        var title = browser.getTitle();
		title.should.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);

        browser.click('#login-portal')
		var tabIds = browser.getTabIds();
		browser.switchTab(tabIds[1]);
        
        var title2 = browser.getTitle();
		expect(title2).to.equal('WebDriver | Login Portal');

		var url = browser.getUrl();
		expect(url).to.include('Login-Portal', 'URL Mismatch');
    })

})