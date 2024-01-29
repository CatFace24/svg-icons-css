const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

const inputDirectory = './input-icons-svg'; // Path to the directory containing SVG files
const outputCssFile = './output-icons.css'; // Path to the output CSS file

// Read SVG files from the input directory
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Process each SVG file
  const cssClasses = files.map((filename) => {
    const svgFilePath = path.join(inputDirectory, filename);
    const svgContent = fs.readFileSync(svgFilePath, 'utf-8');

    // Optimize SVG content using the optimize function
    const optimizedResult = optimize(svgContent, { path: svgFilePath });

    const className = `output-${path.basename(filename, '.svg').toLowerCase()}`;
    const encodedSvgData = encodeURIComponent(optimizedResult.data);

    // Check if the optimized content is not empty
    if (encodedSvgData.trim()) {
      return `.${className} { background-image: url("data:image/svg+xml,${encodedSvgData}"); height: var(--icon-height, 24px); width: var(--icon-width, 24px); background-size: cover;}`;
    } else {
      return null; // Exclude empty rulesets
    }
  }).filter(Boolean); // Remove null entries

  // Generate the CSS file
  const cssContent = cssClasses.join('\n\n');
  fs.writeFileSync(outputCssFile, cssContent, 'utf-8');
  console.log('CSS file generated successfully:', outputCssFile);
});