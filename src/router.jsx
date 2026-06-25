import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CelebrationsPage = lazy(() => import('./pages/CelebrationsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AvailabilityPage = lazy(() => import('./pages/AvailabilityPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ivory)]">
      <div className="flex flex-col items-center">
        {/* Monogram */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[var(--color-gold)]/20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-[var(--color-gold)]/40"
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          
          {/* SG Text */}
          <motion.span 
            className="font-script text-4xl text-[var(--color-gold)] tracking-widest relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            SG
          </motion.span>
        </div>

        {/* Text */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[var(--color-ink)]">
            Hotel Sangeeth Grand
          </span>
          <motion.div 
            className="h-[1px] bg-[var(--color-gold)] mt-4"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Page Transition Wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AppRouter() {
  const location = useLocation();
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/celebrations" element={<PageWrapper><CelebrationsPage /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
            <Route path="/availability" element={<PageWrapper><AvailabilityPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
