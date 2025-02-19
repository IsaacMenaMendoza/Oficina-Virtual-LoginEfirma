import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';
import { Footer } from './components/layout/Footer';
import { theme } from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh' }}>
          <Header />
          <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
            <Sidebar />
            <MainContent />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;