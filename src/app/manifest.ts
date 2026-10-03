import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pablo Henrick Costa Silva — notcostaip",
    short_name: "notcostaip",
    description: "Biografia, produtos e projetos de Pablo Henrick Costa Silva.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
