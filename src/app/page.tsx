'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryNav from '@/components/CategoryNav';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import { useProducts } from '@/context/ProductContext';
import { getProductTitle } from '@/utils/getProductText';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const currentLang = 'en';
  
  // Get only active products from context
  const { getActiveProducts } = useProducts();
  const activeProducts = getActiveProducts();

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    let filtered = activeProducts;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Filter by search query (title)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product => {
        const productTitle = getProductTitle(product, currentLang);
        return productTitle.toLowerCase().includes(query);
      });
    }

    return filtered;
  }, [activeCategory, searchQuery, activeProducts, currentLang]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#eeeeee' }}>
      {/* Header with Logo and Language Selector */}
      <Header />
      
      {/* Banner Section */}
      <div 
        style={{ 
          width: '100%',
          backgroundColor: '#eeeeee',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            paddingLeft: '15px',
            paddingRight: '15px'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <Image
              src="/Al-Qadir-banner.jpg"
              alt="Al-Qadir Banner"
              width={1300}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
              }}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
      
      {/* Category Navigation with Filter */}
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      
      {/* Main Content - Product Grid */}
      <main className="flex-1">
        <ProductGrid products={filteredProducts} />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Action Button */}
      <WhatsAppFab />
    </div>
  );
}
