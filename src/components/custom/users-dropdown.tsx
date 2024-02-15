import * as React from 'react';
import UserData from '@/data/user';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Label from '../ui/label';
import ChangePasswordDialog from './change-password-dialog';

type UsersDropdownProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function UsersDropdown({ children }: UsersDropdownProps) {
  const changeAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-[-80px]">
        <div className="w-80 h-72 px-0 pt-4 pb-0 animate-header-comp-288">
          <div className="flex flex-col items-center p-6">
            <Label
              htmlFor="avatar"
              className="relative h-20 w-20 mb-4 cursor-pointer group rounded-full"
            >
              <img
                src={UserData.avatar}
                alt="avatar"
                className="h-20 w-20 rounded-full group-hover:blur-sm"
              />
              <div className="hidden absolute top-0 left-0 h-20 w-20 rounded-full bg-gray-100 justify-center items-center opacity-50 group-hover:flex">
                <p className="text-[12px] font-bold text-center">
                  Change Avatar
                </p>
              </div>
            </Label>
            <input
              hidden
              id="avatar"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeAvatarHandler(e)}
            />
            <p className="text-lg font-extrabold text-center uppercase">
              {UserData.fullName}
            </p>
            <p className="text-sm text-center">{UserData.department}</p>
            <ChangePasswordDialog>
              <Button
                variant="link"
                className="py-2 w-fit px-4 mt-6 hover:bg-gray-200 hover:no-underline"
              >
                <p className="text-[12px]">Change Password</p>
              </Button>
            </ChangePasswordDialog>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
