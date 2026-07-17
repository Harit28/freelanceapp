import ClientLayout from "@/Layouts/ClientLayout";
import { router, Link } from "@inertiajs/react";

export default function ServiceDetail({ service }: any) {

    const bookService = () => {

        router.post("/bookings", {
            service_id: service.id,
            message: "Saya tertarik dengan jasa ini",
        });

    };

    return (
        <ClientLayout>

            <div className="max-w-5xl mx-auto">

                {/* Tombol Kembali */}
                <Link
                    href="/explore-services"
                    className="inline-block mb-6 text-blue-500 hover:text-blue-700"
                >
                    ← Kembali ke Daftar Jasa
                </Link>

                <div className="bg-white rounded-2xl shadow overflow-hidden">

                    {/* Gambar */}
                    {service.image ? (

                        <img
                            src={`/storage/${service.image}`}
                            alt={service.title}
                            className="w-full h-96 object-cover"
                        />

                    ) : (

                        <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                            Tidak Ada Gambar
                        </div>

                    )}

                    {/* Content */}
                    <div className="p-8">

                        <h1 className="text-4xl font-bold">
                            {service.title}
                        </h1>

                        <p className="text-gray-500 mt-3">
                            Freelancer:
                            <span className="font-semibold ml-2">
                                {service.user?.name}
                            </span>
                        </p>

                        <p className="text-3xl font-bold text-blue-600 mt-5">
                            Rp {Number(service.price).toLocaleString("id-ID")}
                        </p>

                        <div className="mt-8">

                            <h2 className="text-2xl font-bold mb-3">
                                Deskripsi Jasa
                            </h2>

                            <p className="text-gray-700 leading-relaxed">
                                {service.description}
                            </p>

                        </div>

                        {/* Tombol */}
                        <div className="mt-10 flex gap-4">

                            <button
                                onClick={bookService}
                                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl"
                            >
                                Pesan Jasa
                            </button>

                            <Link
                                href="/explore-services"
                                className="bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-xl"
                            >
                                Kembali
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </ClientLayout>
    );
}