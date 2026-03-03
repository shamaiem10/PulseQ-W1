export interface Task {
  title: string;
  description: string;
  status: 'Pending' | 'Completed';
}