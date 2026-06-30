export interface DashboardProps {
  workflows: Array<{
    id: string;
    name: string;
    status: 'active' | 'paused' | 'error';
    lastActive: string;
  }>;
  isLoading?: boolean;
}
