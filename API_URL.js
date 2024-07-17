let URL;
const PROXY_URI = process.env.VSCODE_PROXY_URI;
if (!PROXY_URI) {
  URL = "http://localhost:8001/"; // Use localhost instead of 0.0.0.0
} else {
  URL = PROXY_URI.replace("{{port}}", 8001);
}

export const APIURL = URL;
