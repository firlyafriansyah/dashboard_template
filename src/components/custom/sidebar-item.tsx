import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/button';

type SidebarItemProps = {
  icon: IconDefinition;
  value: string;
  active: boolean;
  navigate: () => void;
  group: boolean;
};

export default function SidebarItem({
  icon,
  value,
  active,
  navigate,
  group,
}: SidebarItemProps) {
  return (
    <Button
      variant="link"
      onClick={() => navigate()}
      className={`
        p-0
        px-4
        flex
        h-auto
        min-h-10
        rounded-xl
        items-center
        justify-start
        cursor-pointer
        hover:no-underline
        ${active ? (group ? 'animate-sidebar-group-items' : 'animate-sidebar-items') : ''}
        ${active ? 'bg-black' : 'hover:bg-gray-200'}
      `}
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
