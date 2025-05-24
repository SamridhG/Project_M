import { ReactNode } from 'react';
interface PrivateLayoutProps {
  children: ReactNode; // ReactNode allows any React children: JSX, strings, fragments, etc.
}

function PrivateLayout({ children }: Readonly<PrivateLayoutProps>) {
  return (
        // <div className="content-area">
           <main>{children}</main> 
            // </div>
  );
}

export default PrivateLayout;
