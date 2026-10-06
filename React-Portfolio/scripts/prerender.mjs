import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
const server = await createServer({
  root,
  server: { middlewareMode: true, watch: null },
  appType: "custom",
});

try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const path = new URL("../dist/index.html", import.meta.url);
  const template = await readFile(path, "utf8");
  const placeholder = '<div id="root"></div>';
  if (!template.includes(placeholder)) {
    throw new Error("Missing empty React root in the build output.");
  }
  await writeFile(
    path,
    template.replace(placeholder, () => `<div id="root">${render()}</div>`),
  );
  console.log("SEO: prerendered the existing portfolio into dist/index.html.");
} finally {
  await server.close();
}
