describe('Verify Whether webdriverUniversity link on homepage works correctly',function(){

 it('Check contactus button opens contact us page',function(done){
    return browser
    .setViewportSize({
        width:1200,
        height:800
    })
    .url('http://www.webdriveruniversity.com/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .click('#contact-us')
    .pause(3000)
 })



 it('Check Login button opens Login portal page',function(done){
    return browser
    .url('http://www.webdriveruniversity.com/')
      .click('#login-portal')
      .getTitle().then(function(title) {
          console.log('Title is: ' + title);
      })
      .pause(3000)

})

})