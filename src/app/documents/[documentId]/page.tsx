import React from 'react';
import { Editor } from './editor';
import { Toolbar } from './toolbar';

interface DocumentIndPageProps{
    params: Promise<{ documentId: string }>;
};

const page = async ({params}: DocumentIndPageProps) => {
    const {documentId} = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar/>
        <Editor/>
    </div>
  )
}

export default page