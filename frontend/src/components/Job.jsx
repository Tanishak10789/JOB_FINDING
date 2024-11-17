import React from 'react'
import { Button } from './ui/Button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate();
    const jobId = "lsekdhjgdsnfvsdkjf";

    // const daysAgoFunction = (mongodbTime) => {
    //     const createdAt = new Date(mongodbTime);
    //     const currentTime = new Date();
    //     const timeDifference = currentTime - createdAt;
    //     return Math.floor(timeDifference/(1000*24*60*60));
    // }
    
    return (
        <div className='p-12 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 Days Ago</p>
                
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://marketplace.canva.com/EAFK6GIdp20/1/0/400w/canva-blue-%26-black-simple-company-logo-8FaKYcbTD_4.jpg"/>
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ut.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=>navigate('/description/${job}')} variant="outline">Details</Button>
                <Button className="w-full py-4 text-white font-semibold bg-gradient-to-r from-[#843c6c] to-[#bd69d2] hover:from-[#9053a4] hover:to-[#71171d] hover:translate-y-[-4px] hover:shadow-xl rounded-lg transition duration-300">
                  Save For Later
                </Button>
            </div>
        </div>
    )
}

export default Job