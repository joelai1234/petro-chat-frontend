'use client'
import type { FC, ReactNode } from 'react'
import React from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import s from './style.module.css'
import { StarIcon } from '@/app/components//welcome/massive-component'
import Button from '@/app/components/base/button'

export type ITemplateVarPanelProps = {
  className?: string
  header: ReactNode
  children?: ReactNode | null
  isFold: boolean
}

const TemplateVarPanel: FC<ITemplateVarPanelProps> = ({
  className,
  header,
  children,
  isFold,
}) => {
  return (
    <div className={cn(isFold ? 'border border-indigo-100' : s.boxShodow, className, 'rounded-xl bg-white')}>
      {/* header */}
      <div
        className={cn(isFold && 'rounded-b-xl', 'rounded-t-xl px-6 py-4 bg-white text-xs')}
      >
        {header}
      </div>
      {/* body */}
      {!isFold && children && (
        <div className='p-6 rounded-b-xl'>
          {children}
        </div>
      )}
    </div>
  )
}

export const PanelTitle: FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <div className={cn(className, 'flex items-center space-x-1 text-indigo-600')}>
      <StarIcon />
      <span className='text-xs'>{title}</span>
    </div>
  )
}

export const VarOpBtnGroup: FC<{ className?: string; onConfirm: () => void; onCancel: () => void }> = ({
  className,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation()

  return (
    <div className={cn(className, 'flex mt-3 space-x-2 text-sm mobile:ml-0 tablet:ml-[128px]')}>
      <Button
        className='text-sm'
        type='primary'
        onClick={onConfirm}
      >
        {t('common.operation.save')}
      </Button>
      <Button
        className='text-sm'
        onClick={onCancel}
      >
        {t('common.operation.cancel')}
      </Button>
    </div >
  )
}

export default React.memo(TemplateVarPanel)
