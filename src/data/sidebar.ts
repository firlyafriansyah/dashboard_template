import {
  IconDefinition,
  faCodePullRequest,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

type SidebarDataProps = {
  value: string;
  icon: IconDefinition;
  group: boolean;
  path?: string;
  description?: string;
  items?: {
    value: string;
    icon: IconDefinition;
    path: string;
    group: string;
    description?: string;
  }[];
};

const SidebarData: SidebarDataProps[] = [
  {
    value: 'Dashboard',
    icon: faHouse,
    group: false,
    path: '/dashboard',
    description: 'Transaction dashboard for monitoring.',
  },
  {
    value: 'Transaction',
    icon: faCodePullRequest,
    group: false,
    path: '/transaction',
    description: 'List of all transaction.',
  },
  {
    value: 'Group 1',
    icon: faCodePullRequest,
    group: true,
    items: [
      {
        value: 'Sub Group 1',
        icon: faCodePullRequest,
        path: '/sub-group-1',
        group: 'Group 1',
        description: "I don't know what to write.",
      },
      {
        value: 'Sub Group 2',
        icon: faCodePullRequest,
        path: '/sub-group-2',
        group: 'Group 1',
        description: "I don't know what to write.",
      },
    ],
  },
  {
    value: 'Group 2',
    icon: faCodePullRequest,
    group: true,
    items: [
      {
        value: 'Sub Group 3',
        icon: faCodePullRequest,
        path: '/sub-group-3',
        group: 'Group 2',
        description: "I don't know what to write.",
      },
      {
        value: 'Sub Group 4',
        icon: faCodePullRequest,
        path: '/sub-group-4',
        group: 'Group 2',
      },
    ],
  },
];

export default SidebarData;
