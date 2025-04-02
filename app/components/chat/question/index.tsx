'use client'
import type { FC } from 'react'
import React from 'react'
import type { IChatItem } from '../type'
import s from '../style.module.css'

import { Markdown } from '@/app/components/base/markdown'
import ImageGallery from '@/app/components/base/image-gallery'

type IQuestionProps = Pick<IChatItem, 'id' | 'content' | 'useCurrentUserAvatar'> & {
  imgSrcs?: string[]
}

const Question: FC<IQuestionProps> = ({ id, content, useCurrentUserAvatar, imgSrcs }) => {
  const userName = ''
  return (
    <div className='flex justify-end items-start' key={id}>
      <div>
        <div className={`${s.question} relative text-sm text-gray-900`}>
          <div
            className={'mr-2 py-3 px-4 bg-[#1d2a33] rounded-xl'}
          >
            {imgSrcs && imgSrcs.length > 0 && (
              <ImageGallery srcs={imgSrcs} />
            )}
            <Markdown content={content} theme='dark' />
          </div>
        </div>
      </div>
      {useCurrentUserAvatar
        ? (
          <div className='mr-2 w-10 h-10 leading-10 text-center text-white rounded-full shrink-0 bg-primary-600'>
            {userName?.[0].toLocaleUpperCase()}
          </div>
        )
        : (
          <div className={`${s.questionIcon} w-10 h-10 shrink-0 `}></div>
        )}
    </div>
  )
}

export default React.memo(Question)
