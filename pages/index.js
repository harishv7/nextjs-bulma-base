import Head from 'next/head';
import SiteLayout from '../layouts/SiteLayout';
import Dashboard from '../components/Dashboard/';

export default function Home() {
  return (
    <SiteLayout>
      <Dashboard />
    </SiteLayout>
  );
}
