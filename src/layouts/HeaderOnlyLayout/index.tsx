import { ReactNode } from 'react';

export interface IHeaderOnlyLayoutProps {
  children?: ReactNode;
}

export function HeaderOnlyLayout({
  children,
}: IHeaderOnlyLayoutProps): JSX.Element {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
}
