/*
 * build-docs.js — generate the self-contained, installable PWA at docs/index.html
 * from the canonical files in hospice-nurse-toolkit/ + assets/.
 *
 * It (1) inlines the CSS + data + app JS into one file, and (2) adds the PWA bits
 * (web manifest link, real apple-touch-icon, and service-worker registration) so the
 * GitHub Pages copy can be installed to the home screen and works offline.
 *
 * Run:  node build-docs.js
 * Do NOT hand-edit docs/index.html — re-run this after changing any source file.
 * (Function-form .replace() is used on purpose: a literal "$&" in the JS would otherwise
 *  be treated as a special replacement token and corrupt the bundle.)
 */
const fs = require("fs");

let html = fs.readFileSync("hospice-nurse-toolkit/index.html", "utf8");
const css = fs.readFileSync("assets/hospice-toolkit.css", "utf8");
const data = fs.readFileSync("assets/hospice-toolkit-data.js", "utf8");
const app = fs.readFileSync("assets/hospice-toolkit.js", "utf8");

// 1) inline styles + scripts
html = html.replace(/<link rel="stylesheet" href="\.\.\/assets\/hospice-toolkit\.css">/, () => "<style>\n" + css + "\n</style>");
html = html.replace(/<script src="\.\.\/assets\/hospice-toolkit-data\.js"><\/script>/, () => "<script>\n" + data + "\n</script>");
html = html.replace(/<script src="\.\.\/assets\/hospice-toolkit\.js"><\/script>/, () => "<script>\n" + app + "\n</script>");

// 2a) real apple-touch-icon (replace the inline SVG data-URI one) + manifest + icon links
const pwaHead =
  '<link rel="apple-touch-icon" href="icon-180.png">\n' +
  '  <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">\n' +
  '  <link rel="manifest" href="manifest.webmanifest">';
html = html.replace(/<link rel="apple-touch-icon" href="data:image\/svg\+xml,[^"]*">/, () => pwaHead);

// 2b) register the service worker just before </body>
const swReg =
  '<script>\n' +
  'if ("serviceWorker" in navigator) {\n' +
  '  window.addEventListener("load", function () {\n' +
  '    navigator.serviceWorker.register("sw.js").catch(function () {});\n' +
  '  });\n' +
  '}\n' +
  '</script>\n</body>';
html = html.replace(/<\/body>/, () => swReg);

fs.writeFileSync("docs/index.html", html);

const leftoverRefs = (html.match(/(src|href)="\.\.\//g) || []).length;
const hasManifest = /rel="manifest"/.test(html);
const hasSW = /serviceWorker\.register/.test(html);
console.log("docs/index.html built — external ../ refs:", leftoverRefs, "| manifest:", hasManifest, "| sw reg:", hasSW);
if (leftoverRefs || !hasManifest || !hasSW) process.exit(1);
