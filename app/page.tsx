import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeContent from '@/components/home/HomeContent';
import { getAllHomePageData } from '@/lib/baserow';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch data from Baserow
  const { stats, events, testimonials } = await getAllHomePageData();

  return (
    <div className="min-h-screen">
      <Header />
      <HomeContent
        stats={stats}
        upcomingEvents={events}
        testimonials={testimonials}
      />
      <Footer />
    </div>
  );
}
