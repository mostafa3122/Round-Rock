import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Spinner } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { z } from 'zod';
import ValidationError from './ValidationError';

// Validation Schema using zod
const schema = z.object({
    name: z.string().min(3, "Name must be  at least 3 char"),
    email: z.string().email("Invalid email"),
    phone: z.string()
        .regex(/^(010|011|012|015)[0-9]{8}$/, "Enter a valid Egyptian mobile number")
})
//  Default Form Values
const defaultValues = {
    name: "",
    email: "",
    phone: ""
}

export default function ContactForm() {
    // useForm Setup and connect is with zod 
    const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting } } = useForm({
        defaultValues,
        resolver: zodResolver(schema),
    });

    // Submit Handler
    async function sendData(value) {

        try {

            const data = await axios.post("http://upskilling-egypt.com:3001/contact", value, {
                // const data = await axios.post("https://jsonplaceholder.typicode.com/posts", value,{
                headers: {
                    "Content-Type": "application/json",
                }

            })
            // in succcess
            if (data.status === 200 || data.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "good work",
                    text: "Data Sented successfully!",
                });
                reset();
            } else {
                Swal.fire("Error", "Failed to send form.");
            }
        }
        // in failed
        catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.error(error);
        }
    }
    return (
        // ui
        <form onSubmit={handleSubmit(sendData)} className="flex w-full justify-center items-center max-w-md flex-col gap-3.5">
            <div>
                <input className='input-style'
                    id="name" type="text" placeholder="Name"   {...register("name")} />
                <ValidationError error={errors.name} />
            </div>
            <div>
                <input className='input-style' id="email" type="email" placeholder="Email"  {...register("email")} />
                <ValidationError error={errors.email} />
            </div>
            <div>
                <input className='input-style' id="phone" type="tel" placeholder="Phone"  {...register("phone")} />
                <ValidationError error={errors.phone} />
            </div>
            {/* button make button disabled  if user not enter data  and using spinner*/}
            <button type="submit" disabled={!isValid || isSubmitting} className='cursor-pointer bg-transparent text-black text-lg leading-[100%] border-blue-500 border-[3px] rounded-full  py-4 px-14'>
                {isSubmitting && <Spinner aria-label="Spinner button example" size="sm" light />}
                <span>Send</span>

            </button>

        </form>

    )
}
