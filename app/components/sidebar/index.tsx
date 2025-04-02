import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilSquareIcon, QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
import Button from '@/app/components/base/button'
// import Card from './card'
import type { ConversationItem, DefaultConversationItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 100

export type ISidebarProps = {
  copyRight: string
  currentId: string
  onCurrentIdChange: (id: string) => void
  list: ConversationItem[]
  defaultList: DefaultConversationItem[]
  isMobile: boolean
  onSend?: (message: string) => void
}

const Sidebar: FC<ISidebarProps> = ({
  copyRight,
  currentId,
  onCurrentIdChange,
  list,
  defaultList,
  isMobile,
  onSend,
}) => {
  const { t } = useTranslation()
  return (
    <div
      className={classNames(
        'flex overflow-y-auto flex-col bg-white border-r border-gray-200 shrink-0',
        isMobile
          ? 'h-screen w-[240px]'
          : 'pc:w-[244px] tablet:w-[192px] tablet:h-[calc(100vh_-_3rem)]',
      )}
    >
      {list.length < MAX_CONVERSATION_LENTH && (
        <div className="flex flex-shrink-0 p-4 !pb-0">
          <Button
            onClick={() => { onCurrentIdChange('-1') }}
            className="group block w-full flex-shrink-0 !justify-start !h-9 text-primary-600 items-center text-sm">
            <PencilSquareIcon className="mr-2 w-4 h-4" /> {t('app.chat.newChat')}
          </Button>
        </div>
      )}
      <h3 className='px-4 pt-4 pb-2 text-sm font-semibold text-gray-700'>
        Popular Queries
      </h3>
      <nav className="space-y-1 bg-white p-4 !pt-0">
        {defaultList.map((item) => {
          return (
            <div key={item.id}
              className={classNames(
                'flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md cursor-pointer group hover:bg-gray-100 hover:text-gray-700',
              )}
              onClick={() => onSend?.(item.value)}
            >
              <div className='flex-shrink-0 mr-3'>
                {item.icon}
              </div>
              {item.name}
            </div>
          )
        })}
      </nav>
      {/* <div className='h-px bg-gray-200 shrink-0' /> */}
      <h3 className='px-4 pb-2 text-sm font-semibold text-gray-700'>
        Recent History
      </h3>
      <nav className="overflow-y-auto flex-1 bg-white">
        <div className='space-y-1 p-4 !pt-0'>
          {list.map((item) => {
            const isCurrent = item.id === currentId
            const ItemIcon
              = isCurrent ? ChatBubbleOvalLeftEllipsisSolidIcon : ChatBubbleOvalLeftEllipsisIcon
            return (
              <div
                onClick={() => onCurrentIdChange(item.id)}
                key={item.id}
                className={classNames(
                  isCurrent
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-700',
                  'flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer group',
                )}
              >
                <ItemIcon
                  className={classNames(
                    isCurrent
                      ? 'text-primary-600'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'flex-shrink-0 mr-3 w-5 h-5',
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </div>
            )
          })}
        </div>
      </nav>
      {/* <div className='h-px bg-gray-200 shrink-0' /> */}

      {/* <a className="flex flex-shrink-0 p-4" href="https://langgenius.ai/" target="_blank">
        <Card><div className="flex flex-row items-center"><ChatBubbleOvalLeftEllipsisSolidIcon className="mr-2 w-6 h-6 text-primary-600" /><span>LangGenius</span></div></Card>
      </a> */}
      <div className="mt-2 space-y-1 bg-white px-4 pb-2 !pt-0">
        <div
          className={classNames(
            'flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md cursor-pointer group hover:bg-gray-100 hover:text-gray-700',
          )}
        >
          <div className='flex-shrink-0 mr-3'>
            <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />
          </div>
          Help
        </div>
        <div
          className={classNames(
            'flex items-center px-2 py-2 text-sm font-medium text-gray-700 rounded-md cursor-pointer group hover:bg-gray-100 hover:text-gray-700',
          )}
        >
          <div className='flex-shrink-0 mr-3'>
            <Cog6ToothIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />
          </div>
          Settings
        </div>
      </div>
    </div>
  )
}

export default React.memo(Sidebar)
