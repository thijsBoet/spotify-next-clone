"use client"

import { TbPlayList } from 'react-icons/tb';

const Library = () => {
  const onClick = () => {
    // handle upload later
  }
  return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between px-5 pt-4'>
				<div className='inline-flex items-center gap-x-2'>
					<TbPlayList />
				</div>
			</div>
		</div>
  );
}

export default Library