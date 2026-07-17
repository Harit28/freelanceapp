import FreelanceLayout from "@/Layouts/FreelanceLayout";
import { Link } from "@inertiajs/react";

export default function Dashboard({
    totalServices,
    pendingBookings,
    completedBookings,
    income,
    latestServices,
}: any) {
    return (
        <FreelanceLayout>
            <div className="space-y-8">

                {/* HEADER */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Dashboard Freelancer
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Selamat datang kembali
                    </p>
                </div>

                {/* ================= STATISTICS ================= */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {/* TOTAL JASA */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        border
                        border-gray-200
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        hover:border-blue-500
                        cursor-pointer
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Total Jasa
                                </p>

                                <h2
                                    className="
                                    mt-3
                                    text-5xl
                                    font-bold
                                    text-blue-600
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    "
                                >
                                    {totalServices}
                                </h2>

                            </div>

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-blue-100
                                flex
                                items-center
                                justify-center
                                text-3xl
                                transition-all
                                duration-300
                                group-hover:bg-blue-600
                                group-hover:text-white
                                "
                            >

                                

                            </div>

                        </div>

                        <div
                            className="
                            mt-5
                            text-sm
                            text-gray-400
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            "
                        >

                            Kelola semua jasa Anda →

                        </div>

                    </div>



                    {/* BOOKING PENDING */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        border
                        border-gray-200
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        hover:border-orange-500
                        cursor-pointer
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Booking Pending
                                </p>

                                <h2
                                    className="
                                    mt-3
                                    text-5xl
                                    font-bold
                                    text-orange-500
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    "
                                >
                                    {pendingBookings}
                                </h2>

                            </div>

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-orange-100
                                flex
                                items-center
                                justify-center
                                text-3xl
                                transition-all
                                duration-300
                                group-hover:bg-orange-500
                                group-hover:text-white
                                "
                            >

                                

                            </div>

                        </div>

                        <div
                            className="
                            mt-5
                            text-sm
                            text-gray-400
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            "
                        >

                            Menunggu konfirmasi client

                        </div>

                    </div>



                    {/* BOOKING SELESAI */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        border
                        border-gray-200
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        hover:border-green-500
                        cursor-pointer
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Booking Selesai
                                </p>

                                <h2
                                    className="
                                    mt-3
                                    text-5xl
                                    font-bold
                                    text-green-500
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    "
                                >
                                    {completedBookings}
                                </h2>

                            </div>

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-green-100
                                flex
                                items-center
                                justify-center
                                text-3xl
                                transition-all
                                duration-300
                                group-hover:bg-green-500
                                group-hover:text-white
                                "
                            >

                                

                            </div>

                        </div>

                        <div
                            className="
                            mt-5
                            text-sm
                            text-gray-400
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            "
                        >

                            Semua project berhasil diselesaikan

                        </div>

                    </div>



                    {/* PENGHASILAN */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        border
                        border-gray-200
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        hover:border-yellow-500
                        cursor-pointer
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Penghasilan
                                </p>

                                <h2
                                    className="
                                    mt-3
                                    text-4xl
                                    font-bold
                                    text-yellow-500
                                    transition-all
                                    duration-300
                                    group-hover:scale-105
                                    "
                                >
                                    Rp {income}
                                </h2>

                            </div>

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-yellow-100
                                flex
                                items-center
                                justify-center
                                text-3xl
                                transition-all
                                duration-300
                                group-hover:bg-yellow-500
                                group-hover:text-white
                                "
                            >

                    

                            </div>

                        </div>

                        <div
                            className="
                            mt-5
                            text-sm
                            text-gray-400
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            "
                        >

                            Total pemasukan freelancer

                        </div>

                    </div>

                </div>

                {/* QUICK ACTION */}
                <div className="bg-white rounded-2xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Quick Action
                    </h2>

                    <div className="flex gap-4">

                        <Link
                            href="/services/create"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
                        >
                            Tambah Jasa
                        </Link>

                        <Link
                            href="/services"
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl"
                        >
                            Kelola Jasa
                        </Link>

                        <Link
                            href="/bookings"
                            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-xl"
                        >
                            Pesanan Masuk
                        </Link>

                    </div>

                </div>

                {/* JASA TERBARU */}
                <div className="bg-white rounded-2xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Jasa Terbaru
                    </h2>

                    {latestServices.length === 0 ? (

                        <p className="text-gray-500">
                            Belum ada jasa
                        </p>

                    ) : (

                        <div className="space-y-4">

                            {latestServices.map((service: any) => (

                                <div
                                    key={service.id}
                                    className="border rounded-xl p-4"
                                >

                                    <h3 className="font-bold text-lg">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500">
                                        Rp {service.price}
                                    </p>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>
        </FreelanceLayout>
    );
}