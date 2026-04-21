import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import { ProductsList, ProductDetail } from "./pages/Products.tsx";
import { ServicesList, ServiceDetail } from "./pages/Services.tsx";
import Certificates from "./pages/Certificates.tsx";
import Media from "./pages/Media.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ScrollToTop from "./components/site/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
