import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => (
  <header>
    <Navigation />
    <AuthNav />
    <UserMenu />
  </header>
);
