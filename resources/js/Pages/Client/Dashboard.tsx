import ClientLayout from "@/Layouts/ClientLayout";
import { Link } from "@inertiajs/react";

export default function Dashboard({
    totalBookings,
    activeBookings,
    completedBookings,
}: any) {

    return (
        <ClientLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">
                        Dashboard Client
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Temukan freelancer terbaik untuk proyek Anda
                    </p>

                </div>

                {/* ================= STATISTICS ================= */}

                <div className="grid md:grid-cols-3 gap-6">

                    {/* TOTAL BOOKING */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        shadow-md
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:shadow-2xl
                        hover:scale-105
                        cursor-pointer
                        border
                        border-transparent
                        hover:border-blue-500
                        "
                    >

                        <h2 className="text-gray-500">
                            Total Booking
                        </h2>

                        <p
                            className="
                            text-5xl
                            font-bold
                            mt-4
                            text-blue-500
                            transition-all
                            duration-300
                            group-hover:scale-110
                            "
                        >
                            {totalBookings}
                        </p>

                        <div
                            className="
                            mt-5
                            h-1
                            w-0
                            bg-blue-500
                            transition-all
                            duration-300
                            group-hover:w-full
                            rounded-full
                            "
                        ></div>

                    </div>

                    {/* BOOKING AKTIF */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        shadow-md
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:shadow-2xl
                        hover:scale-105
                        cursor-pointer
                        border
                        border-transparent
                        hover:border-green-500
                        "
                    >

                        <h2 className="text-gray-500">
                            Booking Aktif
                        </h2>

                        <p
                            className="
                            text-5xl
                            font-bold
                            mt-4
                            text-green-500
                            transition-all
                            duration-300
                            group-hover:scale-110
                            "
                        >
                            {activeBookings}
                        </p>

                        <div
                            className="
                            mt-5
                            h-1
                            w-0
                            bg-green-500
                            transition-all
                            duration-300
                            group-hover:w-full
                            rounded-full
                            "
                        ></div>

                    </div>

                    {/* BOOKING SELESAI */}

                    <div
                        className="
                        group
                        bg-white
                        rounded-2xl
                        shadow-md
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:shadow-2xl
                        hover:scale-105
                        cursor-pointer
                        border
                        border-transparent
                        hover:border-purple-500
                        "
                    >

                        <h2 className="text-gray-500">
                            Booking Selesai
                        </h2>

                        <p
                            className="
                            text-5xl
                            font-bold
                            mt-4
                            text-purple-500
                            transition-all
                            duration-300
                            group-hover:scale-110
                            "
                        >
                            {completedBookings}
                        </p>

                        <div
                            className="
                            mt-5
                            h-1
                            w-0
                            bg-purple-500
                            transition-all
                            duration-300
                            group-hover:w-full
                            rounded-full
                            "
                        ></div>

                    </div>

                </div>

                <div className="bg-white p-6 rounded-2xl shadow">

                    <h2 className="text-2xl font-bold mb-5">
                        Quick Action
                    </h2>

                    <div className="flex gap-4">

                        <Link
                            href="/explore-services"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
                        >
                            Cari Freelancer
                        </Link>

                        <Link
                            href="/my-bookings"
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl"
                        >
                            Riwayat Booking
                        </Link>

                    </div>

                </div>

            </div>

        </ClientLayout>
    );
}