import { Comment } from '@/utils/types'
import { Button, CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { CloseIcon } from './icons.component'

export default function CommentModal({ isOpen, setIsOpen, item }: { isOpen: boolean, setIsOpen: (val: boolean) => void, item: Comment }) {


    return (
        <>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => { setIsOpen(false) }} >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white flex justify-between">
                                <p>Comment with id: #{item.id}</p> <CloseIcon onClick={() => { setIsOpen(false) }} />
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50 font-bold">
                            Name:<span className='mt-2 text-sm/6 text-white/50 font-normal'> {item.name}.</span>  
                            </p>
                            <p className="mt-2 text-sm/6 text-white/50 font-bold">
                            Email: <a href={`mailto:${item.email}`} className='mt-2 text-sm/6 text-white/50 font-normal underline'>{item.email}.</a> 
                            </p>
                            <div>
                                <p className='mt-2 text-sm/6 text-white/50 font-bold'>Comment:</p>
                                <p className="mt-2 text-sm/6 text-white/50 border border-white/50 p-2 rounded-md">
                                    {item.body}.
                                </p>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
