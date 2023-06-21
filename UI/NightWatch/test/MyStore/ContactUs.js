describe('Contact Us Test', function () {
  before(browser => browser.navigateTo('http://automationpractice.multiformis.com/index.php?controller=contact'));

  it('Contact Us Page and Form Test', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Contact us - My Store')
      .waitForElementVisible('form.contact-form-box', 5000)
      .assert.visible('form.contact-form-box')
  });
  
  //Test without all required fields
  it('Without all required fields', function (browser) {
	browser.click('select[id="id_contact"] option[value="0"]');
	//browser.verify.visible("#desc_contact0");
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
	//browser.expect.element('.alert.alert-success').to.have.attribute('style').which.contains('display: none');
    browser.verify.containsText('.alert.alert-danger', 'Subject Heading, Email and Message cannot be blank.');
	
  });
  
  // Test with Entering Subject Heading only
  it('Entering Subject Heading only', function (browser) {
    browser.click('select[id="id_contact"] option[value="2"]');
	browser.verify.visible("#desc_contact2");
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Email and Message cannot be blank.');
  });
  
   // Test with Entering Invalid Email only
	it('Entering Invalid Email only', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', ' ');
	browser.pause(2000);
	//browser.expect.element('input#email[data-validate="isEmail"] + i.icon-invalid').to.be.visible;
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Invalid email address.');
	});
	
    // Test with Entering Valid Email only
	it('Entering Valid Email only', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test@test.com');
	//browser.expect.element('.form-group i.icon-valid').to.be.visible;
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Subject Heading and Message cannot be blank');
	});
	
	
   
	
	
	
    // Test with Entering Message only
	it('Entering Message only', function (browser) {

    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', ' Great!');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Email and Subject Heading cannot be blank.');
	
	});
	
	//Test without entering a message 
	it('Without entering a message', function (browser) {

	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Message cannot be blank.');
	});
	
	//Test with entering Heading and wrong email and a blank message 
	it('Entering Subject Heading, wrong email and blank address', function (browser) {

	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please enter a valid email address and message.');
	});
	
	
	//Test with entering Heading, wrong email and a message 
	it('Entering Subject Heading,wrong email and message', function (browser) {
	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Invalid email address.');
	});
	
	//Test with entering Heading, empty email and a message
	it('Entering Subject Heading,empty email and a message', function (browser) {
	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Email address cannot be blank.');
	});
	
	//Test with entering no Heading, valid email and a message 
	it('Entering no Heading, valid email and a message', function (browser) {

	browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Subject Heading cannot be blank.');
	
	});
	
	//Test with entering all required fiels correctly  
	it('Entering all required fields', function (browser) {

	browser.click('select[id="id_contact"] option[value="2"]');
	browser.verify.visible("#desc_contact2");
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-success', 5000);
	browser.waitForElementNotPresent ('.alert.alert-danger',5000);
    browser.verify.containsText('.alert.alert-success', 'Your message has been successfully sent to our team.');
	});
/* 	
	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
	//all fields
	browser.click('select[id="id_contact"] option[value="1"]');
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-success', 5000);
    browser.verify.containsText('.alert.alert-success', 'Your message has been successfully sent to our team.');
	
	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
	
	browser.pause(2000);
	browser.back();
	//all fields
	browser.click('select[id="id_contact"] option[value="1"]');
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-success', 5000); */
    //browser.verify.containsText('.alert.alert-success', 'Your message has been successfully sent to our team.');
	
	//Test with Entering spaces only in the message field
	it('Entering Spaces in the message field', function (browser) {

	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

	
	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', '   ');
    browser.click('button#submitMessage');
	//browser.waitForElementVisible('.alert.alert-danger', 5000);   //stopped here is this right?
	browser.verify.visible('.alert.alert-danger');
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Message cannot be blank.');
	
	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
	
  });
  
  
  //Testing File Upload
   it('Testing file upload', function (browser) {
        const filePath = '../../upload/WebQAEngineer2023-Task.docx';
        const absoluteFilePath = require('path').resolve(__dirname, filePath);
        
        browser.setValue('input#fileUpload', absoluteFilePath);
        
        // Get the filename from the file path
        const filename = filePath.split('/').pop();
        
        // Assert the value of the file input element contains the filename
        browser.getValue('input#fileUpload', function(result) {
          const fileValue = result.value;
          browser.assert.ok(fileValue.includes(filename), `Expected '${fileValue}' to contain '${filename}'`);
        });
        


    }); 
	
	
//Testing file upload within the maximum size
     it('Testing file upload within the maximum size', function (browser) {
        const filePath = '../../upload/WebQAEngineer2023-Task.docx';
        const absoluteFilePath = require('path').resolve(__dirname, filePath);

        browser.setValue('input#fileUpload', absoluteFilePath);

        browser.execute(function () {
            const fileInput = document.querySelector('input#fileUpload');
            return fileInput.files[0].size;
        }, [], function (result) {
            const fileSize = result.value;

            // Maximum file size in bytes (536870912 bytes = 512 MB)
            const maxFileSize = 536870912;

            // Assert that the file size does not exceed the maximum size
            browser.assert.ok(fileSize <= maxFileSize, `Expected file size to be less than or equal to ${maxFileSize} bytes`);
        }); 
	 });

  after(browser => browser.end());
});