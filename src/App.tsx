import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { TeamPage } from './pages/TeamPage';
import { TeamMemberDetailPage } from './pages/TeamMemberDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { DiscountsPage } from './pages/DiscountsPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { GiftCardPage } from './pages/GiftCardPage';
import { services, teamMembers } from './data/siteData';

function AppContent() {
  const { currentPath } = useRouter();

  // Dynamic document title update based on current route
  useEffect(() => {
    let title = 'The Well Groomed Gentleman | Barbershop & Men’s Spa • Coral Gables';
    if (currentPath === '/about') {
      title = 'About Us | The Well Groomed Gentleman';
    } else if (currentPath === '/services') {
      title = 'Services & Grooming Menu | The Well Groomed Gentleman';
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const srv = services.find((s) => s.slug === slug);
      if (srv) {
        title = `${srv.name} — ${srv.price} | The Well Groomed Gentleman`;
      }
    } else if (currentPath === '/products') {
      title = 'Curated Products & Apothecary | The Well Groomed Gentleman';
    } else if (currentPath === '/team') {
      title = 'Master Barbers & Specialists | The Well Groomed Gentleman';
    } else if (currentPath.startsWith('/team/')) {
      const slug = currentPath.replace('/team/', '');
      const member = teamMembers.find((m) => m.slug === slug);
      if (member) {
        title = `${member.name} (${member.role}) | The Well Groomed Gentleman`;
      }
    } else if (currentPath === '/gallery') {
      title = 'Atmosphere & Photo Gallery | The Well Groomed Gentleman';
    } else if (currentPath === '/discounts') {
      title = 'Discounts & Community Promotions | The Well Groomed Gentleman';
    } else if (currentPath === '/contact') {
      title = 'Contact & Location (130 Miracle Mile) | The Well Groomed Gentleman';
    } else if (currentPath === '/book-appointment') {
      title = 'Book an Appointment | The Well Groomed Gentleman';
    } else if (currentPath === '/gift-card') {
      title = 'Gentlemen’s Gift Cards | The Well Groomed Gentleman';
    }
    document.title = title;
  }, [currentPath]);

  // Route Dispatcher
  const renderRoute = () => {
    // Exact paths
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/services') {
      return <ServicesPage />;
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServiceDetailPage slug={slug} />;
    }
    if (currentPath === '/products') {
      return <ProductsPage />;
    }
    if (currentPath === '/team') {
      return <TeamPage />;
    }
    if (currentPath.startsWith('/team/')) {
      const slug = currentPath.replace('/team/', '');
      return <TeamMemberDetailPage slug={slug} />;
    }
    if (currentPath === '/gallery') {
      return <GalleryPage />;
    }
    if (currentPath === '/discounts') {
      return <DiscountsPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/book-appointment') {
      return <BookAppointmentPage />;
    }
    if (currentPath === '/gift-card') {
      return <GiftCardPage />;
    }

    // Default fallback to HomePage if unknown
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121315] text-[#E8E6E1] selection:bg-[#C5A880] selection:text-[#121315] w-full max-w-full overflow-x-hidden">
      <Navigation />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
