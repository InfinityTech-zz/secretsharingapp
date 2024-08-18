import React, { useState,useEffect } from 'react'
import ShowUrl from './ShowUrl';

interface OptionGroup {
    label: string;
    options: string[];
  }

export default function AddSecret() {

const [secret, setSecret] = useState('');
const [isSecretCreated, setSecretCreated] = useState(false);

const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Secret submitted:', secret);
}; 

const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  

  const optionGroups: OptionGroup[] = [
    {
      label: 'Group 1',
      options: ['Option 1', 'Option 2'],
    },
    {
      label: 'Group 2',
      options: ['Option 3', 'Option 4'],
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };



  const [isToggledSalt, setIsToggledSalt] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsToggledSalt(!isToggledSalt);
  };



  const [isToggledEmail, setIsToggledEmail] = useState<boolean>(false);

  const toggleSwitchEmail = () => {
    setIsToggledEmail(!isToggledEmail);
  };


  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a Secret</h2>
      {!isSecretCreated ? (
 <form>
 <div className="mb-4">
   <label htmlFor="secret" className="block text-gray-700 font-medium mb-2">
     Enter your secret:
   </label>
   <textarea
     id="secret"
     name="secret"
     value={secret}
     onChange={(e) => setSecret(e.target.value)}
     rows={5}
     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
     placeholder="Type your secret here..."
     required
   ></textarea>
 </div>
 <div className="relative inline-block text-left">
<div>
<label htmlFor="secret" className="block text-gray-700 font-medium mb-2">
     Expires in:
   </label>
 <button
   type="button"
   onClick={toggleDropdown}
   className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
 >
   {selectedOption || 'Select an option'}
 </button>
</div>

{isOpen && (
 <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
   <div className="py-1">
     {optionGroups.map((group, index) => (
       <div key={index}>
         <div className="px-4 py-2 text-sm font-bold text-gray-500">
           {group.label}
         </div>
         {group.options.map((option, index) => (
           <button
             key={index}
             onClick={() => handleOptionClick(option)}
             className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
           >
             {option}
           </button>
         ))}
       </div>
     ))}
   </div>
 </div>
)}
</div>
<div className="flex items-center pt-10">
<div
 className={`relative inline-block w-10 h-6 transition duration-200 ease-in ${
     isToggledSalt ? 'bg-blue-500' : 'bg-gray-300'
 } rounded-full cursor-pointer`}
 onClick={toggleSwitch}
>
 <div
   className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${
     isToggledSalt ? 'translate-x-4' : ''
   }`}
 />
</div>
<label htmlFor="toggle" className="mr-3 text-gray-700 font-medium mx-2">
 Add Optional Passphrase
</label>
</div>
{isToggledSalt && (
<div className="flex flex-col items-start pt-5">
 <input
 id="textInput"
 type="text"
 value={inputValue}
 onChange={handleChange}
 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="add complex salt..."
 />
</div>
)}
<div className="flex items-center pt-10">
<div
 className={`relative inline-block w-10 h-6 transition duration-200 ease-in ${
     isToggledEmail ? 'bg-blue-500' : 'bg-gray-300'
 } rounded-full cursor-pointer`}
 onClick={toggleSwitchEmail}
>
 <div
   className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${
     isToggledEmail ? 'translate-x-4' : ''
   }`}
 />
</div>
<label htmlFor="toggle" className="mr-3 text-gray-700 font-medium mx-2">
 Recieve Email when it is delivered
</label>
</div>
{isToggledEmail && (
<div className="flex flex-col items-start pt-5">
 <input
 id="textInput"
 type="text"
 value={inputValue}
 onChange={handleChange}
 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
 placeholder="enter Email..."
 />
</div>
)}
<div className='pt-10'>
<button
   type="submit"
   disabled={true}
   className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
 >
   Submit
 </button>
</div>

<div className="flex justify-center items-center pt-5">
<svg
 className="animate-spin h-8 w-8 text-blue-500"
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
>
 <circle
   className="opacity-25"
   cx="12"
   cy="12"
   r="10"
   stroke="currentColor"
   strokeWidth="4"
 ></circle>
 <path
   className="opacity-75"
   fill="currentColor"
   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
 ></path>
</svg>
</div>

</form>
      ) : (
        <ShowUrl />
      )}
      
     
    </div>
  )
}
