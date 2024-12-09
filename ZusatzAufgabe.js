const { Builder, By, until } = require('selenium-webdriver'); async function checkCartTotal() { let driver = await new Builder().forBrowser('chrome').build(); try { await driver.get('https://seleniumbase.io/coffee/'); console.log('Seite geöffnet');
const espressoButton = await driver.wait( until.elementLocated(By.css('div[data-test="Espresso"]')), 10000 ); await espressoButton.click(); console.log('Espresso hinzugefügt');
const mochaButton = await driver.wait( until.elementLocated(By.css('div[data-test="Mocha"]')), 10000 ); await mochaButton.click(); console.log('Mocha hinzugefügt');
const cappuccinoButton = await driver.wait( until.elementLocated(By.css('div[data-test="Cappuccino"]')), 10000 ); await cappuccinoButton.click(); console.log('Cappuccino hinzugefügt');
const cartButton = await driver.wait( until.elementLocated(By.css('a[aria-label="Cart page"]')), 10000 ); await cartButton.click(); console.log('Warenkorb geöffnet');
const totalButton = await driver.wait( until.elementLocated(By.css('button[data-test="checkout"]')), 10000 );
const totalText = await totalButton.getText();
const expectedTotal = '$37.00'; if (totalText.includes(expectedTotal)) { console.log('Verifizierung erfolgreich: ' + totalText); } else { console.log('Verifizierung fehlgeschlagen: ' + totalText); } } catch (error) { console.error('Fehler:', error); } finally { await driver.quit(); }}
checkCartTotal();
