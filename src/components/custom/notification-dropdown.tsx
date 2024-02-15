/* eslint-disable max-len */
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import NotificationData from '@/data/notification';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import NotificationItems from './notification-items';

type NotificationDropdownProps = {
  children: string | JSX.Element | JSX.Element[];
};

type NotificationItemsProps = {
  id: number;
  date: string;
  title: string;
  description: string;
  read: boolean;
  type: 'Information' | 'Alert';
};

export default function NotificationDropdown({
  children,
}: NotificationDropdownProps) {
  const navigate = useNavigate();

  const readAllHandler = () => {
    console.log('Change all notification to read!');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <div className="w-80 h-96 px-0 pt-4 pb-0 animate-header-comp-384">
          <div className="h-80 overflow-y-auto p-0">
            {NotificationData.sort(
              (a: NotificationItemsProps, b: NotificationItemsProps) => parseInt(dayjs(b.date).format(), 10)
                - parseInt(dayjs(a.date).format(), 10),
            )
              .sort(
                (a: NotificationItemsProps, b: NotificationItemsProps) => (a.read ? 1 : 0) - (b.read ? 1 : 0),
              )
              .map((items: NotificationItemsProps) => (
                <NotificationItems
                  key={items.id}
                  id={items.id}
                  type={items.type}
                  date={items.date}
                  read={items.read}
                  title={items.title}
                  description={items.description}
                />
              ))}
          </div>
          <div className="flex h-10 items-center justify-between py-3 px-4 mt-1">
            <Button
              variant="link"
              className="p-0 flex h-10 items-center cursor-pointer hover:no-underline"
              onClick={() => readAllHandler()}
            >
              <p className="text-[12px]">Tandai semua dibaca</p>
            </Button>
            <Button
              variant="link"
              className="p-0 flex h-10 items-center cursor-pointer hover:no-underline"
              onClick={() => navigate('/notification')}
            >
              <p className="text-[12px]">Lihat selengkapnya</p>
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
