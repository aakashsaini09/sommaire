'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function UploadFromInput ({onSubmit}: 
    UploadFormInputProps) {
  return (
    <>
      <form 
        action=""
        className="flex flex-col gap-6"
        onSubmit={onSubmit}>
            <div className='flex justify-end items-center gap-1.5'>
                <Input 
                    type="file"
                    id='file'
                    name='file'
                    accept='application/pdf'
                    required
                    className='cursor-pointer'
                    />
                <Button>Upload your PDF</Button>
            </div>
        </form>
    </>
  )
}

