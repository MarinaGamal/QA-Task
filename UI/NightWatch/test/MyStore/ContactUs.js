describe('Contact Us Test', function () {
  before(browser => browser.navigateTo('http://automationpractice.multiformis.com/index.php?controller=contact'));

  it('Contact Us Page and Form Test', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Contact us - My Store')
      .waitForElementVisible('form.contact-form-box', 5000)
      .assert.visible('form.contact-form-box')
  });
  
  //Submit without all required fields
  it('Submit with all blank', function (browser) {
	browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please enter required fields.');
	
  });
  
  // Test with Entering Subject Heading only (Customer Service Option)
  it('Entering Subject Heading only Customer Service', function (browser) {
    browser.click('select[id="id_contact"] option[value="2"]');
	browser.verify.visible("#desc_contact2");
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please enter email address');
  });
  
    // Test with Entering Subject Heading only (Webmaster Option)
    it('Entering Subject Heading only Webmaster', function (browser) {
    browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please enter email address');
  });
  
   // Test with Entering Invalid Email only, invalid email should appear
	it('Entering Invalid Email only', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Invalid email address.');
	});
	
	
	// Test with Entering Invalid Email only, wrong validation sign should appear
	it('Entering Invalid Email and check for wrong sign', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', '');
	browser.verify.attributeContains('p.form-group', 'class', 'form-error');

	});
	
	
    // Test with Entering Valid Email only
	it('Entering Valid Email only', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please select a subject from the list provided.');
	});
	
	// Test with Entering Valid Email only, right validation sign should appear
	it('Entering Valid Email only and check for sign', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', '');
	browser.verify.attributeContains('p.form-group', 'class', 'form-ok');

	});
	
	// Test with Entering Valid Email with space
	it('Entering Valid Email only with spaces', function (browser) {
    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'marina@test.com ');
    browser.setValue('textarea#message', '');
	browser.verify.attributeContains('p.form-group', 'class', 'form-ok');
    
	});

	
    // Test with Entering Message only
	it('Entering Message only', function (browser) {

    browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', '');
    browser.setValue('textarea#message', ' Great!');
    browser.click('button#submitMessage');
    browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please select a subject from the list provided.');
	
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
    browser.verify.containsText('.alert.alert-danger', 'The message cannot be blank.');
	});
	
	//Test with entering Heading and wrong email and a blank message 
	it('Entering Subject Heading, wrong email and blank message', function (browser) {

	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test');
    browser.setValue('textarea#message', '');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Invalid email address.');
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
    browser.verify.containsText('.alert.alert-danger', 'Please enter email address.');
	});
	
	//Test with entering no Heading, valid email and a message 
	it('Entering no Heading, valid email and a message', function (browser) {

	browser.click('select[id="id_contact"] option[value="0"]');
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-danger', 5000);
	browser.waitForElementNotPresent ('.alert.alert-success',5000);
    browser.verify.containsText('.alert.alert-danger', 'Please select a subject from the list provided.');
	
	});
	
	//Testing File Upload
   it('Testing file upload', function (browser) {
		browser.pause(2000);
		browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
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

	
	//Test with entering all required fields correctly  
	it('Entering all required fields', function (browser) {

	browser.click('select[id="id_contact"] option[value="2"]');
	browser.verify.visible("#desc_contact2");
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', 'Great!');
    browser.click('button#submitMessage');
	browser.waitForElementVisible('.alert.alert-success', 5000);
    browser.verify.containsText('.alert.alert-success', 'Your message has been successfully sent to our team.');
	
	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
	});
	
	//Test with Entering spaces only in the message field
	it('Entering Spaces in the message field', function (browser) {

	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

	
	browser.click('select[id="id_contact"] option[value="1"]');
	browser.verify.visible("#desc_contact1");
    browser.setValue('input#email', 'test@test.com');
    browser.setValue('textarea#message', '   ');
    browser.click('button#submitMessage');
	browser.verify.visible('.alert.alert-danger');
    browser.verify.containsText('.alert.alert-danger', 'The message cannot be blank.');
	
	browser.pause(2000);
	browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
	
  });
  
  
  
  after(browser => browser.end());
});