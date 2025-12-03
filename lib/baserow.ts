// Baserow API Service
// Documentation: https://baserow.io/docs/apis/rest-api

const BASEROW_API_URL = process.env.NEXT_PUBLIC_BASEROW_API_URL || 'https://api.baserow.io';
const BASEROW_API_TOKEN = process.env.BASEROW_API_TOKEN;
const BASEROW_STATS_TABLE_ID = process.env.NEXT_PUBLIC_BASEROW_STATS_TABLE_ID;
const BASEROW_EVENTS_TABLE_ID = process.env.NEXT_PUBLIC_BASEROW_EVENTS_TABLE_ID;
const BASEROW_TESTIMONIALS_TABLE_ID = process.env.NEXT_PUBLIC_BASEROW_TESTIMONIALS_TABLE_ID;

interface BaserowResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Generic fetch function for Baserow API
async function fetchBaserowTable<T>(tableId: string | undefined): Promise<T[]> {
  if (!tableId) {
    console.error('Baserow table ID is not configured');
    return [];
  }

  if (!BASEROW_API_TOKEN) {
    console.error('Baserow API token is not configured');
    return [];
  }

  try {
    const response = await fetch(
      `${BASEROW_API_URL}/api/database/rows/table/${tableId}/?user_field_names=true`,
      {
        headers: {
          Authorization: `Token ${BASEROW_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        // Revalidate every 60 seconds for dynamic data
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Baserow API error: ${response.status} ${response.statusText}`);
    }

    const data: BaserowResponse<T> = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching from Baserow:', error);
    return [];
  }
}

// Fetch Stats
export async function getStats() {
  const stats = await fetchBaserowTable<{
    id: number;
    icon: string;
    label: string;
    value: string;
    order: number;
  }>(BASEROW_STATS_TABLE_ID);

  // Sort by order field
  return stats.sort((a, b) => a.order - b.order);
}

// Fetch Upcoming Events
export async function getUpcomingEvents() {
  const events = await fetchBaserowTable<{
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    status: 'upcoming' | 'ongoing' | 'completed';
    order: number;
  }>(BASEROW_EVENTS_TABLE_ID);

  // Filter only upcoming events and sort by order
  return events
    .filter((event) => event.status === 'upcoming')
    .sort((a, b) => a.order - b.order);
}

// Fetch Testimonials
export async function getTestimonials() {
  const testimonials = await fetchBaserowTable<{
    id: number;
    name: string;
    text: string;
    role: string;
    rating: number;
    is_active: boolean;
    order: number;
  }>(BASEROW_TESTIMONIALS_TABLE_ID);

  // Filter only active testimonials and sort by order
  return testimonials
    .filter((testimonial) => testimonial.is_active)
    .sort((a, b) => a.order - b.order);
}

// Fetch all data at once (useful for homepage)
export async function getAllHomePageData() {
  const [stats, events, testimonials] = await Promise.all([
    getStats(),
    getUpcomingEvents(),
    getTestimonials(),
  ]);

  return {
    stats,
    events,
    testimonials,
  };
}
