import { ReactNode } from 'react';

import { Footer } from '~/layouts/partials/Footer';

export interface IFooterOnlyLayoutProps {
  children?: ReactNode;
}

export function FooterOnlyLayout({ children }: IFooterOnlyLayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
