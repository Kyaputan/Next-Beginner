'use client';
import { createCamp } from "@/utils/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus();
    
    return (
        <button 
            type="submit" 
            disabled={pending}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" >
            {pending ? 'Creating...' : 'Create Camp'}
        </button>
    );
};

const Form = () => {
const [message,formAction] = useActionState(createCamp,null);


    return (
        <>
        { message && <h1>{message}</h1> } 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form action={formAction} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Camping Form
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Camping Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="title"
                        placeholder="Camping Name"
                        defaultValue="Korat Route 3060"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="location"
                        placeholder="Location"
                        defaultValue="Korat"
                    />
                </div>

                <SubmitButton />
            </form>
        </div>
        </>
    );
};

export default Form;
