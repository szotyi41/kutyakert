// pages/index.tsx
import { builder } from '@builder.io/react';

builder.init('789e97c21cdc440d8ab6b66b89908059');

export async function getStaticProps() {
  const page = await builder.get('page', {
    userAttributes: {
      urlPath: '/',
    },
  }).toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export default function Home({ page }) {
  return (
    <div>
      {/* rendereld a Builder komponenst itt */}
    </div>
  );
}
