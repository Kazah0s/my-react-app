import React, { useState } from "react";

export interface LoginProps {
  name: string;
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({
  name = 'Максим',
  username = 'kazah',
}) => {

  return (
    <>
      <div
        className="userBlock">

        {name}
      </div>
    </>
  )




}