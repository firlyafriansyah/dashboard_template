import {
  IconDefinition,
  faCodePullRequest,
  faHouse,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import KebabCaseConversion from '@/utils/kebab-case-conversion';
import LogoDefault from '@/assets/Logo';
import SidebarGroupItem from './sidebar-group-item';
import SidebarItem from './sidebar-item';

type DataProps = {
  value: string;
  icon: IconDefinition;
  group: boolean;
  path?: string;
  items?: {
    value: string;
    icon: IconDefinition;
    path: string;
  }[];
};

const sidebarDataDummy: DataProps[] = [
  {
    value: 'Dashboard',
    icon: faHouse,
    group: false,
    path: '/dashboard',
  },
  {
    value: 'Transaction',
    icon: faCodePullRequest,
    group: false,
    path: '/transaction',
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
      },
      {
        value: 'Sub Group 2',
        icon: faCodePullRequest,
        path: '/sub-group-2',
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
      },
      {
        value: 'Sub Group 4',
        icon: faCodePullRequest,
        path: '/sub-group-4',
      },
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const pages = useLocation().pathname.split('/')[1];

  return (
    <div className="flex flex-col min-w-60 border-r-[1px]">
      <div className="flex min-h-24 justify-center items-center border-b-[1px]">
        <img src={LogoDefault} alt="logo" className="h-14" />
      </div>
      <div className="flex flex-col grow overflow-y-auto py-5 px-8 gap-4">
        {sidebarDataDummy.map((item: DataProps) => (item.group ? (
          <SidebarGroupItem
            key={item.value}
            value={item.value}
            items={item.items || []}
            pages={pages}
            navigate={(e: string) => navigate(e)}
          />
        ) : (
          <SidebarItem
            key={item.value}
            value={item.value}
            icon={item.icon}
            active={pages === KebabCaseConversion(item.value)}
            navigate={() => navigate(item.path || '')}
          />
        )))}
      </div>
      <div className="flex min-h-24 justify-center items-center border-t-[1px]">
        <div className="flex px-6 py-2 justify-center items-center gap-4 h-10 cursor-pointer rounded-xl hover:bg-gray-200">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
