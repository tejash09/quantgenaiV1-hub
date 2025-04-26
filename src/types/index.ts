import { User as SupabaseUser } from '@supabase/supabase-js';

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  url: string;
  topic: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  topic: string;
}

export interface FeedbackData extends Record<string, unknown> {
  name: string;
  email: string;
  message: string;
}

export interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserWithProfile extends SupabaseUser {
  profile?: Profile;
}
