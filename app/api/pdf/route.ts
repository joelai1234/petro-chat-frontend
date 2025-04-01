import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium-min'

const chromiumPack = 'https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar'

export async function POST(req: Request) {
  try {
    const { html } = await req.json()

    if (!html)
      return NextResponse.json({ error: 'HTML content is required' }, { status: 400 })
    console.log('start')
    // Initialize browser with chromium
    const browser = await puppeteer.launch({
      args: chromium.args,
      //   defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(chromiumPack),
      headless: true,
      //   ignoreHTTPSErrors: true,
    })
    console.log('browser')
    const page = await browser.newPage()
    console.log('page')

    // Set content and wait for network idle to ensure all resources are loaded
    await page.setContent(html, {
      waitUntil: 'networkidle0',
    })
    console.log('set content')
    // Generate PDF with better quality settings
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    })
    console.log('pdf')
    await browser.close()
    console.log(pdf)

    // Return PDF as base64 with proper encoding
    const base64Pdf = Buffer.from(pdf).toString('base64')
    return NextResponse.json({
      success: true,
      data: base64Pdf,
    })
  }
  catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to generate PDF',
    }, { status: 500 })
  }
}
