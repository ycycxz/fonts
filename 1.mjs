import { fontSplit } from 'cn-font-split';

fontSplit({
    FontPath: './1.ttf', // Path to your font file
    destFold: './dist', // Directory where the split fonts will be saved
    
    autoChunk: true, // Automatically split remaining Unicode characters
    unicodeRank: [[0x4e00, 0x9fa5]], // Prioritize the specified Unicode range
    chunkSize: 1024*1024, // Desired size of each chunk in bytes (70KB)
    chunkSizeTolerance: 1.7, // Tolerance for chunk size variation
    maxAllowSubsetsCount: 600, // Maximum number of subsets allowed
    cssFileName: 'result.css', // Name of the output CSS file
    testHTML: true, // Output an HTML test file
    reporter: true, // Output a report file
    previewImage: {
        text: '中文网字计划\nThe Project For Web', // Text to display in the preview
        name: 'preview' // Name of the preview image file
    },
    log: console.log, // Custom logging function
    renameOutputFont: '[hash][ext]', // Rename the output font files
    threads: {
        split: true, // Enable multi-threaded splitting
        options: {
            maxWorkers: 4 // Maximum number of workers for multi-threading
        }
    },
    fontFeature: true // Support for complex glyph features
});
