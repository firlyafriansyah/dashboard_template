import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../ui/dialog';
import InputPassword from './input-password';
import { Button } from '../ui/button';

type ChangePasswordDialogProps = {
  children: string | JSX.Element | JSX.Element[];
};

type InputProps = {
  values: string;
  error: boolean;
  errorMessage: string;
};

export default function ChangePasswordDialog({
  children,
}: ChangePasswordDialogProps) {
  const [password, setPassword] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });

  const changePasswordHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.values && !confirmPassword.values) {
      setPassword({
        values: '',
        error: true,
        errorMessage: 'New password is required',
      });
      setConfirmPassword({
        values: '',
        error: true,
        errorMessage: 'Password do not match',
      });
    } else if (!password.values) {
      setPassword({
        values: '',
        error: true,
        errorMessage: 'New password is required',
      });
    } else if (password.values.length < 8) {
      setPassword({
        values: '',
        error: true,
        errorMessage: 'New password must be at least 8 characters',
      });
    } else if (!confirmPassword.values) {
      setConfirmPassword({
        values: '',
        error: true,
        errorMessage: 'Password do not match',
      });
    } else if (password.values !== confirmPassword.values) {
      setConfirmPassword({
        values: '',
        error: true,
        errorMessage: 'Password do not match',
      });
    } else {
      console.log(password.values, confirmPassword.values);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <p className="font-extrabold">Change Password</p>
        </DialogHeader>
        <form onSubmit={(e) => changePasswordHandler(e)}>
          <div>
            <InputPassword
              label="New Password"
              error={password.error}
              placeholder="Enter new password"
              errorMessage={password.errorMessage}
              onChange={(e) => (e.length > 0
                ? setPassword({
                  values: e,
                  error: false,
                  errorMessage: '',
                })
                : setPassword({
                  values: e,
                  error: true,
                  errorMessage: 'Username is required',
                }))}
            />
          </div>
          <div className="mt-4">
            <InputPassword
              label="Confirm Password"
              error={confirmPassword.error}
              placeholder="Enter confirm password"
              errorMessage={confirmPassword.errorMessage}
              onChange={(e) => (e.length > 0
                ? setConfirmPassword({
                  values: e,
                  error: false,
                  errorMessage: '',
                })
                : setConfirmPassword({
                  values: e,
                  error: true,
                  errorMessage: 'Password do not match',
                }))}
            />
          </div>
          <Button type="submit" className="mt-6 w-full h-11">
            Change
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
