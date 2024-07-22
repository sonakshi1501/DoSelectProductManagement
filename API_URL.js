let URL;
if (!PROXY_URI) {
  URL = "http://0.0.0.0:8001/"; // Use localhost instead of 0.0.0.0
} else {
  URL = PROXY_URI.replace("{{port}}", 8001);
}

export const APIURL = URL;
