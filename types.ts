export enum ViewState {
  HOME = 'HOME',
  CONTACTS = 'CONTACTS',
  CONTACTS_LINKEDIN = 'CONTACTS_LINKEDIN',
  REMINDERS = 'REMINDERS',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  COPILOT = 'COPILOT'
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  lastInteracted: string;
  type: 'linkedin' | 'email' | 'both';
  group?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  view?: ViewState;
  count?: number;
}