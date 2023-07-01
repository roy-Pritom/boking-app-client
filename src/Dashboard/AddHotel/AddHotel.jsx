

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddHotel = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3000/api/hotels', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(info => {
                console.log(info)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${data.type} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                })

            })


    }
    return (
        <div className="">
            <div className="e">

                <div className="card flex-shrink-0  shadow-2xl bg-[#003580] ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PropertyName</span>
                                </label>
                                <input type="text" placeholder="Hotel name"  {...register("name", { required: true })} className="input input-bordered " />
                            </div>
                
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Type</span>
                            </label>
                            <label className="input-group">
                                <span>type</span>
                                <select {...register("type")} className="input input-bordered w-full">
                                    <option value="Hotel">Hotel</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Resort">Resort</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Cabin">Cabin</option>
                                </select>
                            </label>
                        </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">City</span>
                                </label>
                                <input type="text" placeholder="city"  {...register("city", { required: true })} className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Address</span>
                                </label>
                                <input type="text" placeholder="address"  {...register("address", { required: true })} className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Distance</span>
                                </label>
                                <input type="number" placeholder="distance"  {...register("distance", { required: true })} className="input input-bordered " />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PhotoUrl</span>
                                </label>
                                <input type="url" placeholder="photo"  {...register("photos", { required: true })} className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Title</span>
                                </label>
                                <input type="text" placeholder="title"  {...register("title", { required: true })} className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Description</span>
                                </label>
                                <input type="text" placeholder="description"  {...register("desc", { required: true })} className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Price</span>
                                </label>
                                <input type="number" placeholder="price"  {...register("cheapestPrice", { required: true })} className="input input-bordered " />
                            </div>

                        </div>

                        <div className="form-control mt-6 ">
                            <input type="submit" value="Add Property" className="btn btn-warning w-full " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHotel;