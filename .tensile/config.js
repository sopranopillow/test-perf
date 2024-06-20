
export const config = {
  "file": "dist/withoutSlotAlways.js",
  "size": "xl",
  "test": "mount",
  "browsers": [
    "edge"
  ],
  "numRuns": 1000,
  "imports": {
    "@tensile-perf/tools": "/node_modules/@tensile-perf/tools/lib/index.js",
    "afterframe": "/node_modules/afterframe/dist/afterframe.module.js",
    "random-seedable": "/node_modules/random-seedable/src/index.js"
  },
  "scripts": [],
  "cssSheets": [],
  "metrics": {
    "memory": true,
    "domSize": true
  },
  "parameters": {
    "seed": 4212021,
    "minBreadth": 4,
    "maxBreadth": 20,
    "minDepth": 4,
    "maxDepth": 20,
    "targetSize": 1000
  },
  "fixtureFileName": "fixture__m.js",
  "testFile": "/withoutSlotAlways.js"
};
