import { Suspense } from 'react';
import { PropertiesView } from './PropertiesView';

export default function PropertiesPage() {
  return (
    <Suspense>
      <PropertiesView />
    </Suspense>
  );
}
