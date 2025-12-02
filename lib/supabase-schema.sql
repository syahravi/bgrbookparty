-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create event_status enum
CREATE TYPE event_status AS ENUM ('upcoming', 'ongoing', 'completed');

-- Site Content Table
CREATE TABLE IF NOT EXISTS site_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key VARCHAR(255) UNIQUE NOT NULL,
    value JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(50) NOT NULL,
    location VARCHAR(255) NOT NULL,
    status event_status DEFAULT 'upcoming',
    image_url TEXT,
    max_participants INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Books Table
CREATE TABLE IF NOT EXISTS books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    cover_url TEXT,
    rating DECIMAL(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    description TEXT,
    purchase_link TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social Links Table
CREATE TABLE IF NOT EXISTS social_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    platform VARCHAR(100) NOT NULL,
    url TEXT NOT NULL,
    icon VARCHAR(100) NOT NULL,
    "order" INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Members Table
CREATE TABLE IF NOT EXISTS members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    whatsapp VARCHAR(50) NOT NULL,
    reason TEXT NOT NULL,
    favorite_genre VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admins Table
CREATE TABLE IF NOT EXISTS admins (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_books_genre ON books(genre);
CREATE INDEX idx_social_links_order ON social_links("order");
CREATE INDEX idx_members_created_at ON members(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON site_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_social_links_updated_at BEFORE UPDATE ON social_links FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default site content
INSERT INTO site_content (key, value) VALUES
('hero', '{"tagline": "Bergabung dengan Komunitas Pecinta Buku di Bogor", "description": "Tempat berkumpul, berdiskusi, dan berbagi kecintaan pada buku. Mari ciptakan ruang membaca yang hangat bersama!", "image": "/images/hero.jpg"}'),
('about', '{"history": "Bogor Book Party dimulai pada tahun 2023...", "vision": "Menjadi komunitas buku terbesar di Bogor", "mission": "Menumbuhkan budaya literasi dan kecintaan membaca"}'),
('stats', '{"members": 150, "events": 24, "books_reviewed": 300}')
ON CONFLICT (key) DO NOTHING;

-- Insert sample social links
INSERT INTO social_links (platform, url, icon, "order") VALUES
('Instagram', 'https://instagram.com/bogorbookparty', 'Instagram', 1),
('WhatsApp', 'https://wa.me/628123456789', 'MessageCircle', 2),
('TikTok', 'https://tiktok.com/@bogorbookparty', 'Music', 3),
('Goodreads', 'https://goodreads.com/bogorbookparty', 'Book', 4)
ON CONFLICT DO NOTHING;

-- Insert default admin (password: admin123, hashed with bcrypt)
-- Note: You should change this password in production
INSERT INTO admins (username, password_hash) VALUES
('admin', '$2a$10$rKXZv5qhPqY8VvG5xKxbNeLQ4xqX.JZQZvJqXGxBQxQxJqX5qhPqY')
ON CONFLICT (username) DO NOTHING;
