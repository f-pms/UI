import { ComponentType } from 'react';

import { useNavigate, useSearchParams } from '~/libs/react-router-dom';

// Define the props that the wrapped component can accept
export interface ICallbackProps {
  handleCallback?: (redirect: string) => void;
}

// Define the higher-order component that wraps the component to add callback functionality
function withCallbackUrl<T extends ICallbackProps>(
  Component: ComponentType<T>,
) {
  // Return a new component that wraps the original component
  return (props: T) => {
    // Get the navigate function from the router library
    const navigate = useNavigate();
    // Get the search params from the URL using the searchParams hook
    const [searchParams, _] = useSearchParams();

    // Define the callback function that will be passed to the wrapped component
    const handleCallback = (redirect: string) => {
      // Get the callback URL from the search params
      const callbackURL = searchParams.get('callback');
      // Navigate to the callback URL if it exists, or the redirect URL otherwise
      navigate(callbackURL ?? redirect);
    };

    // Render the wrapped component with the handleCallback prop
    return <Component {...props} handleCallback={handleCallback} />;
  };
}

export default withCallbackUrl;
