import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { NextUIProvider, createTheme } from "@nextui-org/react";

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

axios.defaults.baseURL = 'http://localhost:8080/api/v1';
const token = localStorage.getItem('tokens');
if (token) {
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		localStorage.removeItem('tokens');
		localStorage.removeItem('authenticate');
		delete axios.defaults.headers.common['Authorization'];
    window.location.href = '/signin';
	} else {
		localStorage.setItem('authenticate', true);
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}
}

export default function App() {
  const authenticate = JSON.parse(localStorage.getItem('authenticate')) === true;
	const token = localStorage.getItem('tokens');
  if (token) {
    var admin = jwtDecode(token).roles.some(e => e.code === "ADMIN");
  }
  const routing = useRoutes(routes(authenticate, admin));
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={theme}>{routing}</NextUIProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
