  browser
  .url('http://www.webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .pause(3000)
    .end();


 //netstat -ano | findstr :4444
 //taskkill /PID 57368 /F   