import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoDefault from '@/assets/Logo';
import Input from '@/components/custom/input';
import { Button } from '@/components/ui/button';
import InputPassword from '@/components/custom/input-password';

type InputProps = {
  values: string;
  error: boolean;
  errorMessage: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });
  const [password, setPassword] = React.useState<InputProps>({
    values: '',
    error: false,
    errorMessage: '',
  });

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.values && !password.values) {
      setUsername({
        values: '',
        error: true,
        errorMessage: 'Username is required',
      });
      setPassword({
        values: '',
        error: true,
        errorMessage: 'Password is required',
      });
    } else if (!username.values) {
      setUsername({
        values: '',
        error: true,
        errorMessage: 'Username is required',
      });
    } else if (!password.values) {
      setPassword({
        values: '',
        error: true,
        errorMessage: 'Password is required',
      });
    } else {
      navigate('/');
      console.log(username.values, password.values);
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
        <div className="max-w-[400px] m-5 p-6 border-[1px] rounded-xl bg-white">
          <div className="flex h-14 mb-6 max-[480px]:w-full w-[350px] justify-center">
            <img src={LogoDefault} alt="logo" className="h-14" />
          </div>
          <p className="mt-6 text-black-custom text-2xl font-semibold antialiased">
            Login
          </p>
          <div className="w-full mt-6">
            <form onSubmit={(e) => loginHandler(e)}>
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
              <div className="mt-6">
                <InputPassword
                  label="Password"
                  error={password.error}
                  placeholder="Enter password"
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
                      errorMessage: 'Password is required',
                    }))}
                />
              </div>
              <div className="flex mt-5 justify-end">
                <Button
                  type="button"
                  variant="link"
                  className="underline-offset-1"
                  onClick={() => console.log('Forget Password?')}
                >
                  <p className="text-sm text-black-custom">Forgot Password?</p>
                </Button>
              </div>
              <Button type="submit" className="mt-6 w-full h-11">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
