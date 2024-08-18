import React, {useState} from 'react'

interface CopyButtonProps {
    text: string;
}

export const CopyButton:React.FC<CopyButtonProps> = ({ text }) => { 
    const [copied, setCopied] = useState(false); 
    const handleCopy = async () => { 
        try { 
            await navigator.clipboard.writeText(text); 
            setCopied(true); 
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds 
        } catch (err) { 
            console.error('Failed to copy text: ', err); 
        } }; 
        return ( 
         <div> 
            <button onClick={handleCopy} className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600" > 
                {copied ? 'Copied!' : 'Copy to Clipboard'} 
            </button> 
        </div> 
        ); 
    }; 


const ShowSecret: React.FC = () => {
  return (
    <div className="mx-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Show Secret</h2>
    <textarea
        value={`test`}
        disabled
        className="w-full p-3 border border-gray-300 rounded-lg mx-0">
    </textarea>
    <CopyButton text={'hghghghggh'} />
    </div>
  )
}
export default ShowSecret;

