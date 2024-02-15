type NotificationDataProps = {
  id: number;
  date: string;
  title: string;
  description: string;
  read: boolean;
  type: 'Information' | 'Alert';
};

const NotificationData: NotificationDataProps[] = [
  {
    id: 1,
    date: '2024-02-15 10:24',
    read: true,
    type: 'Information',
    title: 'Notification One Is The Fist One',
    description:
      "On description maybe i will write some sentences, but honestly I don't know whats is this.",
  },
  {
    id: 2,
    date: '2024-01-24 15:46',
    read: false,
    type: 'Information',
    title: 'Notification One Is The Fist One',
    description:
      "On description maybe i will write some sentences, but honestly I don't know whats is this.",
  },
  {
    id: 3,
    date: '2024-02-14 11:36',
    read: true,
    type: 'Information',
    title: 'Notification One Is The Fist One',
    description:
      "On description maybe i will write some sentences, but honestly I don't know whats is this.",
  },
  {
    id: 4,
    date: '2024-01-31 10:54',
    read: false,
    type: 'Alert',
    title: 'Notification One Is The Fist One',
    description:
      "On description maybe i will write some sentences, but honestly I don't know whats is this.",
  },
];

export default NotificationData;
