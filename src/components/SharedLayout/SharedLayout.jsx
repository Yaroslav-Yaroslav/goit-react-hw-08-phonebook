import { Header } from 'components/Header/Header';
import { Container } from 'components/Header/Header.styled';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => (
  <>
    <Header />
    <main>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
    <Toaster />
  </>
);
