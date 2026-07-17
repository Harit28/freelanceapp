import ClientLayout from "@/Layouts/ClientLayout";
import { Link } from "@inertiajs/react";

export default function FreelancerProfile({
    freelancer,
    services,
}: any) {

    return (
        <ClientLayout>

            <div className="max-w-6xl mx-auto py-10">

                {/* Header */}
                <div className="bg-white rounded-2xl shadow p-8">

                    <div className="flex items-center gap-6">

                        {
                            freelancer.photo ? (

                                <img
                                    src={`/storage/${freelancer.photo}`}
                                    className="w-32 h-32 rounded-full object-cover"
                                />

                            ) : (

                                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl">
                                    👤
                                </div>

                            )
                        }

                        <div>

                            <h1 className="text-4xl font-bold">
                                {freelancer.name}
                            </h1>

                            <p className="text-gray-500 mt-2">
                                {freelancer.bio || "Belum ada bio."}
                            </p>

                            <div className="mt-4">

                                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl">
                                    {freelancer.skills || "Belum mengisi skill"}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Jasa */}
                <div className="mt-10">

                    <h2 className="text-3xl font-bold mb-6">
                        Jasa yang Ditawarkan
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        {services.map((service: any) => (

                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow overflow-hidden"
                            >

                                {
                                    service.image ? (

                                        <img
                                            src={`/storage/${service.image}`}
                                            className="w-full h-48 object-cover"
                                        />

                                    ) : (

                                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                                            Tidak ada gambar
                                        </div>

                                    )
                                }

                                <div className="p-5">

                                    <h3 className="text-xl font-bold">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-blue-600 font-bold text-xl">
                                        Rp {service.price}
                                    </p>

                                    <Link
                                        href={`/services/${service.id}`}
                                        className="block mt-5 bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl"
                                    >
                                        Lihat Detail
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </ClientLayout>
    );
}