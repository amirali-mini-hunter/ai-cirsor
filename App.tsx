import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import SpecialMenu from './components/SpecialMenu';
import ContactSection from './components/ContactSection';
import type { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: "لاته آرت",
    description: "ترکیب هنر و قهوه، اسپرسو خالص با شیر بخار دیده",
    price: "۹۵,۰۰۰ تومان",
    rating: 5,
    tag: { text: "جدید", bgColor: "bg-blue-500" },
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67d5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "کاپوچینو",
    description: "ترکیب فوق‌العاده اسپرسو و شیر بخاردار شده",
    price: "۸۵,۰۰۰ تومان",
    rating: 5,
    tag: { text: "تخفیف ویژه", bgColor: "bg-green-600" },
    imageUrl: "https://images.unsplash.com/photo-1517701550927-2c4a15a0a9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "اسپرسو سینگل",
    description: "طعم خالص و تند قهوه با کرمای طلایی",
    price: "۶۵,۰۰۰ تومان",
    rating: 4,
    tag: { text: "پرفروش", bgColor: "bg-red-500" },
    imageUrl: "https://images.unsplash.com/photo-1557896434-399333c7f998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: 4,
    name: "آمریکانو",
    description: "قهوه‌ای ملایم برای لحظات آرام شما",
    price: "۷۰,۰۰۰ تومان",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 5,
    name: "قهوه ترک اصل",
    description: "طعم اصیل و سنتی با عطر بی‌نظیر",
    price: "۹۰,۰۰۰ تومان",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1561589131-33a75f462a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 6,
    name: "موکا شکلاتی",
    description: "ترکیب دلنشین قهوه و شکلات بلژیکی",
    price: "۹۵,۰۰۰ تومان",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1610219417834-33d395a1a1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black/50">
      <Header cafeName="کافه فرنود" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SpecialMenu />
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;