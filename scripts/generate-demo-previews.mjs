import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";

const BASE_URL = "http://127.0.0.1:3000";

const demos = [
  { url: "/demo/barber", output: "barber.jpg" },
  { url: "/demo/burger", output: "burger.jpg" },
  { url: "/demo/trades", output: "trades.jpg" },
];

const outputDir = path.join(process.cwd(), "public", "demo-previews");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function generate() {
  await ensureDir(outputDir);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1024 },
    deviceScaleFactor: 2,
  });

  for (const demo of demos) {
    const fullUrl = `${BASE_URL}${demo.url}`;
    const outputPath = path.join(outputDir, demo.output);

    console.log(`Capturing ${fullUrl} -> ${outputPath}`);

    await page.goto(fullUrl, {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    await page.waitForTimeout(1200);

    await page.screenshot({
      path: outputPath,
      type: "jpeg",
      quality: 90,
      fullPage: false,
    });
  }

  await browser.close();
  console.log("Done.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
