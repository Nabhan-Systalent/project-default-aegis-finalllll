export interface OrchestratorDashboardProps {
  workflows: Array<{
    id: string;
    name: string;
    status: 'active' | 'idle' | 'error';
    lastRun: string;
    successRate: number;
  }>;
  isLoading?: boolean;
  error?: string | null;
}
