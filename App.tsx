/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseAnion } from './components/WhyChooseAnion';
import { ProductCatalog } from './components/ProductCatalog';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { InstagramShowcase } from './components/InstagramShowcase';
import { DistributorSection } from './components/DistributorSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { OrderDrawer } from './components/OrderDrawer';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';
import { CartItem, Product, ProductVariant } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [sizeGuideTab, setSizeGuideTab] = useState<'pads' | 'panties' | 'diapers'>('panties');

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, variant: ProductVariant) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant.id === variant.id
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }

      return [...prev, { product, selectedVariant: variant, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, variantId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedVariant.id === variantId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, variantId: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedVariant.id === variantId)
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenSizeGuide = (type: 'pads' | 'panties' | 'diapers') => {
    setSizeGuideTab(type);
    setSizeGuideOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#2C1810] font-sans selection:bg-[#F0EAE4] selection:text-[#7B3A52]">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenDistributor={() => scrollToSection('distributor')}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('collection')}
          onBecomeDistributor={() => scrollToSection('distributor')}
        />

        {/* About Brand & Story Section */}
        <AboutSection />

        {/* Why Choose Anion Technology Section */}
        <WhyChooseAnion />

        {/* Product Catalog & Variant Pricing Showcase */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={handleOpenSizeGuide}
        />

        {/* Benefits Comparison Table (Ordinary vs Niram) */}
        <ComparisonTable />

        {/* Testimonials Slider */}
        <Testimonials />

        {/* Instagram Lifestyle & Community Showcase */}
        <InstagramShowcase />

        {/* B2B Distributor & Wholesale Section */}
        <DistributorSection />

        {/* Modern FAQ Section */}
        <FAQSection />

        {/* Contact & Physical Center Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDistributor={() => scrollToSection('distributor')} />

      {/* Shopping Cart & Direct WhatsApp/Online Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Size & Fit Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        initialTab={sizeGuideTab}
      />

      {/* Modern Floating Anion AI Concierge */}
      <AiAssistant />
    </div>
  );
}
