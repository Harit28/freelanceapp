import { Link,useForm } from "@inertiajs/react";

export default function Create() {


    const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    price: '',
    image: null as File | null,
});

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/services');
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
                Tambah Jasa
            </h1>

            <form onSubmit={submit} className="space-y-5">

                <div>
                    <label className="block mb-2">
                        Judul Jasa
                    </label>
                    
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) =>
                            setData('title', e.target.value)
                        }
                        className="border w-full p-3 rounded"
                    />

                    {errors.title && (
                        <div className="text-red-500 mt-1">
                            {errors.title}
                        </div>
                    )}
                </div>
                    
                <div>
                    <label className="block mb-2">
                        Deskripsi
                    </label>

                    <textarea
                        value={data.description}
                        onChange={(e) =>
                            setData('description', e.target.value)
                        }
                        className="border w-full p-3 rounded"
                    ></textarea>

                    {errors.description && (
                        <div className="text-red-500 mt-1">
                            {errors.description}
                        </div>
                    )}
                </div>
                
                <div>
                    <label className="block mb-2">
                        Harga
                    </label>

                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) =>
                            setData('price', e.target.value)
                        }
                        className="border w-full p-3 rounded"
                    />
                    

                    {errors.price && (
                        <div className="text-red-500 mt-1">
                            {errors.price}
                        </div>
                    )}
                </div>
                
                <div>
    <label className="block mb-2">
        Gambar Jasa
    </label>

    <input
        type="file"
        onChange={(e) =>
            setData('image', e.target.files?.[0] || null)
        }
        className="border w-full p-3 rounded"
    />

    {errors.image && (
        <div className="text-red-500 mt-1">
            {errors.image}
        </div>
    )}
</div>




                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white px-5 py-3 rounded"
                >
                    Simpan Jasa
                    
                </button>
                
            </form>
        </div>
    );
}