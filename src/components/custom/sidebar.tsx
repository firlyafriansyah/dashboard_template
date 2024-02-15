import {
  IconDefinition,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarData from '@/data/sidebar';
import LogoDefault from '@/assets/Logo';
import SidebarGroupItem from './sidebar-group-item';
import SidebarItem from './sidebar-item';
import { Button } from '../ui/button';

type SidebarDataProps = {
  value: string;
  icon: IconDefinition;
  group: boolean;
  path?: string;
  items?: {
    value: string;
    icon: IconDefinition;
    path: string;
    group: string;
  }[];
};

type SidebarItemsProps = {
  value: string;
  icon: IconDefinition;
  path: string | undefined;
  group: string;
};

export default function Sidebar() {
  const navigate = useNavigate();
  const pages = useLocation().pathname;

  return (
    <div className="flex flex-col min-w-60 border-r-[1px]">
      <Button
        variant="link"
        className="flex p-0 min-h-24 justify-center items-center border-b-[1px] hover:no-underline"
        onClick={() => navigate('/dashboard')}
      >
        <img src={LogoDefault} alt="logo" className="h-14" />
      </Button>
      <div className="flex flex-col grow overflow-y-auto py-5 px-8 gap-4">
        {SidebarData.map((item: SidebarDataProps) => {
          const findActiveGroup: SidebarItemsProps[] = [];

          SidebarData.map(
            (items: SidebarDataProps) => items.group
              && items?.items?.map((itemData: SidebarItemsProps) => findActiveGroup.push(itemData)),
          );

          if (item.group) {
            return (
              <SidebarGroupItem
                key={item.value}
                value={item.value}
                items={item.items || []}
                pages={pages}
                navigate={(e: string) => navigate(e)}
                group={
                  findActiveGroup.find((itemData) => pages === itemData.path)
                    ?.group || ''
                }
              />
            );
          }
          return (
            <SidebarItem
              key={item.value}
              value={item.value}
              icon={item.icon}
              active={pages === item.path}
              navigate={() => navigate(item.path || '')}
              group={item.group}
            />
          );
        })}
      </div>
      <div className="flex min-h-24 justify-center items-center border-t-[1px]">
        <Button
          variant="link"
          onClick={() => navigate('/login')}
          className="flex h-auto px-6 py-2 justify-center items-center gap-4 h-10 cursor-pointer rounded-xl hover:bg-red-100 hover:no-underline"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p>Logout</p>
        </Button>
      </div>
    </div>
  );
}
