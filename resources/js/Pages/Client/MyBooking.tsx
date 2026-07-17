import ClientLayout from "@/Layouts/ClientLayout";
import { useForm, usePage } from "@inertiajs/react";


export default function MyBookings({ bookings }: any) {


    const { flash }: any = usePage().props;


    const {
        data,
        setData,
        post,
        processing
    } = useForm({

        rating: 5,

        review: "",

    });



    const submitRating = (bookingId:number) => {


        post(`/bookings/${bookingId}/rating`);


    };



    return (

        <ClientLayout>


            <div className="space-y-6">


                {/* NOTIFIKASI */}

                {
                    flash?.success && (

                        <div className="bg-green-100 text-green-700 p-4 rounded-xl">

                            {flash.success}

                        </div>

                    )
                }




                {/* HEADER */}

                <div>

                    <h1 className="text-3xl font-bold">

                        Riwayat Booking

                    </h1>


                    <p className="text-gray-500">

                        Daftar jasa yang pernah Anda pesan

                    </p>

                </div>





                {/* DATA BOOKING */}


                {
                    !bookings || bookings.length === 0 ? (


                        <div className="bg-white p-6 rounded-2xl shadow">

                            <p className="text-gray-500">

                                Belum ada booking.

                            </p>


                        </div>


                    ) : (


                        bookings.map((booking:any)=>(


                            <div

                                key={booking.id}

                                className="bg-white p-6 rounded-2xl shadow"

                            >



                                <h2 className="text-xl font-bold">

                                    {booking.service.title}

                                </h2>





                                <p className="mt-2 text-gray-600">


                                    Freelancer:

                                    {" "}

                                    {booking.service.user.name}


                                </p>





                                <p className="mt-3">


                                    Pesan:


                                    <br />


                                    {booking.message}


                                </p>





                                <p className="mt-3">


                                    Status:


                                    <span

                                        className={`
                                        ml-2 font-bold

                                        ${
                                            booking.status === "pending"

                                            ?

                                            "text-yellow-500"


                                            :


                                            booking.status === "accepted"

                                            ?

                                            "text-blue-500"


                                            :


                                            booking.status === "working"

                                            ?

                                            "text-green-500"


                                            :


                                            booking.status === "completed"

                                            ?

                                            "text-green-600"


                                            :

                                            "text-red-500"

                                        }

                                        `}

                                    >


                                        {booking.status}


                                    </span>


                                </p>







                                {/* FORM RATING */}

                                {
                                    booking.status === "completed" && (


                                        <div className="mt-6 border-t pt-5">


                                            <h3 className="text-xl font-bold mb-4">

                                                Berikan Rating

                                            </h3>





                                            <select


                                                value={data.rating}


                                                onChange={(e)=>

                                                    setData(
                                                        "rating",
                                                        Number(e.target.value)
                                                    )

                                                }


                                                className="border rounded-lg p-3"


                                            >


                                                <option value={5}>

                                                    ⭐⭐⭐⭐⭐

                                                </option>


                                                <option value={4}>

                                                    ⭐⭐⭐⭐

                                                </option>


                                                <option value={3}>

                                                    ⭐⭐⭐

                                                </option>


                                                <option value={2}>

                                                    ⭐⭐

                                                </option>


                                                <option value={1}>

                                                    ⭐

                                                </option>


                                            </select>







                                            <textarea


                                                value={data.review}


                                                onChange={(e)=>

                                                    setData(
                                                        "review",
                                                        e.target.value
                                                    )

                                                }


                                                placeholder="Tulis komentar..."


                                                className="border w-full mt-4 p-3 rounded-xl"


                                            />








                                            <button


                                                disabled={processing}


                                                onClick={() =>

                                                    submitRating(booking.id)

                                                }


                                                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"


                                            >


                                                Simpan Rating


                                            </button>



                                        </div>


                                    )
                                }




                            </div>



                        ))


                    )

                }



            </div>


        </ClientLayout>

    );

}