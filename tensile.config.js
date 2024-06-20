export default {
    browsers: ['edge'],
    metrics: { memory: true, domSize: true },
    size: 'xl',
    numRuns: 1000,
}

// for some reason size xl doesn't work, tachometer looks for fixture__m while it should be looking for fixture__xl