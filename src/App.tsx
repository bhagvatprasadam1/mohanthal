import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Lazy-loaded routes for optimal bundle code-splitting and performance
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Mohanthal = lazy(() => import('./pages/Mohanthal').then((m) => ({ default: m.Mohanthal })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Ingredients = lazy(() => import('./pages/Ingredients').then((m) => ({ default: m.Ingredients })));
const Process = lazy(() => import('./pages/Process').then((m) => ({ default: m.Process })));
const Gifting = lazy(() => import('./pages/Gifting').then((m) => ({ default: m.Gifting })));
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })));
const FAQ = lazy(() => import('./pages/FAQ').then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy').then((m) => ({ default: m.ShippingPolicy })));
const ReturnPolicy = lazy(() => import('./pages/ReturnPolicy').then((m) => ({ default: m.ReturnPolicy })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center text-primary font-serif">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mohanthal" element={<Mohanthal />} />
            <Route path="about" element={<About />} />
            <Route path="ingredients" element={<Ingredients />} />
            <Route path="process" element={<Process />} />
            <Route path="gifting" element={<Gifting />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="return-policy" element={<ReturnPolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
