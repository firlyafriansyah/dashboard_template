import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import SidebarItem from './sidebar-item';

type SidebarGroupItemProps = {
  value: string;
  items: {
    icon: IconDefinition;
    value: string;
    path: string | undefined;
  }[];
  pages: string | undefined;
  navigate: (path: string) => void;
  group: string;
};

type SidebarItemProps = {
  icon: IconDefinition;
  value: string;
  path: string | undefined;
};

export default function SidebarGroupItem({
  value,
  items,
  pages,
  navigate,
  group,
}: SidebarGroupItemProps) {
  return (
    <Accordion
      defaultValue={group}
      type="single"
      collapsible
      className="px-4 py-0 rounded-xl hover:bg-gray-100"
    >
      <AccordionItem value={value} className="border-0">
        <AccordionTrigger className="min-h-10">{value}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 py-2">
          {items.map((item: SidebarItemProps) => (
            <SidebarItem
              key={item.value}
              icon={item.icon}
              value={item.value}
              navigate={() => navigate(item.path || '')}
              active={pages === item.path}
              group
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
