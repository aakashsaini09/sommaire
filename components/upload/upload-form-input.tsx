'use client'
import React, { forwardRef } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  Loading: boolean;
}
const UploadFormInput = forwardRef<HTMLInputElement, UploadFormInputProps>(({ onSubmit, Loading}, ref) => {
  return (
    <>
      <form 
        className="flex flex-col gap-6"
        onSubmit={onSubmit}>
            <div className='flex justify-end items-center gap-1.5'>
                <Input 
                    type="file"
                    id='file'
                    name='file'
                    accept='application/pdf'
                    required
                    className={cn(Loading && 'opacity-50 cursor-not-allowed')}
                    ref={ref}
                    disabled={Loading}
                    />
                <Button disabled={Loading}>{
                  Loading ? (
                  <><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Processing...</>
                  ) : ('Upload your PDF')}</Button>
            </div>
        </form>
    </>
  )
})

UploadFormInput.displayName = 'UploadFormInput';
export default UploadFormInput;

