import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/button';

type SearchDialogItemsProps = {
  value: string;
  navigate: () => void;
};

export default function SearchDialogItems({
  value,
  navigate,
}: SearchDialogItemsProps) {
  return (
    <Button
      onClick={() => navigate()}
      variant="link"
      className="flex justify-start h-auto py-3 px-3 items-center hover:bg-gray-200 rounded-lg cursor-pointer hover:no-underline"
    >
      <FontAwesomeIcon icon={faFile} className="mr-3" />
      <p>{value}</p>
    </Button>
  );
}
