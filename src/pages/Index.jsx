import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

const Index = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-red-100 to-white py-16">
        <Hero />
      </div>
      <About />
    </Layout>
  );
};

export default Index;
