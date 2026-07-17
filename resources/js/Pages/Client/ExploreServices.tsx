import ClientLayout from "@/Layouts/ClientLayout";
import { router, Link } from "@inertiajs/react";

export default function ExploreServices({ services }: any) {

    const bookService = (serviceId: number) => {

        router.post("/bookings", {
            service_id: serviceId,
            message: "Saya tertarik dengan jasa ini",
        });

    };

    return (
        <ClientLayout>

            <div className="space-y-6">

                {/* HEADER */}
                <div>

                    <h1 className="text-3xl font-bold">
                        Cari Jasa Freelancer
                    </h1>

                    <p className="text-gray-500">
                        Temukan jasa terbaik sesuai kebutuhan Anda
                    </p>

                </div>

                {/* LIST JASA */}
                <div className="grid md:grid-cols-3 gap-6">

                    {services.map((service: any) => (

                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow overflow-hidden"
                        >

                            {/* GAMBAR */}
                            {service.image ? (

                                <img
                                    src={`/storage/${service.image}`}
                                    alt={service.title}
                                    className="w-full h-52 object-cover"
                                />

                            ) : (

                                <div className="h-52 bg-gray-200 flex items-center justify-center">
                                    Tidak Ada Gambar
                                </div>

                            )}

                            {/* CONTENT */}
                            <div className="p-5">

                                <h2 className="text-xl font-bold">
                                    {service.title}
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    Oleh: {service.user?.name}
                                </p>

                                <p className="mt-3 line-clamp-3">
                                    {service.description}
                                </p>

                                <p className="mt-4 text-blue-600 font-bold text-xl">
                                    Rp {Number(service.price).toLocaleString("id-ID")}
                                </p>

                                {/* BUTTON */}
                                <div className="mt-5 flex gap-3">

                                    <Link
                                        href={`/services/${service.id}`}
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-xl"
                                    >
                                        Lihat Detail
                                    </Link>

                                    <button
                                        onClick={() => bookService(service.id)}
                                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl"
                                    >
                                        Pesan Jasa
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </ClientLayout>
    );
}