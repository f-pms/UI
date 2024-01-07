import { ReactNode } from 'react';

export interface IHeaderOnlyLayoutProps {
  children?: ReactNode;
}

export function HeaderOnlyLayout({
  children,
}: Readonly<IHeaderOnlyLayoutProps>) {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
}
