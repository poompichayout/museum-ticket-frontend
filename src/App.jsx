import { QueryClient, QueryClientProvider } from "react-query";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import axios from "axios";
import RouteProvider from "./utils/Routes";

const queryClient = new QueryClient();

const { theme } = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: "Inter",
    },
    fontWeights: {
      medium: 500,
      bold: 700,
    },
  },
});

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.museum.oasurastudio.live/api/v1"
    : "http://localhost:8080/api/v1";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={theme}>
        {/* routing */}
        <RouteProvider />
      </NextUIProvider>
    </QueryClientProvider>
  );
}
