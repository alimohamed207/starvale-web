/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AIDetection from './components/AIDetection';
import Sensors from './components/Sensors';
import Impact from './components/Impact';
import Vision from './components/Vision';
import AppPreview from './components/AppPreview';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-beige font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Starvale Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#features" className="hover:text-primary transition-colors">المميزات</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">إزاي بيشتغل</a>
            <a href="#impact" className="hover:text-primary transition-colors">التأثير</a>
          </div>
          <button className="px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            حمل التطبيق
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <AIDetection />
        <Sensors />
        <Impact />
        <Vision />
        <AppPreview />
        <Download />
      </main>

      <Footer />
    </div>
  );
}
