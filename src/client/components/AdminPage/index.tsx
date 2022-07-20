// @ts-nocheck
import * as React from 'react';

import { Loading } from '../../../common/components/Loading';
import { AddressRowContainer } from '../common/AddressSelect';

const AdminPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <AddressRowContainer />
      admin page
    </React.Suspense>
  );
};

export { AdminPage };
