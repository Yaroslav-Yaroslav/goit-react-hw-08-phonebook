import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container, HeaderWrapper, StyledHeader } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
