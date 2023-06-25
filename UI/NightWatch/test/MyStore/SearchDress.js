describe('Search Dress Test', function () {
  before(browser => browser.navigateTo('http://automationpractice.multiformis.com/index.php'));

  it('Search', function (browser) {
    browser
      .waitForElementVisible('body')
	  .waitForElementVisible('#search_query_top')
      .setValue('#search_query_top', 'dress')
      .click('#searchbox button[name="submit_search"]')
      .waitForElementVisible('.product-container')
	  .assert.containsText('.product-container', 'dress');

  });
  
  
  after(browser => browser.end());

});





