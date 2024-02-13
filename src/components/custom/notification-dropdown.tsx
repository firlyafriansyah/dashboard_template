import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import NotificationItems from './notification-items';

type NotificationDropdownProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function NotificationDropdown({
  children,
}: NotificationDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 h-96 px-0 pt-4 pb-0">
        <div className="h-80 overflow-y-auto p-0">
          <NotificationItems
            type="Information"
            date="11.53"
            title="This Is Notification Title For Notification"
            description="I didn&#39;t know what to write,
            now I write without thinking about what I&rsquo;m writing.
            Leave this writing as it is"
          />
          <NotificationItems
            type="Alert"
            date="10 Feb"
            title="This Is Notification Title For Notification"
            description="I didn&#39;t know what to write,
            now I write without thinking about what I&rsquo;m writing.
            Leave this writing as it is"
          />
          <NotificationItems
            type="Information"
            date="11.53"
            title="This Is Notification Title For Notification"
            description="I didn&#39;t know what to write,
            now I write without thinking about what I&rsquo;m writing.
            Leave this writing as it is"
          />
        </div>
        <div className="flex h-10 items-center justify-between py-3 px-4 mt-1">
          <div className="flex h-10 items-center cursor-pointer">
            <p className="text-[12px]">Tandai semua dibaca</p>
          </div>
          <div className="flex h-10 items-center cursor-pointer">
            <p className="text-[12px]">Lihat selengkapnya</p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
