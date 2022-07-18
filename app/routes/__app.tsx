import { Outlet } from '@remix-run/react';
import { Toaster } from 'react-hot-toast';

import Layout from '~/components/layout/';
import { useProgress } from '~/hooks';

export default function Index() {
  useProgress();
  return (
    <Layout>
      <Toaster />
      <Outlet />
    </Layout>
  );
}
