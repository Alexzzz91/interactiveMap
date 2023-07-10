// @ts-nocheck
import * as React from 'react';

import { Loading } from '../../../common/components/Loading';
import { CityAddressRow } from '../common/CityAddressRow';

const AdminPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <CityAddressRow />
    </React.Suspense>
  );
};

export { AdminPage };
