
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import TopicPage from "./pages/TopicPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GenAI from "./pages/GenAI";
import LLM from "./pages/LLM";
import AllPapers from "./pages/AllPapers";
import AllResources from "./pages/AllResources";
import DeepLearning from "./pages/DeepLearning";
import MachineLearning from "./pages/MachineLearning";

// Import framer-motion
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/topic/:slug" element={<TopicPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Dedicated pages for specific technologies */}
              <Route path="/topic/genai" element={<GenAI />} />
              <Route path="/topic/llms" element={<LLM />} />
              <Route path="/topic/deep-learning" element={<DeepLearning />} />
              <Route path="/topic/machine-learning" element={<MachineLearning />} />
              {/* All Papers and Resources pages */}
              <Route path="/papers" element={<AllPapers />} />
              <Route path="/resources" element={<AllResources />} />
              {/* Routes for Research Papers, Learning Resources, Video Tutorials */}
              <Route path="/topic/research-papers" element={<TopicPage />} />
              <Route path="/topic/learning-resources" element={<TopicPage />} />
              <Route path="/topic/video-tutorials" element={<TopicPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
