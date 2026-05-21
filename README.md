# VisionEDA Documentation Website

This is a documentation website for **VisionEDA**, a Python library for exploratory data analysis of computer vision datasets, including image, hyperspectral image, and point cloud data.

## What is included

- `index.html` — homepage for the documentation site.
- `installation.html` — installation and setup guidance.
- `quickstart.html` — basic usage examples.
- `image-eda.html` — detailed documentation for `ImageEDA`, including function explanations and metric interpretation.
- `hyperspectral.html` — documentation section for hyperspectral EDA.
- `pointcloud.html` — documentation section for point cloud EDA.
- `api.html` — API overview.
- `examples.html` — practical examples.
- `testing.html` — test-file usage notes.
- `gallery.html` — visual output gallery using sample results.
- `roadmap.html` — future development notes.
- `styles.css` — site styling and white/green visual theme.
- `script.js` — copy-code functionality and interactive behaviour.
- `assets/` — images, visual outputs, and downloadable files used in the documentation.
- `assets/VisEDA_Documentation.pdf` — complete detailed PDF documentation linked from the homepage sidebar download button.

[//]: # (## Preview locally)

[//]: # ()
[//]: # (You can open the site directly by double-clicking:)

[//]: # ()
[//]: # (```text)

[//]: # (index.html)

[//]: # (```)

[//]: # ()
[//]: # (For a better local preview, run a small local server from inside this folder:)

[//]: # ()
[//]: # (```bash)

[//]: # (python -m http.server 8000)

[//]: # (```)

[//]: # ()
[//]: # (Then open:)

[//]: # ()
[//]: # (```text)

[//]: # (http://localhost:8000)

[//]: # (```)

[//]: # ()
[//]: # (## Deploy on GitHub Pages)

[//]: # ()
[//]: # (1. Create a GitHub repository for the documentation website.)

[//]: # (2. Upload all files and folders in this directory, including `index.html`, `styles.css`, `script.js`, and `assets/`.)

[//]: # (3. Go to **Settings → Pages** in the GitHub repository.)

[//]: # (4. Under **Build and deployment**, choose **Deploy from a branch**.)

[//]: # (5. Select the branch, usually `main`, and the root folder `/`.)

[//]: # (6. Save the settings and wait for GitHub Pages to publish the site.)

[//]: # ()
[//]: # (The site should keep the white background with green accent styling. If GitHub Pages displays unexpected colours, confirm that `styles.css` was uploaded and that each HTML file links to it correctly:)

[//]: # ()
[//]: # (```html)

[//]: # (<link rel="stylesheet" href="styles.css">)

[//]: # (```)

[//]: # ()
[//]: # (## Updating the documentation)

[//]: # ()
[//]: # (When new VisionEDA features are added:)

[//]: # ()
[//]: # (1. Update the relevant HTML page.)

[//]: # (2. Add code examples using fenced-style code blocks already used in the site.)

[//]: # (3. Add or replace visual outputs in the `assets/` folder.)

[//]: # (4. Keep API explanations user-focused: explain what the function does, when to use it, and how to interpret the output.)

[//]: # (5. Test the website locally before pushing to GitHub.)

[//]: # ()
[//]: # (## Notes for maintaining code examples)

[//]: # ()
[//]: # (Code blocks include copy buttons through `script.js`. To keep this working, write examples inside standard HTML code blocks, such as:)

[//]: # ()
[//]: # (```html)

[//]: # (<pre><code class="language-python">from viseda import ImageEDA</code></pre>)

[//]: # (```)

[//]: # ()
[//]: # (Avoid placing code only inside normal paragraphs because users will not get the copy button behaviour.)

[//]: # ()
[//]: # (## Recommended documentation style)

[//]: # ()
[//]: # (For each function or method, include:)

[//]: # ()
[//]: # (- Purpose: what the function does.)

[//]: # (- Inputs: important parameters users must understand.)

[//]: # (- Output: what is returned or saved.)

[//]: # (- Interpretation: what the result means in practical dataset analysis.)

[//]: # (- Example: a short working code snippet.)

## License

This documentation package is prepared for the VisionEDA project.

## Downloadable PDF

The homepage includes a **Download PDF** button in the left sidebar, so users can save the complete detailed documentation directly from the documentation site.
