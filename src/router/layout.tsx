import { ComponentType, Fragment, isValidElement, ReactNode } from 'react';

// Define the interface for the props of the layout component
interface ILayoutProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export const layout = (layout: ReactNode, element: ReactNode): ReactNode => {
  // Set the default Layout component to Fragment
  let Layout: ComponentType<{ children?: ReactNode }> = Fragment;
  // Initialize the props object to an empty object
  let props: ILayoutProps = {};

  // Check if the layout argument is a valid React element
  if (isValidElement(layout)) {
    // If it is, set the Layout component to the type of the layout element
    Layout = layout.type as ComponentType<ILayoutProps>;
    // Set the props object to the props of the layout element
    props = layout.props as ILayoutProps;
  }

  // Render the Layout component with the props and the element as its children
  return <Layout {...props}>{element}</Layout>;
};
