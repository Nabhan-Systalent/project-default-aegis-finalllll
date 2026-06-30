export interface CostMetricsProps {
  data: Array<{
    project: string;
    spend: number;
    tokens: number;
  }>;
  isLoading?: boolean;
}
