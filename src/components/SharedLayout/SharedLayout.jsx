import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => (
  <>
    <Header />
    <main>
      <Suspense fallback={<b>Loading...</b>}>
        <Outlet />
      </Suspense>
    </main>
    <Toaster />
  </>
);
