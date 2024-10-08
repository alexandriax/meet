import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage(); 
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event-card');
    });

  afterAll(() => {
      browser.close();
    });

  test('an event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event-card .event-details');
      expect(eventDetails).toBeNull();
    });

  test('user can expand an event to see its details', async () => {
      await page.click('.event-card .details-btn');
      const eventDetails = await page.$('.event-card .event-details');
      expect(eventDetails).toBeDefined();
    });

  test('user can collapse an event to hide details', async () => {
      await page.click('.event-card .details-btn');
      const eventDetails = await page.$('.event-card .event-details');
      expect(eventDetails).toBeNull();
    });
});