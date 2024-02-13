import {
  faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NotificationItemsProps = {
  type: 'Information' | 'Alert';
  date: string;
  title: string;
  description: string;
};

export default function NotificationItems({
  type,
  date,
  title,
  description,
}: NotificationItemsProps) {
  return (
    <div className="p-4 bg-gray-100 border-b-[1px] cursor-pointer hover:bg-gray-50">
      <div className="flex h-4 items-center mb-1.5">
        <FontAwesomeIcon
          icon={type === 'Alert' ? faTriangleExclamation : faCircleInfo}
          height={16}
          width={16}
          className="mr-1.5"
        />
        <p className="text-[10px] text-[#31353BAD]">{type}</p>
        <div className="h-1 w-1 bg-[#31353B70] rounded-full mx-1.5" />
        <p className="text-[10px] text-[#31353BAD]">{date}</p>
      </div>
      <p className="text-[12px] font-extrabold">{title}</p>
      <p className="text-[12px] text-gray-600">{description}</p>
    </div>
  );
}
