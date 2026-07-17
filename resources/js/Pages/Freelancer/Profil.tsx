import FreelanceLayout from "@/Layouts/FreelanceLayout";
import { Link,useForm } from "@inertiajs/react";

export default function Profile({ user }: any) {

    const { data, setData, post, processing } = useForm({
        name: user.name || '',
        bio: user.bio || '',
        skills: user.skills || '',
        photo: null as File | null,
    });

    const submit = (e: React.FormEvent) => {

        e.preventDefault();

        post('/freelancer/profile');

    };

    return (
        <FreelanceLayout>

            <div className="max-w-3xl">
                <Link
                    href="/freelancer/dashboard"
                    className="inline-block mb-4 text-blue-500 hover:text-blue-700"
                >
                    ← Kembali ke Dashboard
                </Link>
                <h1 className="text-4xl font-bold mb-8">
                    Profile Freelancer
                </h1>

                <form
                    onSubmit={submit}
                    className="bg-white rounded-2xl shadow p-8 space-y-6"
                >

                    {/* NAMA */}
                    <div>

                        <label className="block mb-2 font-semibold">
                            Nama
                        </label>

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData('name', e.target.value)
                            }
                            className="border w-full p-3 rounded-xl"
                        />

                    </div>

                    {/* BIO */}
                    <div>

                        <label className="block mb-2 font-semibold">
                            Bio
                        </label>

                        <textarea
                            value={data.bio}
                            onChange={(e) =>
                                setData('bio', e.target.value)
                            }
                            className="border w-full p-3 rounded-xl h-32"
                        ></textarea>

                    </div>

                    {/* SKILLS */}
                    <div>

                        <label className="block mb-2 font-semibold">
                            Skills
                        </label>

                        <input
                            type="text"
                            value={data.skills}
                            onChange={(e) =>
                                setData('skills', e.target.value)
                            }
                            placeholder="Laravel, React, UI Design"
                            className="border w-full p-3 rounded-xl"
                        />

                    </div>

                    {/* FOTO */}
                    <div>

                        <label className="block mb-2 font-semibold">
                            Foto Profile
                        </label>

                        <input
                            type="file"
                            onChange={(e) =>
                                setData(
                                    'photo',
                                    e.target.files?.[0] || null
                                )
                            }
                            className="border w-full p-3 rounded-xl"
                        />

                    </div>

                    {/* BUTTON */}
                    <button
                        disabled={processing}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
                    >
                        Simpan Profile
                    </button>

                </form>

            </div>

        </FreelanceLayout>
    );
}