import { ReactNode } from 'react';

type ButtonProps = {
  type: 'submit' | 'button';
  children: ReactNode;
  size?: '24px' | '48px' | '56px';
  onClick: () => void;
  className: string;
};

const Button = ({ type, children }: ButtonProps) => {
  return <button type={type}>{children}</button>;
};

export default Button;
