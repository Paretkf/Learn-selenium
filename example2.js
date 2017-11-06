require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:8080');  // เปิด browser ไป url ที่กำหนด
driver.findElement(By.className('title-input')).sendKeys('จารย์บอยสุดหล่อ'); // หา classname แล้วใส่ค่า
driver.findElement(By.className('description-input')).sendKeys('selenium webdriver description');
driver.findElement(By.className('description-input')).sendKeys('selenium webdriver description');
driver.findElement(By.id('male-input')).click(); // หา id แล้ว กดหรือเลือก
driver.findElement(By.id('black-input')).click();
driver.findElement(By.id('black-input2')).click();
driver.findElement(By.className('btn-submit')).click();
driver.wait(until.alertIsPresent(), 1000); // รอว่ามีการ Alert เกิดขึ้นหรือไม่ ภายใน 1 วินาที
// driver.quit(); // จบการทำงาน
