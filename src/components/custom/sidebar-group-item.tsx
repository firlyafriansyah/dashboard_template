import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import KebabCaseConversion from '@/utils/kebab-case-conversion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import SidebarItem from './sidebar-item';

type Props = {
  value: string;
  items: {
    icon: IconDefinition;
    value: string;
    path: string | undefined;
  }[];
  pages: string | undefined;
  navigate: (path: string) => void;
};

type ItemProps = {
  icon: IconDefinition;
  value: string;
  path: string | undefined;
};

export default function SidebarGroupItem({
  value,
  items,
  pages,
  navigate,
}: Props) {
  return (
    <Accordion
      defaultValue={value}
      type="single"
      collapsible
      className="px-4 py-0 rounded-xl hover:bg-gray-100"
    >
      <AccordionItem value={value} className="border-0">
        <AccordionTrigger className="min-h-10">{value}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 py-2">
          {items.map((item: ItemProps) => (
            <SidebarItem
              key={item.value}
              icon={item.icon}
              value={item.value}
              navigate={() => navigate(item.path || '')}
              active={pages === KebabCaseConversion(item.value)}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
