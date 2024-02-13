import AvatarDefault from '@/assets/Image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import ChangePasswordDialog from './change-password-dialog';

type UsersDropdownProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function UsersDropdown({ children }: UsersDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 absolute h-72 px-0 pt-4 pb-0 left-[-210px]">
        <div className="flex flex-col items-center p-6">
          <div className="h-20 w-20 mb-4">
            <img src={AvatarDefault} alt="avatar" className="h-20 w-20" />
          </div>
          <p className="text-lg font-extrabold text-center uppercase">
            Umar Ismail
          </p>
          <p className="text-sm text-center">HR</p>
          <ChangePasswordDialog>
            <Button
              variant="link"
              className="py-2 w-fit px-4 mt-6 hover:bg-gray-200 hover:no-underline"
            >
              <p className="text-[12px]">Change Password</p>
            </Button>
          </ChangePasswordDialog>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
