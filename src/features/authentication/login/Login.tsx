import React from 'react';

function Login() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <form className="bg-white rounded-3xl p-8 space-y-4 flex flex-col">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" />
          </label>
        </div>
      </form>

    </div>
  );
}

export default Login;
