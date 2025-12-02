'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LogOut,
  Users,
  Calendar,
  BookOpen,
  Link,
  Settings,
  Edit,
  Trash2,
  Plus,
  Save,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { isAuthenticated, clearAdminSession } from '@/lib/auth';
import toast from 'react-hot-toast';

type Tab = 'hero' | 'about' | 'events' | 'books' | 'links' | 'members';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    clearAdminSession();
    toast.success('Logout berhasil');
    router.push('/admin/login');
  };

  const tabs = [
    { id: 'hero' as Tab, label: 'Hero Section', icon: Settings },
    { id: 'about' as Tab, label: 'About', icon: BookOpen },
    { id: 'events' as Tab, label: 'Events', icon: Calendar },
    { id: 'books' as Tab, label: 'Books', icon: BookOpen },
    { id: 'links' as Tab, label: 'Social Links', icon: Link },
    { id: 'members' as Tab, label: 'Members', icon: Users },
  ];

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold text-accent">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Bogor Book Party</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Edit Mode:</span>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    editMode ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      editMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary text-accent font-semibold shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {activeTab === 'hero' && <HeroSection editMode={editMode} />}
              {activeTab === 'about' && <AboutSection editMode={editMode} />}
              {activeTab === 'events' && <EventsSection editMode={editMode} />}
              {activeTab === 'books' && <BooksSection editMode={editMode} />}
              {activeTab === 'links' && <LinksSection editMode={editMode} />}
              {activeTab === 'members' && <MembersSection />}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ editMode }: { editMode: boolean }) {
  const [tagline, setTagline] = useState('Bergabung dengan Komunitas Pecinta Buku di Bogor');
  const [description, setDescription] = useState(
    'Tempat berkumpul, berdiskusi, dan berbagi kecintaan pada buku. Mari ciptakan ruang membaca yang hangat bersama!'
  );

  const handleSave = () => {
    toast.success('Hero section berhasil diupdate!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-6">Edit Hero Section</h2>

      <div className="space-y-6">
        <Input
          label="Tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          disabled={!editMode}
        />

        <Textarea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={!editMode}
          rows={4}
        />

        {editMode && (
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        )}
      </div>
    </div>
  );
}

function AboutSection({ editMode }: { editMode: boolean }) {
  const [vision, setVision] = useState(
    'Menjadi komunitas buku terbesar dan paling aktif di Bogor'
  );
  const [mission, setMission] = useState(
    'Menyelenggarakan event literasi berkualitas dan membangun komunitas yang inklusif'
  );

  const handleSave = () => {
    toast.success('About section berhasil diupdate!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-6">Edit About Section</h2>

      <div className="space-y-6">
        <Textarea
          label="Vision"
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          disabled={!editMode}
          rows={3}
        />

        <Textarea
          label="Mission"
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          disabled={!editMode}
          rows={4}
        />

        {editMode && (
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        )}
      </div>
    </div>
  );
}

function EventsSection({ editMode }: { editMode: boolean }) {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Book Discussion: Sapiens',
      date: '2025-12-15',
      location: 'Kopi Tuku Bogor',
    },
    {
      id: 2,
      title: 'Poetry Reading Night',
      date: '2025-12-22',
      location: 'Perpustakaan Bogor',
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus event ini?')) {
      setEvents(events.filter((e) => e.id !== id));
      toast.success('Event berhasil dihapus');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-accent">Manage Events</h2>
        {editMode && (
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Event
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg"
          >
            <div>
              <h3 className="font-semibold text-accent">{event.title}</h3>
              <p className="text-sm text-gray-600">
                {event.date} • {event.location}
              </p>
            </div>

            {editMode && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(event.id)}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BooksSection({ editMode }: { editMode: boolean }) {
  const [books, setBooks] = useState([
    { id: 1, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help' },
  ]);

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus buku ini?')) {
      setBooks(books.filter((b) => b.id !== id));
      toast.success('Buku berhasil dihapus');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-accent">Manage Books</h2>
        {editMode && (
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Book
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg"
          >
            <div>
              <h3 className="font-semibold text-accent">{book.title}</h3>
              <p className="text-sm text-gray-600">
                {book.author} • {book.genre}
              </p>
            </div>

            {editMode && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(book.id)}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LinksSection({ editMode }: { editMode: boolean }) {
  const [links, setLinks] = useState([
    { id: 1, platform: 'Instagram', url: 'https://instagram.com/bogorbookparty' },
    { id: 2, platform: 'WhatsApp', url: 'https://wa.me/628123456789' },
  ]);

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus link ini?')) {
      setLinks(links.filter((l) => l.id !== id));
      toast.success('Link berhasil dihapus');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-accent">Manage Social Links</h2>
        {editMode && (
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Link
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg"
          >
            <div>
              <h3 className="font-semibold text-accent">{link.platform}</h3>
              <p className="text-sm text-gray-600 truncate">{link.url}</p>
            </div>

            {editMode && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(link.id)}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersSection() {
  const members = [
    {
      id: 1,
      name: 'Sarah Wijaya',
      email: 'sarah@email.com',
      whatsapp: '628123456789',
      genre: 'Fiction',
      createdAt: '2025-11-01',
    },
    {
      id: 2,
      name: 'Budi Santoso',
      email: 'budi@email.com',
      whatsapp: '628987654321',
      genre: 'Non-Fiction',
      createdAt: '2025-11-15',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-6">Member List</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-accent">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-accent">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-accent">
                WhatsApp
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-accent">
                Genre
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-accent">
                Joined
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">{member.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{member.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{member.whatsapp}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{member.genre}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{member.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
