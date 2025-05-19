'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
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
        onClick={onSubmit}>
            <input type="file" />
            <Button>Upload your PDF</Button>
        </form>
    </>
  )
}

