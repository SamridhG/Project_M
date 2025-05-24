import PrivateLayout from './Private/PrivateLayout';
import PublicLayout from './Public/PublicLayouts';
import { ReactNode } from "react";
 interface AppLayoutProps {
    isAuthenticated?: Boolean;
    children: ReactNode;
}
function AppLayout({ isAuthenticated, children }: AppLayoutProps) {
  return isAuthenticated ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <PublicLayout>{children}</PublicLayout>
  );
}

export default AppLayout;
