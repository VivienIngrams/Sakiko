import {FC, FormEvent, memo, useRef} from 'react';

import {AuthFormProps} from '../../data/dataDef';


const AuthForm: FC<AuthFormProps> = memo(({onLogin}: AuthFormProps) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function loginHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const loginData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onLogin(loginData);

    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  }

  return (
    <div className="flex flex-col justify-around sm:flex-row">
      <form onSubmit={loginHandler}>
        <h2 className="text-center text-2xl font-thin uppercase text-white">Log in</h2>
        <div className="flex flex-col items-end ">
          <div className="p-5">
            <label className=" p-2 font-normal text-white" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" ref={emailInputRef} required type="email" />
          </div>
          <div className="p-5">
            <label className=" p-2 font-normal text-white" htmlFor="image">
              Password
            </label>
            <input id="password" name="password" ref={passwordInputRef} required type="password" />
          </div>
          <div className="m-10 rounded-2xl bg-neutral-400 p-2">
            <button className="rounded-2xl text-center" type="submit">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default AuthForm;
