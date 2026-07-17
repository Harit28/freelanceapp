import { Link, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ services }: any) {

    const deleteService = (id: number) => {

        if (confirm('Yakin ingin menghapus jasa ini?')) {
            router.delete(`/services/${id}`);
        }

    };

    return (
        <AppLayout>

            <div className="min-h-screen bg-gray-100 p-6">
            <Link
                href="/dashboard"
                className="inline-block mb-4 text-blue-500 hover:underline"
            >
                ← Kembali ke Dashboard
            </Link>
                {/* HEADER */}
                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">
                            Jasa Saya
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Kelola semua jasa freelance Anda
                        </p>
                    </div>

                    <Link
                        href="/services/create"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl shadow"
                    >
                        + Tambah Jasa
                    </Link>

                </div>

                {/* EMPTY STATE */}
                {services.length === 0 ? (

                    <div className="bg-white rounded-2xl shadow p-12 text-center">

                        <h2 className="text-2xl font-bold text-gray-700">
                            Belum Ada Jasa
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Silakan tambahkan jasa freelance pertama Anda 🚀
                        </p>

                        <Link
                            href="/services/create"
                            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
                        >
                            Tambah Jasa
                        </Link>

                    </div>

                ) : (

                    /* LIST SERVICE */
                    <div className="grid md:grid-cols-3 gap-6">

                        {services.map((service: any) => (

                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                            >

                                {/* IMAGE */}
                                {service.image ? (

                                    <img
                                        src={`/storage/${service.image}`}
                                        alt={service.title}
                                        className="w-full h-52 object-cover"
                                    />

                                ) : (

                                    <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-400">
                                        Tidak Ada Gambar
                                    </div>

                                )}

                                {/* CONTENT */}
                                <div className="p-5">

                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {service.title}
                                    </h2>

                                    <p className="text-gray-500 mt-3 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex justify-between items-center">

                                        <p className="text-2xl font-bold text-blue-500">
                                            Rp {service.price}
                                        </p>

                                        <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                                            Aktif
                                        </span>

                                    </div>

                                    {/* BUTTON */}
                                    <div className="flex gap-3 mt-6">

                                        <Link
                                            href={`/services/${service.id}/edit`}
                                            className="flex-1 text-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => deleteService(service.id)}
                                            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                                        >
                                            Hapus
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </AppLayout>
    );
}