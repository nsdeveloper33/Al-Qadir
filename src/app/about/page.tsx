'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const features = [
    {
      icon: '✓',
      title: 'Genuine Products',
      description: 'Every product is verified and sourced directly from manufacturers'
    },
    {
      icon: '✓',
      title: 'Best Prices',
      description: 'Competitive pricing with exclusive deals and discounts'
    },
    {
      icon: '✓',
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    },
    {
      icon: '✓',
      title: 'Customer Support',
      description: '24/7 support to assist you with any queries'
    }
  ];

  const values = [
    {
      title: 'Trust',
      description: 'Building trust through transparency and authenticity'
    },
    {
      title: 'Quality',
      description: 'Committed to delivering only the best products'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our services and platform'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our top priority'
    }
  ];

  return (
    <>
      <Header />
      <main style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(180deg, #f5f7fa 0%, #eef2f6 50%, #f5f7fa 100%)',
        paddingTop: '90px'
      }}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '80px 20px 60px',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '48px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff8c42 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '20px'
              }}
            >
              About Al-Qadir
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: '20px',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}
            >
              Your trusted source for genuine products with great deals. We bring the value of outlet shopping to the convenience of e-commerce.
            </motion.p>
          </div>
        </motion.section>

        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '50px 40px',
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#222',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Our Story
            </h2>
            <div style={{ fontSize: '18px', lineHeight: '2', color: '#444' }}>
              <p style={{ marginBottom: '25px' }}>
                Finding the bargain of a lifetime while shopping online is quite commonplace with whole sellers and 3rd party retailers selling products without any assurance of source or authenticity.
              </p>
              <p>
                <strong style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Al-Qadir</strong> brings the value of outlet shopping to the convenience of e-commerce, while ensuring that every product you purchase is genuine and directly from sellers that manufacture them.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff8c42 100%)',
                borderRadius: '20px',
                padding: '40px',
                color: '#ffffff',
                boxShadow: '0px 10px 30px rgba(255, 107, 53, 0.3)'
              }}
            >
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px'
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                opacity: 0.95
              }}>
                To provide customers with authentic, high-quality products at the best prices, ensuring a seamless shopping experience that builds trust and satisfaction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)',
                borderRadius: '20px',
                padding: '40px',
                color: '#ffffff',
                boxShadow: '0px 10px 30px rgba(102, 126, 234, 0.3)'
              }}
            >
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px'
              }}>
                Our Vision
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                opacity: 0.95
              }}>
                To become the leading e-commerce platform in Pakistan, known for authenticity, quality, and exceptional customer service.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#222',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Why Choose Us
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.08)',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '15px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#222',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.7'
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#222',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Our Core Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.05) 100%)',
                  borderRadius: '16px',
                  padding: '35px',
                  border: '2px solid rgba(255, 107, 53, 0.2)',
                  textAlign: 'center'
                }}
              >
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '15px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.7'
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '80px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff8c42 100%)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'center',
              color: '#ffffff',
              boxShadow: '0px 15px 50px rgba(255, 107, 53, 0.4)'
            }}
          >
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              Ready to Shop?
            </h2>
            <p style={{
              fontSize: '18px',
              marginBottom: '30px',
              opacity: 0.95
            }}>
              Explore our wide range of genuine products at unbeatable prices
            </p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                background: '#ffffff',
                color: '#ff6b35',
                padding: '14px 35px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              Start Shopping
            </motion.a>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

