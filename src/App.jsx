import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // available: clean, navbar, sidebar
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {navItems.map((item) => (
              <Route key={item.to} path={item.to} element={item.page} />
            ))}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;