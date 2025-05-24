import { ReactNode } from 'react';
// import { Outlet } from 'react-router-dom';

interface PublicLayoutProps {
  children: ReactNode; // ReactNode allows any React children: JSX, strings, fragments, etc.
}
export function PublicLayout({ children }: Readonly<PublicLayoutProps>) {
  return (
    <>
      {children}
      {/* <Outlet /> */}
    </>
  );
}

export default PublicLayout;