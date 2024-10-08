import React from 'react';
import { Button } from './Button';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';

interface DialogProps {
  isOpen: boolean
  title?: string
  onConfirm: () => void
  onCancel: () => void
  children: React.ReactNode
  isLoading?: boolean
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, title, onConfirm, onCancel, children, isLoading }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 max-w-sm w-full flex flex-col gap-7">
        <p className='font-bold'>{title}</p>
        
        { children }

        <div className="flex justify-end gap-2">
          <Button
            onClick={onCancel} 
            endContent={<XMarkIcon className='w-4' />}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm} 
            endContent={<CheckIcon className='w-4' />}
            disabled={isLoading}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
