import type { FC } from 'react'
import React from 'react'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="flex justify-between items-center px-3 h-12 bg-white border-b border-gray-200 shrink-0">
      {isMobile
        ? (
          <div
            className='flex justify-center items-center w-8 h-8 cursor-pointer'
            onClick={() => onShowSideBar?.()}
          >
            <Bars3Icon className="w-4 h-4 text-gray-500" />
          </div>
        )
        : <div></div>}
      <div className='flex items-center space-x-2'>
        <AppIcon size="small" />
        <div className="text-sm font-bold text-gray-800">{title}</div>
      </div>
      {isMobile
        ? (
          <div className='flex justify-center items-center w-8 h-8 cursor-pointer'
            onClick={() => onCreateNewChat?.()}
          >
            <PencilSquareIcon className="w-4 h-4 text-gray-500" />
          </div>)
        : <div></div>}
    </div>
  )
}

export default React.memo(Header)
