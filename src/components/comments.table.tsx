'use client'
import { Comment } from '@/utils/types';
import { EyeOpenIcon } from './icons.component';
import useWindowSize from '@/hooks/useWindowSize';
import { use, useEffect, useState } from 'react';
import CommentModal from './comment.modal';

export default function TableComments({comments}: {comments: Comment[]}) {
    const {width} = useWindowSize();
    const [selectedItem,setSelectedItem] = useState<Comment | null>(null)
    const [isOpen, setIsOpen] = useState(true)
    useEffect(() => {
        if(selectedItem){
            setIsOpen(true)
        }
    }, [selectedItem])

    useEffect(() => {
        if(!isOpen){
            setSelectedItem(null)
        }
    }, [isOpen])
    
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
            <div className="w-full py-2 align-middle sm:px-6 lg:px-8 h-[40rem] max-h-[800px] overflow-y-scroll overflow-x-scroll sm:overflow-x-hidden">
              <table className=" divide-y divide-gray-300">
                <thead>
                  <tr>
                  {width > 410 &&<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Id
                    </th>}
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:block">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span ></span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comments.map((comment) => (
                    <tr key={comment.email}>
                      {width > 410 && <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {comment.id}
                      </td>}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden md:block">{comment.name.substring(0,30)}{comment.name.length > 29 && "..."}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ width < 420 ? `${comment.email.substring(0,25)}...` : comment.email}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <EyeOpenIcon onClick={()=>{setSelectedItem(comment)}}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedItem && <CommentModal isOpen={isOpen} setIsOpen={setIsOpen} item={selectedItem!}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }