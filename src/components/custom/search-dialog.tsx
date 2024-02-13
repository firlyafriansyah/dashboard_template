import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../ui/dialog';
import SearchDialogItems from './search-dialog-items';

type SearchDialogProps = {
  children: string | JSX.Element | JSX.Element[];
  navigate: (path: string) => void;
};

export default function SearchDialog({
  children,
  navigate,
}: SearchDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[510px] py-4 px-0">
        <DialogHeader className="m-0 border-b-[1px] px-5 pb-4 shadow-sm">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#71717A" />
            <input
              placeholder="Search here"
              className="outline-none grow text-sm pr-5"
            />
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-2 px-3 h-80 overflow-y-auto">
          <SearchDialogItems
            value="Dashboard"
            navigate={() => navigate('/dashboard')}
          />
          <SearchDialogItems
            value="Transaction"
            navigate={() => navigate('/transaction')}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
