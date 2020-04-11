beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
    beforeEach(function() {
        console.log('Inside the describe block!')
    })

  it('Should be able to submit a successful submission via contact us form', function(done) {
        browser.setValue('[name="first_name"]','Praveen')
        browser.setValue('[name="last_name"]','Kumar')
        browser.setValue('[name="email"]','praveenngp15@gmail.com')
        browser.setValue('[name="message"]','Udemy Learning')
        browser.click('[value="SUBMIT"]')
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue('[name="first_name"]','Praveen')
    browser.setValue('[name="last_name"]','Kumar')
    browser.setValue('[name="email"]','praveenngp15@gmail.com')
    browser.click('[value="SUBMIT"]')
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue('[name="first_name"]','Praveen')
    browser.setValue('[name="email"]','praveenngp15@gmail.com')
    browser.setValue('[name="message"]','Udemy Learning')
    browser.click('[value="SUBMIT"]')
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue('[name="first_name"]','Praveen')
    browser.setValue('[name="last_name"]','Kumar')
    browser.setValue('[name="message"]','Udemy Learning')
    browser.click('[value="SUBMIT"]')
    });
});