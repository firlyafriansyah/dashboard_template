import * as React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/button';

type Props = {
  icon: IconDefinition;
  value: string;
  active: boolean;
  navigate: () => void;
};

export default function SidebarItem({
  icon, value, active, navigate,
}: Props) {
  return (
    <Button
      variant="link"
      onClick={() => navigate()}
      className={`flex p-0 h-auto items-center justify-start px-4 min-h-10 rounded-xl ${active ? 'bg-black' : 'hover:bg-gray-200'} cursor-pointer hover:no-underline`}
    >
      <FontAwesomeIcon
        icon={icon}
        color={active ? 'white' : ''}
        className="mr-3"
      />
      <p className={`text-sm line-clamp-1 ${active ? 'text-white' : ''}`}>
        {value}
      </p>
    </Button>
  );
}
