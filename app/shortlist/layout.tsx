import '@mantine/core/styles.css';

import BackgroundWrapper from '@/components/BackgroundWrapper/BackgroundWrapper';

export const metadata = {
  title: 'ReelMates - Your Party Movie Picker!',
  description: 'Pick your party movie in a brand new way!',
};

export default function RootLayout({ children }: { children: any }) {
  return <BackgroundWrapper>{children}</BackgroundWrapper>;
}
