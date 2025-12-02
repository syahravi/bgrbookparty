export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      site_content: {
        Row: {
          id: string
          key: string
          value: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          date: string
          time: string
          location: string
          status: 'upcoming' | 'ongoing' | 'completed'
          image_url: string | null
          max_participants: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          date: string
          time: string
          location: string
          status?: 'upcoming' | 'ongoing' | 'completed'
          image_url?: string | null
          max_participants?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          date?: string
          time?: string
          location?: string
          status?: 'upcoming' | 'ongoing' | 'completed'
          image_url?: string | null
          max_participants?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      books: {
        Row: {
          id: string
          title: string
          author: string
          genre: string
          cover_url: string | null
          rating: number
          description: string | null
          purchase_link: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          author: string
          genre: string
          cover_url?: string | null
          rating?: number
          description?: string | null
          purchase_link?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          author?: string
          genre?: string
          cover_url?: string | null
          rating?: number
          description?: string | null
          purchase_link?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      social_links: {
        Row: {
          id: string
          platform: string
          url: string
          icon: string
          order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          platform: string
          url: string
          icon: string
          order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          platform?: string
          url?: string
          icon?: string
          order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      members: {
        Row: {
          id: string
          name: string
          email: string
          whatsapp: string
          reason: string
          favorite_genre: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          whatsapp: string
          reason: string
          favorite_genre: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          whatsapp?: string
          reason?: string
          favorite_genre?: string
          created_at?: string
        }
      }
      admins: {
        Row: {
          id: string
          username: string
          password_hash: string
          created_at: string
        }
        Insert: {
          id?: string
          username: string
          password_hash: string
          created_at?: string
        }
        Update: {
          id?: string
          username?: string
          password_hash?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      event_status: 'upcoming' | 'ongoing' | 'completed'
    }
  }
}
