const { Builder, By, until } = require('selenium-webdriver'); async function checkMochaPrice() { let driver = await new Builder().forBrowser('chrome').build(); try { await driver.get('https://seleniumbase.io/coffee/'); console.log('Seite geöffnet');
const mochaButton = await driver.wait( until.elementLocated(By.css('div[data-test="Mocha"]')), 10000 ); await mochaButton.click(); console.log('Mocha hinzugefügt');
const cartButton = await driver.wait( until.elementLocated(By.css('a[aria-label="Cart page"]')), 10000 ); await cartButton.click(); console.log('Warenkorb geöffnet');
const totalButton = await driver.wait( until.elementLocated(By.css('button[data-test="checkout"]')), 6000 );
const priceText = await totalButton.getText(); if (priceText.includes('$8.00')) { console.log('Verifizierung erfolgreich: ' + priceText); } else { console.log('Verifizierung fehlgeschlagen: ' + priceText); } } catch (error) { console.error('Fehler:', error); } finally { await driver.quit(); }}
checkMochaPrice();
