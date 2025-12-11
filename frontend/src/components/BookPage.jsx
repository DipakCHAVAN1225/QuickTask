// In your ProviderListing.jsx or main component
import ProviderBooking from './components/ProviderBooking'; // or wherever you save it
import { useState } from 'react';

export default function ProviderPage() {
  const [selectedProvider, setSelectedProvider] = useState(null);

  if (selectedProvider) {
    return <ProviderBooking providerId={selectedProvider} onBack={() => setSelectedProvider(null)} />;
  }

  return (
    <ProviderListing onSelectProvider={(provider) => setSelectedProvider(provider.id)} />
  );
}