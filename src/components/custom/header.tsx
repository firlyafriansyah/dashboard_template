import {
  IconDefinition,
  faBell,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AvatarDefault from '@/assets/Image';
import SidebarData from '@/data/sidebar';

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

type SidebarItemsProps = {
  value: string;
  icon: IconDefinition;
  path?: string | undefined;
  group: string | boolean;
  description?: string;
};

export default function Header() {
  const path = useLocation().pathname;
  const [title, setTitle] = React.useState<string>('');
  const [subTitle, setSubTitle] = React.useState<string>('');

  React.useEffect(() => {
    const findActiveGroup: SidebarItemsProps[] = [];

    SidebarData.forEach((items: SidebarDataProps) => {
      if (items.group) {
        items?.items?.map((itemData: SidebarItemsProps) => findActiveGroup.push(itemData));
      } else {
        findActiveGroup.push(items);
      }
    });

    const pageInformation = findActiveGroup.find((item) => path === item.path) || undefined;

    setTitle(pageInformation?.value || 'What page is this?');
    setSubTitle(
      pageInformation?.description
        || 'I think the programmer forgot to give this page a description -_-',
    );
  }, [path]);

  return (
    <div
      className="
        flex
        px-10
        w-full
        min-h-24
        items-center
        border-b-[1px]
        justify-between
      "
    >
      <div>
        <p className="text-2xl">{title}</p>
        <p className="text-sm">{subTitle}</p>
      </div>
      <div className="flex">
        <div
          className="
            w-8
            h-8
            flex
            mr-6
            border-[1px]
            rounded-full
            items-center
            cursor-pointer
            justify-center
            hover:bg-gray-200
          "
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div
          className="
            w-8
            h-8
            mr-6
            flex
            border-[1px]
            rounded-full
            items-center
            cursor-pointer
            justify-center
            hover:bg-gray-200
          "
        >
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="flex h-8 border-l-[1px] pl-6 items-center cursor-pointer">
          <div className="h-8 w-8 mr-2">
            <img src={AvatarDefault} alt="avatar" />
          </div>
          <p className="text-sm mr-2">Umar Ismail</p>
          <FontAwesomeIcon width={12} icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}
