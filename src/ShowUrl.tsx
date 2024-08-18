import React from 'react'
import CopyButton from './CopyButton';
const ShowUrl: React.FC = () => {
  return (
    <div>

    <div className="mx-20">
    <textarea
        value={`test`}
        disabled
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </textarea>
    </div>
    <div className='pt-10'>
    <CopyButton text={'hghghghggh'} />
    </div>
    

    </div>
  )
}
export default ShowUrl;

