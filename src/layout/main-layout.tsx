import Header from '@/components/custom/header';
import Sidebar from '@/components/custom/sidebar';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex w-screen h-screen bg-akarmula">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="px-10 grow py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
