import React, {useState} from 'react';
import CopyButton from './CopyButton';
import { useQuery } from 'react-query';
import { fetchSecret } from './ApiUtility';
import { Secret } from "./models/secret.model";

interface ShowSecretProps {
    objId: string;
}

const ShowSecret: React.FC<ShowSecretProps> = ({ objId }) => {

    const { data, error, isLoading, isError } = useQuery<Secret, Error>('secretData', () => fetchSecret(objId));
    console.log(data);

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (isError) {
        return <div>
                 The Secret is not available, try again
                 <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={`${process.env.REACT_APP_FE_URL}`}>Go Back</a>
               </div>;
    }
  return (
    <div className="mx-20">
    {data !== undefined && (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center">Show Secret</h2>
            <textarea
                value={data.secret}
                disabled
                className="w-full p-3 border border-gray-300 rounded-lg mx-0">
            </textarea>
            <CopyButton text={data.secret} />
        </>
    )}
   
    </div>
  )
}
export default ShowSecret;

