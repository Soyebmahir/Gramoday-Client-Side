import React from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';

const ReportForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);
        let {userID,marketID,marketName,cmdtyID,marketType,cmdtyName,priceUnit,convFctr,price}=data
        let report ={userID,marketID,marketName,cmdtyID,marketType,cmdtyName,priceUnit,convFctr,price}
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Report Add successfully');
            reset();
        })
    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center bg-green-200'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Add Report</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">User ID</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="User ID"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("userID", {
                                        required: {
                                            value: true,
                                            message: 'userID is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.userID?.type === 'required' && <span className="label-text-alt text-red-500">{errors.userID.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Market ID</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Market ID"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("marketID", {
                                        required: {
                                            value: true,
                                            message: 'marketID is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.marketID?.type === 'required' && <span className="label-text-alt text-red-500">{errors.marketID.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Market Name</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="Market Name"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("marketName", {
                                        required: {
                                            value: true,
                                            message: 'marketName is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.marketName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.marketName.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Comodity ID</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Comodity ID"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("cmdtyID", {
                                        required: {
                                            value: true,
                                            message: 'cmdtyID is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.cmdtyID?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cmdtyID.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Market Type</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Market Type"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("marketType", {
                                        required: {
                                            value: true,
                                            message: 'market Type Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.marketType?.type === 'required' && <span className="label-text-alt text-red-500">{errors.marketType.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Comodity Name </span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Comodity Name"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("cmdtyName", {
                                        required: {
                                            value: true,
                                            message: 'cmdtyName is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.cmdtyName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cmdtyName.message}</span>}
                                </label>

                                <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price Unit</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="Price Unit"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("priceUnit", {
                                        required: {
                                            value: true,
                                            message: 'priceUnit is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.priceUnit?.type === 'required' && <span className="label-text-alt text-red-500">{errors.priceUnit.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Conversion Factor</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="Conversion factor"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("convFctr", {
                                        required: {
                                            value: true,
                                            message: 'convFctr is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.convFctr?.type === 'required' && <span className="label-text-alt text-red-500">{errors.convFctr.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="Price"
                                    className="input input-bordered input-xs w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                        </form>


                    </div>
                </div>
            </div >
        </div>
    );
};

export default ReportForm;