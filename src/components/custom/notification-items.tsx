import * as React from 'react';
import {
  faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { Button } from '../ui/button';

type NotificationItemsProps = {
  id: number;
  type: 'Information' | 'Alert';
  date: string;
  title: string;
  description: string;
  read: boolean;
};

export default function NotificationItems({
  id,
  type,
  date,
  title,
  description,
  read,
}: NotificationItemsProps) {
  const readHandler = (idLocal: number) => {
    if (!read) {
      console.log(`Notification with id ${idLocal} change to read!`);
    }
  };

  return (
    <div
      className={`p-4 ${read ? 'bg-gray-100 hover:bg-gray-50' : 'bg-orange-100 hover:bg-orange-50'} border-b-[1px] cursor-pointer`}
    >
      <Button
        onClick={() => readHandler(id)}
        variant="link"
        className="flex flex-col items-start p-0 h-auto  hover:no-underline"
      >
        <div className="flex h-4 items-center mb-1.5">
          <FontAwesomeIcon
            icon={type === 'Alert' ? faTriangleExclamation : faCircleInfo}
            height={16}
            width={16}
            className="mr-1.5"
          />
          <p className="text-[10px] text-[#31353BAD]">{type}</p>
          <div className="h-1 w-1 bg-[#31353B70] rounded-full mx-1.5" />
          <p className="text-[10px] text-[#31353BAD]">
            {dayjs(date).format('DD MMMM YYYY')
            === dayjs().format('DD MMMM YYYY')
              ? dayjs(date).format('HH.mm')
              : dayjs(date).format('DD MMM')}
          </p>
        </div>
        <p className="text-[12px] text-wrap text-left font-extrabold">
          {title}
        </p>
        <p className="text-[12px] text-wrap text-left text-gray-600">
          {description}
        </p>
      </Button>
    </div>
  );
}
