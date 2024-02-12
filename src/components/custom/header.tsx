import {
  faBell,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarDefault from '@/assets/Image';

export default function Header() {
  return (
    <div className="flex min-h-24 w-full px-10 items-center justify-between border-b-[1px]">
      <div>
        <p className="text-2xl">Dashboard</p>
        <p className="text-sm">Transaction dashboard for monitoring</p>
      </div>
      <div className="flex">
        <div className="flex w-8 h-8 mr-6 rounded-full justify-center items-center border-[1px] cursor-pointer hover:bg-gray-200">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="flex w-8 h-8 mr-6 rounded-full justify-center items-center border-[1px] cursor-pointer hover:bg-gray-200">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="flex h-8 border-l-[1px] pl-6 items-center cursor-pointer">
          <div className="h-8 w-8 mr-2">
            <img src={AvatarDefault} alt="avatar" />
          </div>
          <p className="text-sm mr-2">Umar Ismail</p>
          <FontAwesomeIcon width={12} icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}
