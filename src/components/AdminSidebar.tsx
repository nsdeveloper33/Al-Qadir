'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { 
  BiSpa,
  BiChip,
  BiTime,
  BiPhone,
  BiDish,
  BiShoppingBag,
  BiBox,
  BiTimeFive,
  BiCog,
  BiPackage,
  BiCheckCircle,
  BiXCircle
} from 'react-icons/bi';

// Categories for dropdown (excluding 'all')
const categoryItems = [
  { id: 'cosmetics', icon: BiSpa },
  { id: 'electronics', icon: BiChip },
  { id: 'watches', icon: BiTime },
  { id: 'mobile', icon: BiPhone },
  { id: 'kitchen', icon: BiDish },
  { id: 'ladiesbag', icon: BiShoppingBag },
  { id: 'other', icon: BiBox },
];

// Order statuses for dropdown
const orderStatusItems = [
  { id: 'pending', icon: BiTimeFive },
  { id: 'processing', icon: BiCog },
  { id: 'shipped', icon: BiPackage },
  { id: 'delivered', icon: BiCheckCircle },
  { id: 'cancelled', icon: BiXCircle },
];

const menuItems = [
  {
    id: 'dashboard',
    href: '/admin',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'products',
    href: '/admin/products',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    id: 'profile',
    href: '/admin/profile',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

const categoryLabels: Record<string, string> = {
  'cosmetics': 'Cosmetics',
  'electronics': 'Electronics',
  'watches': 'Watches',
  'mobile': 'Mobile',
  'kitchen': 'Kitchen',
  'ladiesbag': 'Ladies Bag',
  'other': 'Other'
};

const statusLabels: Record<string, string> = {
  'pending': 'Pending',
  'processing': 'Processing',
  'shipped': 'Shipped',
  'delivered': 'Delivered',
  'cancelled': 'Cancelled'
};

function AdminSidebarContent({ isOpen, onClose, isMobile = false }: AdminSidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get active category and status from URL
  const activeCategory = searchParams.get('category');
  const activeStatus = searchParams.get('status');
  
  // Derive state from URL params
  const shouldCategoriesBeOpen = activeCategory && pathname === '/admin/products';
  const shouldOrdersBeOpen = activeStatus && pathname === '/admin/orders';
  
  const [categoriesOpen, setCategoriesOpen] = useState(shouldCategoriesBeOpen);
  const [ordersOpen, setOrdersOpen] = useState(shouldOrdersBeOpen);
  
  // Track previous values to detect changes
  const prevShouldCategoriesBeOpenRef = useRef(shouldCategoriesBeOpen);
  const prevShouldOrdersBeOpenRef = useRef(shouldOrdersBeOpen);
  
  // Sync state with URL params when they change
  // This is a valid use case - syncing UI state with URL params
  useEffect(() => {
    if (prevShouldCategoriesBeOpenRef.current !== shouldCategoriesBeOpen) {
      prevShouldCategoriesBeOpenRef.current = shouldCategoriesBeOpen;
      if (categoriesOpen !== shouldCategoriesBeOpen) {
        setCategoriesOpen(shouldCategoriesBeOpen);
      }
    }
    if (prevShouldOrdersBeOpenRef.current !== shouldOrdersBeOpen) {
      prevShouldOrdersBeOpenRef.current = shouldOrdersBeOpen;
      if (ordersOpen !== shouldOrdersBeOpen) {
        setOrdersOpen(shouldOrdersBeOpen);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCategoriesBeOpen, shouldOrdersBeOpen]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: '260px',
          height: 'calc(100vh - 90px)',
          background: 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)',
          position: 'fixed',
          top: '90px',
          bottom: 0,
          left: isOpen ? 0 : '-260px',
          zIndex: 50,
          transition: 'left 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '2px 0 20px rgba(0,0,0,0.15)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Admin Title */}
        <div
          style={{
            padding: '24px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            background: 'rgba(52, 152, 219, 0.1)',
          }}
        >
          <h2 style={{ 
            color: '#fff', 
            fontSize: '20px', 
            fontWeight: '700',
            letterSpacing: '0.5px',
            background: 'linear-gradient(135deg, #ecf0f1 0%, #3498db 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Admin Panel
          </h2>
          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={onClose}
              style={{
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Menu Items - Scrollable */}
        <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingTop: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item) => {
              // Products should not be active if a category is selected
              const isActive = item.id === 'products' 
                ? pathname === item.href && !activeCategory
                : pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={isMobile ? onClose : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 20px',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      backgroundColor: isActive 
                        ? 'linear-gradient(90deg, rgba(52, 152, 219, 0.2) 0%, rgba(52, 152, 219, 0.1) 100%)'
                        : 'transparent',
                      borderLeft: isActive ? '4px solid #3498db' : '4px solid transparent',
                      borderRadius: isActive ? '0 12px 12px 0' : '0',
                      transition: 'all 0.3s ease',
                      marginRight: '8px',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <span style={{ 
                      opacity: isActive ? 1 : 0.7,
                      color: isActive ? '#3498db' : 'inherit',
                      transition: 'all 0.3s ease'
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: isActive ? '600' : '400',
                      letterSpacing: '0.3px'
                    }}>
                      {item.id === 'dashboard' ? 'Dashboard' : item.id === 'products' ? 'Products' : 'Profile'}
                    </span>
                  </Link>
                </li>
              );
            })}

            {/* Categories Dropdown */}
            <li>
              {(() => {
                const hasCategoryActive = activeCategory && pathname === '/admin/products';
                return (
                  <button
                    onClick={() => setCategoriesOpen(!categoriesOpen)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '16px 20px',
                      color: hasCategoryActive ? '#fff' : 'rgba(255,255,255,0.7)',
                      backgroundColor: hasCategoryActive 
                        ? 'linear-gradient(90deg, rgba(52, 152, 219, 0.2) 0%, rgba(52, 152, 219, 0.1) 100%)'
                        : 'transparent',
                      border: 'none',
                      borderLeft: hasCategoryActive ? '4px solid #3498db' : '4px solid transparent',
                      borderRadius: hasCategoryActive ? '0 12px 0 0' : '0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      marginRight: '8px',
                    }}
                    onMouseEnter={(e) => {
                      if (!hasCategoryActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!hasCategoryActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: hasCategoryActive ? 1 : 0.7 }}>
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                      <span style={{ fontSize: '14px', fontWeight: hasCategoryActive ? '500' : '400' }}>
                        Categories
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        transform: categoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                );
              })()}

              {/* Dropdown Items */}
              <div
                style={{
                  maxHeight: categoriesOpen ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  backgroundColor: 'rgba(0,0,0,0.15)',
                }}
              >
                {categoryItems.map((cat) => {
                  const IconComponent = cat.icon;
                  const isActiveCategory = activeCategory === cat.id && pathname === '/admin/products';
                  return (
                    <Link
                      key={cat.id}
                      href={`/admin/products?category=${cat.id}`}
                      onClick={isMobile ? onClose : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 20px 12px 52px',
                        color: isActiveCategory ? '#3498db' : 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: isActiveCategory ? '600' : '400',
                        transition: 'all 0.3s ease',
                        backgroundColor: isActiveCategory ? 'rgba(52, 152, 219, 0.15)' : 'transparent',
                        borderLeft: isActiveCategory ? '4px solid #3498db' : '4px solid transparent',
                        borderRadius: isActiveCategory ? '0 8px 8px 0' : '0',
                        marginRight: '8px',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActiveCategory) {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActiveCategory) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                        }
                      }}
                    >
                      <IconComponent size={16} style={{ color: isActiveCategory ? '#3498db' : 'inherit' }} />
                      <span>{categoryLabels[cat.id] || cat.id}</span>
                    </Link>
                  );
                })}
              </div>
            </li>

            {/* Orders Dropdown */}
            <li>
              {(() => {
                const isOrdersPage = pathname === '/admin/orders';
                return (
                  <button
                    onClick={() => setOrdersOpen(!ordersOpen)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '16px 20px',
                      color: isOrdersPage ? '#fff' : 'rgba(255,255,255,0.7)',
                      backgroundColor: isOrdersPage 
                        ? 'linear-gradient(90deg, rgba(52, 152, 219, 0.2) 0%, rgba(52, 152, 219, 0.1) 100%)'
                        : 'transparent',
                      border: 'none',
                      borderLeft: isOrdersPage ? '4px solid #3498db' : '4px solid transparent',
                      borderRadius: isOrdersPage ? '0 12px 0 0' : '0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      marginRight: '8px',
                    }}
                    onMouseEnter={(e) => {
                      if (!isOrdersPage) {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isOrdersPage) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: isOrdersPage ? 1 : 0.7 }}>
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      <span style={{ fontSize: '14px', fontWeight: isOrdersPage ? '500' : '400' }}>
                        Orders
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        transform: ordersOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                );
              })()}

              {/* Orders Dropdown Items */}
              <div
                style={{
                  maxHeight: ordersOpen ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  backgroundColor: 'rgba(0,0,0,0.15)',
                }}
              >
                {/* All Orders */}
                <Link
                  href="/admin/orders"
                  onClick={isMobile ? onClose : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 20px 12px 52px',
                    color: pathname === '/admin/orders' && !activeStatus ? '#3498db' : 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: pathname === '/admin/orders' && !activeStatus ? '600' : '400',
                    transition: 'all 0.3s ease',
                    backgroundColor: pathname === '/admin/orders' && !activeStatus ? 'rgba(52, 152, 219, 0.15)' : 'transparent',
                    borderLeft: pathname === '/admin/orders' && !activeStatus ? '4px solid #3498db' : '4px solid transparent',
                    borderRadius: pathname === '/admin/orders' && !activeStatus ? '0 8px 8px 0' : '0',
                    marginRight: '8px',
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== '/admin/orders' || activeStatus) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== '/admin/orders' || activeStatus) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    }
                  }}
                >
                  <BiBox size={16} style={{ color: pathname === '/admin/orders' && !activeStatus ? '#3498db' : 'inherit' }} />
                  <span>All</span>
                </Link>
                
                {orderStatusItems.map((status) => {
                  const IconComponent = status.icon;
                  const isActiveStatus = activeStatus === status.id && pathname === '/admin/orders';
                  return (
                    <Link
                      key={status.id}
                      href={`/admin/orders?status=${status.id}`}
                      onClick={isMobile ? onClose : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 20px 12px 52px',
                        color: isActiveStatus ? '#3498db' : 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: isActiveStatus ? '600' : '400',
                        transition: 'all 0.3s ease',
                        backgroundColor: isActiveStatus ? 'rgba(52, 152, 219, 0.15)' : 'transparent',
                        borderLeft: isActiveStatus ? '4px solid #3498db' : '4px solid transparent',
                        borderRadius: isActiveStatus ? '0 8px 8px 0' : '0',
                        marginRight: '8px',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActiveStatus) {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActiveStatus) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                        }
                      }}
                    >
                      <IconComponent size={16} style={{ color: isActiveStatus ? '#3498db' : 'inherit' }} />
                      <span>{statusLabels[status.id] || status.id}</span>
                    </Link>
                  );
                })}
              </div>
            </li>

            {/* Unsubmitted Orders */}
            <li>
              <Link
                href="/admin/unsubmitted"
                onClick={isMobile ? onClose : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  color: pathname === '/admin/unsubmitted' ? '#fff' : 'rgba(255,255,255,0.7)',
                  backgroundColor: pathname === '/admin/unsubmitted' 
                    ? 'linear-gradient(90deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.05) 100%)'
                    : 'transparent',
                  border: 'none',
                  borderLeft: pathname === '/admin/unsubmitted' ? '4px solid #FF9800' : '4px solid transparent',
                  borderRadius: pathname === '/admin/unsubmitted' ? '0 12px 12px 0' : '0',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: pathname === '/admin/unsubmitted' ? '600' : '400',
                  transition: 'all 0.3s ease',
                  marginRight: '8px',
                }}
                onMouseEnter={(e) => {
                  if (pathname !== '/admin/unsubmitted') {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/admin/unsubmitted') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: pathname === '/admin/unsubmitted' ? 1 : 0.7 }}>
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span>Unsubmitted Orders</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Back to Store - Fixed at Bottom */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: '#2c3e50',
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '400',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.2s ease',
            }}
            className="hover:bg-white/10 hover:border-white/30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Store
          </Link>
        </div>
      </aside>
    </>
  );
}

export default function AdminSidebar(props: AdminSidebarProps) {
  return (
    <Suspense fallback={null}>
      <AdminSidebarContent {...props} />
    </Suspense>
  );
}
