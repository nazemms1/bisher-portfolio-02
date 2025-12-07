import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        colors: {
          forestDark: [
            "#002623",
            "#002623",
            "#002623",
            "#002623",
            "#002623",
            "#002623",
            "#002623",
            "#002623",
            "#002623",
            "#002623",
          ],
          forestMid: [
            "#054239",
            "#054239",
            "#054239",
            "#054239",
            "#054239",
            "#054239",
            "#054239",
            "#054239",
            "#054239",
            "#054239",
          ],
          forestLight: [
            "#428177",
            "#428177",
            "#428177",
            "#428177",
            "#428177",
            "#428177",
            "#428177",
            "#428177",
            "#428177",
            "#428177",
          ],

          wheatLight: [
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
            "#edebe0",
          ],
          wheatMid: [
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
            "#b9a779",
          ],
          wheatDark: [
            "#988561",
            "#988561",
            "#988561",
            "#988561",
            "#988561",
            "#988561",
            "#988561",
            "#988561",
            "#988561",
            "#988561",
          ],

          umberDark: [
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
            "#260f14",
          ],
          umberMid: [
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
            "#4a151e",
          ],
          umberStrong: [
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
            "#6b1f2a",
          ],

          neutralDark: [
            "#161616",
            "#161616",
            "#161616",
            "#161616",
            "#161616",
            "#161616",
            "#161616",
            "#161616",
            "#161616",
            "#161616",
          ],
          neutralMid: [
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
            "#3d3a3b",
          ],
          neutralLight: [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
          ],
        },
        primaryColor: "forestLight",
        fontFamily: "'Myriad Pro', 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        headings: {
          fontFamily: "'Myriad Pro', 'Nunito Sans', sans-serif",
          fontWeight: "700",
        },
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
