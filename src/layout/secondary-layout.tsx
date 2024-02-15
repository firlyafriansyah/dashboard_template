import Header from '@/components/custom/header';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function SecondaryLayout({ children }: Props) {
  return (
    <div className="flex w-screen h-screen bg-akarmula">
      <div className="flex flex-col w-full h-screen">
        <Header
          titleProps="Notification"
          descriptionProps="Table list of all notifications you received."
          typeProps="secondary"
        />
        <div className="px-10 grow py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
