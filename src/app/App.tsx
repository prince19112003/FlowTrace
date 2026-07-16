import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { GlobalAppShell } from './layout/GlobalAppShell';
import { LoadingSpinner } from '@shared/components/ui/LoadingSpinner';

import { SplashPage } from '../pages/SplashPage';

// Lazy loaded routes for scalability
const LanguageSelectionPage = lazy(() => import('@pages/LanguageSelectionPage').then(m => ({ default: m.LanguageSelectionPage })));
const TopicSelectionPage = lazy(() => import('@pages/TopicSelectionPage').then(m => ({ default: m.TopicSelectionPage })));
const ProgramSelectionPage = lazy(() => import('@pages/ProgramSelectionPage').then(m => ({ default: m.ProgramSelectionPage })));
const VisualizerPage = lazy(() => import('@pages/VisualizerPage').then(m => ({ default: m.VisualizerPage })));
const SettingsPage = lazy(() => import('@pages/SettingsPage').then(m => ({ default: m.SettingsPage })));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

/**
 * RouteGuards placeholder
 * Future capability to protect routes based on auth or state
 */
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Redirect root to languages */}
        <Route path="/" element={<Navigate to="/languages" replace />} />

        {/* Protected layout routes */}
        <Route element={<GlobalAppShell />}>
          <Route path="/languages" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <LanguageSelectionPage />
              </Suspense>
            </ProtectedRoute>
          } />
          
          <Route path="/topics/:languageId" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <TopicSelectionPage />
              </Suspense>
            </ProtectedRoute>
          } />
          
          <Route path="/topics/:languageId/programs" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <ProgramSelectionPage />
              </Suspense>
            </ProtectedRoute>
          } />
          
          <Route path="/topics/:languageId/programs/:topicId" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <ProgramSelectionPage />
              </Suspense>
            </ProtectedRoute>
          } />
          
          <Route path="/visualizer/:languageId/:topicId/:programId" element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <VisualizerPage />
              </Suspense>
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SettingsPage />
            </Suspense>
          } />

          {/* 404 Catch-all */}
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashPage onComplete={() => setShowSplash(false)} />
      ) : (
        <AnimatedRoutes />
      )}
    </BrowserRouter>
  );
};
