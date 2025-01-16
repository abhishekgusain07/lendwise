import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

// Rate limiting variables
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 10;
const requestLog: number[] = [];

export async function POST(req: Request) {
  try {
    // Basic rate limiting
    const now = Date.now();
    requestLog.push(now);
    requestLog.splice(0, requestLog.length - MAX_REQUESTS);
    
    if (requestLog.length === MAX_REQUESTS && 
        requestLog[0] > now - RATE_LIMIT_WINDOW) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const { url } = await req.json();
    
    if (!url.startsWith('https://en.wikipedia.org/')) {
      return NextResponse.json(
        { error: 'Only Wikipedia URLs are allowed' },
        { status: 400 }
      );
    }

    const browser = await puppeteer.launch({
    });
    
    const page = await browser.newPage();
    
    // Set a reasonable timeout
    await page.setDefaultNavigationTimeout(10000);
    
    // Add a user agent to identify your bot
    await page.setUserAgent('WikiScraper/1.0 (Educational Purpose)');
    
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Extract the main content
    const content = await page.evaluate(() => {
      const articleContent = document.getElementById('mw-content-text');
      if (!articleContent) return null;

      // Remove unwanted elements
      const elementsToRemove = articleContent.querySelectorAll(
        'sup, .mw-editsection, .reference, .noprint, .mw-empty-elt'
      );
      elementsToRemove.forEach(el => el.remove());

      // Get text content with basic structure
      const paragraphs = Array.from(articleContent.querySelectorAll('p'));
      return paragraphs
        .map(p => p.textContent?.trim())
        .filter(text => text && text.length > 0);
    });

    await browser.close();

    if (!content) {
      return NextResponse.json(
        { error: 'Could not extract content' },
        { status: 404 }
      );
    }

    return NextResponse.json({ content });
    
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'Failed to scrape content' },
      { status: 500 }
    );
  }
}