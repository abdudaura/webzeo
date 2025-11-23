-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Helper to create types safely
DO $$ BEGIN
    create type user_role_type as enum ('admin', 'supervisor', 'agent', 'volunteer');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type role_status_type as enum ('pending', 'approved', 'rejected');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type report_status_type as enum ('pending', 'investigating', 'resolved', 'rejected');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type urgency_type as enum ('low', 'medium', 'high', 'critical');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type evidence_type as enum ('image', 'video', 'document');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type chat_role_type as enum ('user', 'assistant');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type language_type as enum ('en', 'ha');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type stakeholder_type as enum ('traditional', 'religious', 'government');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type resource_type as enum ('pdf', 'video', 'audio');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type access_level_type as enum ('public', 'staff');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type case_status_type as enum ('open', 'mediation', 'resolved', 'escalated');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type event_type_enum as enum ('town_hall', 'training', 'workshop', 'dialogue');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type task_status_type as enum ('pending', 'in_progress', 'completed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type task_priority_type as enum ('low', 'medium', 'high');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type publication_type_enum as enum ('research_paper', 'policy_brief', 'report');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type publication_status_enum as enum ('draft', 'review', 'published');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    create type legal_status_type as enum ('filed', 'ongoing', 'concluded');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;


-- 1. PROFILES
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.profiles enable row level security;
-- Add columns safely
alter table public.profiles add column if not exists full_name text;
alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists phone_number text;
alter table public.profiles add column if not exists state_of_origin text;


-- 2. USER_ROLES
create table if not exists public.user_roles (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  role user_role_type not null,
  status role_status_type default 'pending'::role_status_type not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.user_roles enable row level security;
alter table public.user_roles add column if not exists reason text;


-- 3. REPORTS
create table if not exists public.reports (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  category text not null,
  status report_status_type default 'pending'::report_status_type not null,
  state text not null,
  lga text not null
);
alter table public.reports enable row level security;
-- Add new columns
alter table public.reports add column if not exists subcategory text;
alter table public.reports add column if not exists urgency urgency_type default 'medium'::urgency_type not null;
alter table public.reports add column if not exists location_detail text;
alter table public.reports add column if not exists geo_lat float;
alter table public.reports add column if not exists geo_long float;
alter table public.reports add column if not exists contact_info text;
alter table public.reports add column if not exists user_id uuid references auth.users on delete set null;
alter table public.reports add column if not exists assigned_to uuid references auth.users on delete set null;


-- 4. REPORT_EVIDENCE
create table if not exists public.report_evidence (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references public.reports on delete cascade not null,
  url text not null,
  type evidence_type not null,
  uploaded_by uuid references auth.users on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.report_evidence enable row level security;


-- 5. AUDIT_LOGS
create table if not exists public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete set null,
  action text not null,
  details jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.audit_logs enable row level security;


-- 6. AI_CHATS
create table if not exists public.ai_chats (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete set null,
  session_id text not null,
  message text not null,
  role chat_role_type not null,
  language language_type default 'en'::language_type not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.ai_chats enable row level security;


-- 7. REPORT_FEEDBACK
create table if not exists public.report_feedback (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references public.reports on delete cascade not null,
  satisfaction_rating integer check (satisfaction_rating >= 1 and satisfaction_rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.report_feedback enable row level security;


-- 8. STAKEHOLDERS
create table if not exists public.stakeholders (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  title text,
  type stakeholder_type not null,
  state text not null,
  lga text not null,
  phone text,
  email text
);
alter table public.stakeholders enable row level security;


-- 9. BUDGETS
create table if not exists public.budgets (
  id uuid default uuid_generate_v4() primary key,
  project_name text not null,
  state text not null,
  lga text,
  allocated_amount decimal(12,2) not null,
  spent_amount decimal(12,2) default 0,
  fiscal_year integer not null
);
alter table public.budgets enable row level security;


-- 10. LIBRARY_RESOURCES
create table if not exists public.library_resources (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  type resource_type not null,
  url text not null,
  access_level access_level_type default 'public'::access_level_type not null,
  category text,
  uploaded_by uuid references auth.users on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.library_resources enable row level security;


-- 11. CASES
create table if not exists public.cases (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  status case_status_type default 'open'::case_status_type not null,
  lead_agent uuid references auth.users on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.cases enable row level security;


-- 12. CASE_REPORTS (Junction)
create table if not exists public.case_reports (
  case_id uuid references public.cases on delete cascade not null,
  report_id uuid references public.reports on delete cascade not null,
  primary key (case_id, report_id)
);
alter table public.case_reports enable row level security;


-- 13. MEDIATION_SESSIONS
create table if not exists public.mediation_sessions (
  id uuid default uuid_generate_v4() primary key,
  case_id uuid references public.cases on delete cascade not null,
  session_date timestamp with time zone not null,
  stakeholders_present text[],
  notes text,
  agreement_reached boolean default false,
  agreement_document_url text
);
alter table public.mediation_sessions enable row level security;


-- 14. EVENTS
create table if not exists public.events (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  event_type event_type_enum not null,
  event_date timestamp with time zone not null,
  location text not null,
  state text not null,
  lga text not null,
  capacity integer,
  organizer_id uuid references auth.users on delete set null
);
alter table public.events enable row level security;


-- 15. EVENT_REGISTRATIONS
create table if not exists public.event_registrations (
  id uuid default uuid_generate_v4() primary key,
  event_id uuid references public.events on delete cascade not null,
  user_id uuid references auth.users on delete set null,
  name text not null,
  email text,
  phone text,
  attended boolean default false
);
alter table public.event_registrations enable row level security;


-- 16. TASKS
create table if not exists public.tasks (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  assigned_to uuid references auth.users on delete set null,
  created_by uuid references auth.users on delete set null,
  due_date timestamp with time zone,
  status task_status_type default 'pending'::task_status_type not null,
  priority task_priority_type default 'medium'::task_priority_type not null
);
alter table public.tasks enable row level security;


-- 17. PUBLICATIONS
create table if not exists public.publications (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  authors text[],
  publication_type publication_type_enum not null,
  status publication_status_enum default 'draft'::publication_status_enum not null,
  publication_date timestamp with time zone,
  url text,
  citation_count integer default 0
);
alter table public.publications enable row level security;


-- 18. LEGAL_CASES
create table if not exists public.legal_cases (
  id uuid default uuid_generate_v4() primary key,
  case_number text not null,
  related_report_id uuid references public.reports on delete set null,
  court_name text not null,
  status legal_status_type default 'filed'::legal_status_type not null,
  next_hearing_date timestamp with time zone,
  evidence_chain jsonb
);
alter table public.legal_cases enable row level security;


-- 19. VOLUNTEER_APPLICATIONS
create table if not exists public.volunteer_applications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  state text not null,
  reason text not null,
  status role_status_type default 'pending'::role_status_type not null,
  reviewed_by uuid references auth.users on delete set null,
  review_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  reviewed_at timestamp with time zone
);
alter table public.volunteer_applications enable row level security;


-- 20. VOLUNTEER_ASSIGNMENTS
create table if not exists public.volunteer_assignments (
  id uuid default uuid_generate_v4() primary key,
  volunteer_id uuid references auth.users on delete cascade not null,
  state text not null,
  assigned_by uuid references auth.users on delete set null,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  deactivated_at timestamp with time zone
);
alter table public.volunteer_assignments enable row level security;


-- 21. REPORT_VOTES
create table if not exists public.report_votes (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references public.reports on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  vote_type text check (vote_type in ('up', 'down')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(report_id, user_id)
);
alter table public.report_votes enable row level security;


-- 22. FORUM_THREADS
create table if not exists public.forum_threads (
  id uuid default uuid_generate_v4() primary key,
  category text not null, -- announcement, success, news, tips, discussion
  title text not null,
  content text not null,
  author_id uuid references auth.users on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  pinned boolean default false,
  locked boolean default false
);
alter table public.forum_threads enable row level security;


-- 23. FORUM_COMMENTS
create table if not exists public.forum_comments (
  id uuid default uuid_generate_v4() primary key,
  thread_id uuid references public.forum_threads on delete cascade not null,
  parent_id uuid references public.forum_comments on delete cascade, -- for threading
  content text not null,
  author_id uuid references auth.users on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  hidden boolean default false
);
alter table public.forum_comments enable row level security;


-- 24. FORUM_REACTIONS
create table if not exists public.forum_reactions (
  id uuid default uuid_generate_v4() primary key,
  thread_id uuid references public.forum_threads on delete cascade,
  comment_id uuid references public.forum_comments on delete cascade,
  user_id uuid references auth.users on delete cascade not null,
  reaction_type text not null, -- like, celebrate, support, etc.
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  check (
    (thread_id is not null and comment_id is null) or
    (thread_id is null and comment_id is not null)
  ),
  unique(thread_id, user_id, reaction_type),
  unique(comment_id, user_id, reaction_type)
);
alter table public.forum_reactions enable row level security;


-- 25. NOTIFICATIONS
create table if not exists public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  type text not null, -- report_update, comment, vote, volunteer_approved, etc.
  title text not null,
  message text not null,
  link text, -- URL to navigate to
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.notifications enable row level security;


-- 26. VERIFICATION_LOGS
create table if not exists public.verification_logs (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references public.reports on delete cascade not null,
  verified_by uuid references auth.users on delete set null,
  verification_level text not null, -- volunteer, agent, supervisor
  evidence_added jsonb,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.verification_logs enable row level security;
