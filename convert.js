import puppeteer from "puppeteer";
import fs from "fs/promises";
import path from "path";

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Read HTML file
  const filePath = path.resolve("resume.html");
  const html = await fs.readFile(filePath, "utf-8");

  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
}

generatePDF();
