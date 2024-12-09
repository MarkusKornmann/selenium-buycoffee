const { Builder, By, until } = require('selenium-webdriver'); async function addEspressoToCart() { let driver = await new Builder().forBrowser('chrome').build(); try { await driver.get('https://seleniumbase.io/coffee/'); console.log('Seite geöffnet');
const espressoButton = await driver.wait( until.elementLocated(By.css('div[data-test="Espresso"]')), 5000 ); await espressoButton.click(); console.log('Espresso hinzugefügt');
const cartButton = await driver.wait( until.elementLocated(By.css('a[aria-label="Cart page"]')), 5000 );
const cartText = await cartButton.getText(); if (cartText.includes('cart (1)')) { console.log('Verifizierung erfolgreich: ' + cartText); } else { console.log('Verifizierung fehlgeschlagen: ' + cartText); } } catch (error) { console.error('Fehler:', error); } finally { await driver.quit(); }}
addEspressoToCart();
