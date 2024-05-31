/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
// import "./CustomForm.css"


const CustomForm = ({ fields }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = (data) => {
        console.log("data is fetched : ", data);
        reset();
        // const userData = {
        //     userFirstName: firstName,
        //     userLastName: lastName,
        //     CompanyName: companyName,
        //     userEmail: email,
        //     userPhnNo: phoneNo,
        //     message
        // }
    };

    return (
        <div className="bg-white p-12 rounded-[40px] shadow-lg shadow-black w-auto lg:w-[600px] text-base font-kanit font-light leading-6 tracking-normal text-black">
            <h2 className="text-4xl mb-8 font-syne font-bold">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields?.map((field) => (
                    <div key={field.name} className="mb-4">
                        {/* {field.type != 'checkbox' && <label htmlFor={field.name} className='block mb-2'>{field.label}</label>} */}
                        {field.type === 'text' && (
                            <>
                                <input
                                    type="text"
                                    id={field.name}
                                    autoComplete="on"
                                    {...register(field.name, {
                                        required: field.require, maxLength: {
                                            value: 30,
                                            message: 'you can\'t exceed 30 characters'
                                        },
                                        minLength : {
                                            value: 3,
                                            message: 'character should be between 3 to 30 characters'
                                        }
                                    })}
                                    placeholder={field.placeholder}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black`}
                                    style={{placeholder:"black"}}
                                />
                                <p className='text-red-600 mt-2 text-md font-normal italic'>{errors[field.name]?.message}</p>
                            </>
                        )}
                        {field?.type === 'password' && (
                            <>
                                <input
                                    type="password"
                                    id={field.name}
                                    autoComplete="on"
                                    {...register(field.name)}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black"
                                />
                                <p className='text-red-600 mt-2 text-md font-normal italic'>{errors[field.name]?.message}</p>
                            </>
                        )}
                        {field?.type === 'number' && (
                            <>
                                <input
                                    type="number"
                                    id={field.name}
                                    autoComplete="on"
                                    {...register(field.name, {
                                        pattern: {
                                            value: /^\+?(1|91)?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$|^\+?(91)?[-.\s]?[6-9]\d{9}$/,
                                            message: 'Invalid Number',
                                        }, required : {
                                            value: true,
                                            message: field.require,
                                        }
                                    })}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black"
                                />
                                <p className='text-red-600 mt-2 text-md font-normal italic'>{errors[field.name]?.message}</p>
                            </>
                        )}
                        {field.type === 'email' && (
                            <>
                                <input
                                    type="email"
                                    id={field.name}
                                    autoComplete="on"
                                    {...register(field.name, {
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                                            message: 'Invalid email address',
                                        }, required : {
                                            value: true,
                                            message: 'Email is Required',
                                        }
                                    })}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black"
                                />
                                <p className='text-red-600 mt-2 text-md font-normal italic'>{errors[field.name]?.message}</p>
                            </>
                        )}
                        {field.type === 'select' && (
                            <select
                                id={field.name}
                                {...register(field.name)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            >
                                {field.options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        )}

                        {
                            field.type === 'checkbox' && (
                                <div className='flex justify-start items-start'>
                                    <input
                                        type="checkbox"
                                        id={field.name}
                                        {...register(field.name, {
                                            required: {
                                                value: true,
                                                message: "Check the box"
                                            }
                                        })}

                                        className="mr-3 mt-1"
                                    />
                                    <label htmlFor={field.name} className="block text-black font-light text-[13px]">
                                        {field.label}
                                    </label>


                                </div>

                            )
                        }

                    </div>



                ))}
                <button className="btn btn-primary w-full text-center">
                    Submit
                </button>
            </form>
        </div>


    );
};

export default CustomForm;