export interface Task {
  _id: string; // MongoDB ID
  title: string;
  description: string;
  status: 'Pending' | 'Completed';
}