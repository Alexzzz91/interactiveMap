// @ts-nocheck
import * as React from 'react';

import { Loading } from '../../../common/components/Loading';
import { CityAdressRow } from '../common/CityAdressRow';

const AdminPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <CityAdressRow />
    </React.Suspense>
  );
};

export { AdminPage };
