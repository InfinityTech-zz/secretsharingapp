import React from 'react'
import CopyButton from './CopyButton';
const ShowUrl: React.FC = () => {
  return (
    <div className="mx-20">
    <textarea
        value={`test`}
        disabled
        className="w-full p-3 border border-gray-300 rounded-lg mx-0">
    </textarea>
    <CopyButton text={'hghghghggh'} />
    </div>
  )
}
export default ShowUrl;

