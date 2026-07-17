import FreelancerLayout from "@/Layouts/FreelanceLayout";
import { router } from "@inertiajs/react";


export default function Bookings({ bookings }: any) {


    const acceptBooking = (id:number) => {

        router.post(`/bookings/${id}/accept`);

    };


    const rejectBooking = (id:number) => {

        router.post(`/bookings/${id}/reject`);

    };


    const startBooking = (id:number) => {

        router.post(`/bookings/${id}/start`);

    };

    const completeBooking = (id:number) => {

    router.post(`/bookings/${id}/complete`);

    };



    return (

        <FreelancerLayout>


            <div className="space-y-6">


                <h1 className="text-3xl font-bold">
                    Pesanan Masuk
                </h1>



                {
                    bookings.length === 0 ? (


                        <div className="bg-white p-6 rounded-xl shadow">

                            Belum ada pesanan

                        </div>


                    ) : (


                        bookings.map((booking:any)=>(


                            <div
                                key={booking.id}
                                className="bg-white rounded-2xl shadow p-6"
                            >



                                <h2 className="text-xl font-bold">

                                    {booking.service.title}

                                </h2>




                                <p className="mt-2 text-gray-600">

                                    Client :

                                    {" "}

                                    {booking.client.name}

                                </p>




                                <p className="mt-3">

                                    Pesan:

                                    <br/>

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
                                            "text-green-500"

                                            :

                                            "text-red-500"
                                        }
                                        `}
                                    >

                                        {booking.status}

                                    </span>

                                </p>





                                {/* ACTION */}

                                {booking.status === "pending" && (


                                    <div className="flex gap-3 mt-5">


                                        <button

                                            onClick={() =>
                                                acceptBooking(booking.id)
                                            }

                                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl"

                                        >

                                            Terima

                                        </button>



                                        <button

                                            onClick={() =>
                                                rejectBooking(booking.id)
                                            }

                                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"

                                        >

                                            Tolak

                                        </button>



                                    </div>


                                )}





                                {booking.status === "accepted" && (


                                    <button

                                        onClick={() =>
                                            startBooking(booking.id)
                                        }

                                        className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"

                                    >

                                        Mulai Kerja

                                    </button>


                                )}

                                {booking.status === "working" && (

                                <button

                                    onClick={() =>
                                        completeBooking(booking.id)
                                    }

                                    className="mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"

                                >

                                    Selesaikan Pekerjaan

                                </button>

                                )}

                            </div>
                        ))
                    )
                }
            </div>
        </FreelancerLayout>
    );

}