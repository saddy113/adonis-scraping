import puppeteer from 'puppeteer'

export default class Crawer {
  async config() {
    const browserFetcher = await puppeteer.createBrowserFetcher()
    // const browserFetcher = await puppeteer
    const revisionInfo = await browserFetcher.download('818858')
    const browser = await puppeteer.launch({
      executablePath: revisionInfo.executablePath,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    return { browser, page }
  }
}
