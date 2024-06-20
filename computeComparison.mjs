import * as fs from "node:fs";
import * as path from "node:path";

const withoutSlotAlways = JSON.parse(
  fs.readFileSync(
    path.resolve(
      ".tensile",
      "results",
      "-withoutSlotAlways.js-fixture__m.js-mount-2024-06-19.json"
    )
  )
);
const withSlotAlways = JSON.parse(
  fs.readFileSync(
    path.resolve(
      ".tensile",
      "results",
      "-withSlotAlways.js-fixture__m.js-mount-2024-06-19.json"
    )
  )
);

const resultsPath = path.resolve("results.html");

let htmlContent = [
  "<!doctype html>",
  "<html>",
  "<title>Comparison tests</title>",
  `<style>
table, th, td {
  border:1px solid black;
}
</style>`,
  "<head />",
  "</body>",
];

htmlContent.push(`<table>
  <tr>
    <th>seed</th>
    <th>minBreadth</th>
    <th>maxBreadth</th>
    <th>minDepth</th>
    <th>maxDepth</th>
    <th>targetSize</th>
  </tr>
  <tr>
    <th>${withoutSlotAlways.fixtureParams.seed}</th>
    <th>${withoutSlotAlways.fixtureParams.minBreadth}</th>
    <th>${withoutSlotAlways.fixtureParams.maxBreadth}</th>
    <th>${withoutSlotAlways.fixtureParams.minDepth}</th>
    <th>${withoutSlotAlways.fixtureParams.maxDepth}</th>
    <th>${withoutSlotAlways.fixtureParams.targetSize}</th>
  </tr>
</table>`);

const createTables = (item) => {
  const benchmarks = item["benchmarks"];
  const browsers = Object.keys(benchmarks);

  htmlContent.push(`<h2>${item.testFile}</h2>`);

  browsers.forEach((browser) => {
    const browserData = benchmarks[browser].processedMeasurments;
    htmlContent.push(`<table>`);
    htmlContent.push(`<th><th>${browser}</th></th>`);
    const measurements = Object.keys(browserData);
    const calculations = Object.keys(browserData[measurements[0]]);
    htmlContent.push(
      `<tr><th>metric</th>${calculations.map(
        (calculation) => `<th>${calculation}</th>`
      )}</tr>`
    );

    measurements.forEach((measurement) => {
      htmlContent.push(`<tr>`);
      htmlContent.push(`<td>${measurement}</td>`);
      calculations.forEach((calculation) => {
        htmlContent.push(`<td>${browserData[measurement][calculation]}</td>`);
      });
      browserData[measurement];
      htmlContent.push(`</tr>`);
    });

    htmlContent.push(`</table>`);
  });
  htmlContent.push();
};

createTables(withoutSlotAlways);
createTables(withSlotAlways);

htmlContent.push("</body>");
htmlContent.push("</html>");

fs.writeFileSync(resultsPath, htmlContent.join("\n"));
