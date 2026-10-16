import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "c42759-github-io",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-16",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      notFoundHandling: "none",
    },
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
    },
  }),
});
