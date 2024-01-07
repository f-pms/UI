import withCallbackUrl, { ICallbackProps } from '~/hocs/withCallbackUrl';

import { LoginForm } from '~/pages/Auth/partials/LoginForm';

type ISignInProps = ICallbackProps;

function SignIn(props: Readonly<ISignInProps>) {
  const { handleCallback = () => {} } = props;
  return <LoginForm onCallbackUrl={handleCallback} />;
}

export const SignInPage = withCallbackUrl(SignIn);
