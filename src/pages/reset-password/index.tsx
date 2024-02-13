import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Input from '@/components/custom/input';
import Textarea from '@/components/custom/textarea';
import { Button } from '@/components/ui/button';

type InputProps = {
  values: string;
  error: boolean;
  errorMessage: string;
};

export default function ResetPassword() {
  const [username, setUsername] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });
  const [fullName, setFullName] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });
  const [department, setDepartment] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });
  const [notes, setNotes] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });
  const [resetStatus, setResetStatus] = React.useState<boolean>(false);

  const resetHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.values && !fullName.values && !department.values) {
      setUsername({
        values: '',
        error: true,
        errorMessage: 'Username is required',
      });
      setFullName({
        values: '',
        error: true,
        errorMessage: 'Full name is required',
      });
      setDepartment({
        values: '',
        error: true,
        errorMessage: 'Department is required',
      });
    } else if (!username.values) {
      setUsername({
        values: '',
        error: true,
        errorMessage: 'Username is required',
      });
    } else if (!fullName.values) {
      setFullName({
        values: '',
        error: true,
        errorMessage: 'Full name is required',
      });
    } else if (!department.values) {
      setDepartment({
        values: '',
        error: true,
        errorMessage: 'Department is required',
      });
    } else {
      setResetStatus(true);
      console.log(
        username.values,
        fullName.values,
        department.values,
        notes.values,
      );
    }
  };

  return (
    <div className="min-h-screen">
      <div className="absolute z-[-1] blur-[140px] overflow-hidden inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#fff7e0]" />
        <div className="absolute bottom-44 w-64 h-64 rounded-full ml-40 bg-[#e0f5ea]" />
        <div className="absolute bottom-0 left-[-50px] w-52 h-52 rounded-full bg-[#f25e52]" />
      </div>
      <div className="flex flex-col flex-wrap min-h-screen w-full box-border items-center justify-center mx-auto">
        {resetStatus ? (
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faCircleCheck} className="h-10" />
            <div>
              <p className="font-bold text-xl">
                Your password is successfully reset!
              </p>
              <p className="text-sm">
                Please wait, the IT team will contact you shortly to confirm.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-[400px] m-5 p-6 border-[1px] rounded-xl bg-white">
            <div className="flex h-14 mb-6 max-[480px]:w-full w-[350px] justify-center">
              <p className="mt-6 text-black-custom text-2xl font-semibold antialiased">
                Reset Password
              </p>
            </div>
            <div className="w-full mt-2">
              <form onSubmit={(e) => resetHandler(e)}>
                <div>
                  <Input
                    label="Username"
                    error={username.error}
                    placeholder="Enter username"
                    errorMessage={username.errorMessage}
                    onChange={(e) => (e.length > 0
                      ? setUsername({
                        values: e,
                        error: false,
                        errorMessage: '',
                      })
                      : setUsername({
                        values: e,
                        error: true,
                        errorMessage: 'Username is required',
                      }))}
                  />
                </div>
                <div className="mt-4">
                  <Input
                    label="Full Name"
                    error={fullName.error}
                    placeholder="Enter full name"
                    errorMessage={fullName.errorMessage}
                    onChange={(e) => (e.length > 0
                      ? setFullName({
                        values: e,
                        error: false,
                        errorMessage: '',
                      })
                      : setFullName({
                        values: e,
                        error: true,
                        errorMessage: 'Full name is required',
                      }))}
                  />
                </div>
                <div className="mt-4">
                  <Input
                    label="Department"
                    error={department.error}
                    placeholder="Enter department name"
                    errorMessage={department.errorMessage}
                    onChange={(e) => (e.length > 0
                      ? setDepartment({
                        values: e,
                        error: false,
                        errorMessage: '',
                      })
                      : setDepartment({
                        values: e,
                        error: true,
                        errorMessage: 'Department is required',
                      }))}
                  />
                </div>
                <div className="mt-4">
                  <Textarea
                    label="Notes (Optional)"
                    error={notes.error}
                    h="250px"
                    placeholder="Enter notes"
                    errorMessage={notes.errorMessage}
                    onChange={(e) => setNotes({
                      values: e,
                      error: false,
                      errorMessage: '',
                    })}
                  />
                </div>
                <Button type="submit" className="mt-12 w-full h-11">
                  Reset
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
