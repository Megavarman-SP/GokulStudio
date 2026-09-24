import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { FeaturedStory } from './components/FeaturedStory';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { EnquiryForm } from './components/EnquiryForm';
import { ContactSection } from './components/ContactSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handleOpenEnquiry = (serviceOrReason?: string) => {
    if (serviceOrReason) {
      setSelectedService(serviceOrReason);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onOpenEnquiry={handleOpenEnquiry} 
          onViewWork={handleViewWork} 
        />

        {/* 2. Trust & Introduction Section */}
        <TrustStats />

        {/* 3. Services Grid */}
        <Services onSelectServiceForEnquiry={handleSelectService} />

        {/* 4. Featured Portfolio Gallery with Lightbox */}
        <Portfolio />

        {/* 5. Editorial Featured Story */}
        <FeaturedStory onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Sample Packages & Pricing Tiers */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Instagram Social Showcase Feed */}
        <InstagramFeed />

        {/* 9. High Conversion Enquiry Form */}
        <EnquiryForm 
          initialService={selectedService}
          initialPackage={selectedPackage}
        />

        {/* 10. Studio Hub & FAQs */}
        <ContactSection />
      </main>

      {/* Floating Interactive WhatsApp CTA */}
      <WhatsAppFloat />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
