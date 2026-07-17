import { Link,useForm } from "@inertiajs/react";

export default function Edit({ service }: any) {

    const { data, setData, put, processing } = useForm({
        title: service.title,
        description: service.description,
        price: service.price,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        put(`/services/${service.id}`);
    };

    return (
        <div className="p-6 max-w-2xl">
            <Link
            href="/services"
            className="inline-block mb-4 text-blue-500 hover:underline"
        >
            ← Kembali ke Jasa Saya
        </Link>
            <h1 className="text-3xl font-bold mb-6">
                Edit Jasa
            </h1>

            <form onSubmit={submit} className="space-y-5">

                <input
                    type="text"
                    value={data.title}
                    onChange={(e) =>
                        setData('title', e.target.value)
                    }
                    className="border w-full p-3 rounded"
                />

                <textarea
                    value={data.description}
                    onChange={(e) =>
                        setData('description', e.target.value)
                    }
                    className="border w-full p-3 rounded"
                ></textarea>

                <input
                    type="number"
                    value={data.price}
                    onChange={(e) =>
                        setData('price', e.target.value)
                    }
                    className="border w-full p-3 rounded"
                />

                <button
                    disabled={processing}
                    className="bg-blue-500 text-white px-5 py-3 rounded"
                >
                    Update
                </button>

            </form>

        </div>
    );
}