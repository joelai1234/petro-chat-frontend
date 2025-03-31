import puppeteer from 'puppeteer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { html } = await req.json()

        if (!html)
            return NextResponse.json({ error: 'HTML content is required' }, { status: 400 })

        const browser = await puppeteer.launch({
            headless: true,
        })
        const page = await browser.newPage()

        // Set content and wait for network idle to ensure all resources are loaded
        await page.setContent(html, {
            waitUntil: 'networkidle0',
        })

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

        await browser.close()

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
