import InputError from "@/Components/InputError";
import AuthLayout from "@/Layouts/AuthLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Briefcase,
    Users,
} from "lucide-react";

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({

        name: "",

        email: "",

        role: "client",

        password: "",

        password_confirmation: "",

    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submit: FormEventHandler = (e) => {

        e.preventDefault();

        post(route("register"), {

            onFinish: () =>

                reset("password", "password_confirmation"),

        });

    };

    return (

        <AuthLayout>

            <Head title="Register" />

            <form
                onSubmit={submit}
                className="space-y-4"
            >

                {/* HEADER */}

                <div className="text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">

                        <Briefcase
                            className="text-white"
                            size={28}
                        />

                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-gray-800">

                        Buat Akun Baru

                    </h1>

                    <p className="mt-2 text-gray-500">

                        Bergabung sebagai Client atau Freelancer.

                    </p>

                </div>

                {/* NAMA */}

                <div>

                    <label className="mb-2 block font-semibold text-gray-700">

                        Nama Lengkap

                    </label>

                    <div className="relative">

                        <User
                            size={20}
                            className="absolute left-4 top-3 text-gray-400"
                        />

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            placeholder="Masukkan nama..."
                            className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            py-2.5
                            pl-12
                            pr-4
                            outline-none
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                            "
                        />

                    </div>

                    <InputError
                        message={errors.name}
                        className="mt-2"
                    />

                </div>

                {/* EMAIL */}

                <div>

                    <label className="mb-2 block font-semibold text-gray-700">

                        Email

                    </label>

                    <div className="relative">

                        <Mail
                            size={20}
                            className="absolute left-4 top-3 text-gray-400"
                        />

                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                            placeholder="Masukkan email..."
                            className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            py-2.5
                            pl-12
                            pr-4
                            outline-none
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                            "
                        />

                    </div>

                    <InputError
                        message={errors.email}
                        className="mt-2"
                    />

                </div>

                                {/* ROLE */}

                <div>

                    <label className="mb-3 block font-semibold text-gray-700">

                        Daftar Sebagai

                    </label>

                    <div className="grid grid-cols-2 gap-4">

                        {/* CLIENT */}

                        <button
                            type="button"
                            onClick={() => setData("role", "client")}
                            className={`
                                rounded-2xl
                                border-2
                                p-5
                                text-left
                                transition
                                ${
                                    data.role === "client"
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 hover:border-blue-300"
                                }
                            `}
                        >

                            <Users
                                size={34}
                                className={`mb-3 ${
                                    data.role === "client"
                                        ? "text-blue-600"
                                        : "text-gray-500"
                                }`}
                            />

                            <h3 className="font-bold text-lg">

                                Client

                            </h3>

                            <p className="mt-2 text-sm text-gray-500">

                                Saya ingin mencari freelancer untuk
                                mengerjakan project saya.

                            </p>

                        </button>

                        {/* FREELANCER */}

                        <button
                            type="button"
                            onClick={() =>
                                setData("role", "freelancer")
                            }
                            className={`
                                rounded-2xl
                                border-2
                                p-5
                                text-left
                                transition
                                ${
                                    data.role === "freelancer"
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 hover:border-blue-300"
                                }
                            `}
                        >

                            <Briefcase
                                size={34}
                                className={`mb-3 ${
                                    data.role === "freelancer"
                                        ? "text-blue-600"
                                        : "text-gray-500"
                                }`}
                            />

                            <h3 className="font-bold text-lg">

                                Freelancer

                            </h3>

                            <p className="mt-2 text-sm text-gray-500">

                                Saya ingin menawarkan jasa dan
                                mendapatkan project.

                            </p>

                        </button>

                    </div>

                </div>

                {/* PASSWORD */}

                <div>

                    <label className="mb-2 block font-semibold text-gray-700">

                        Password

                    </label>

                    <div className="relative">

                        <Lock
                            size={20}
                            className="absolute left-4 top-3 text-gray-400"
                        />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={data.password}
                            onChange={(e) =>
                                setData(
                                    "password",
                                    e.target.value
                                )
                            }
                            placeholder="Masukkan password..."
                            className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            py-2.5
                            pl-12
                            pr-12
                            outline-none
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="absolute right-4 top-3 text-gray-500"
                        >

                            {showPassword ? (
                                <EyeOff size={22} />
                            ) : (
                                <Eye size={22} />
                            )}

                        </button>

                    </div>

                    <InputError
                        message={errors.password}
                        className="mt-2"
                    />

                </div>
                {/* CONFIRM PASSWORD */}

                <div>

                    <label className="mb-2 block font-semibold text-gray-700">

                        Konfirmasi Password

                    </label>

                    <div className="relative">

                        <Lock
                            size={20}
                            className="absolute left-4 top-3 text-gray-400"
                        />

                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData(
                                    "password_confirmation",
                                    e.target.value
                                )
                            }
                            placeholder="Ulangi password..."
                            className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            py-2.5
                            pl-12
                            pr-12
                            outline-none
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            className="absolute right-4 top-3 text-gray-500 hover:text-blue-600"
                        >

                            {showConfirmPassword ? (
                                <EyeOff size={22} />
                            ) : (
                                <Eye size={22} />
                            )}

                        </button>

                    </div>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />

                </div>

                {/* BUTTON REGISTER */}

                <button
                    type="submit"
                    disabled={processing}
                    className="
                        w-full
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        py-2.5
                        font-semibold
                        text-white
                        shadow-lg
                        transition
                        hover:scale-[1.02]
                        hover:shadow-xl
                        disabled:opacity-60
                    "
                >

                    {processing
                        ? "Mendaftarkan..."
                        : "Buat Akun"}

                </button>

                {/* DIVIDER */}

                <div className="relative">

                    <div className="absolute inset-0 flex items-center">

                        <div className="w-full border-t border-gray-300"></div>

                    </div>

                    <div className="relative flex justify-center">

                        <span className="bg-white px-4 text-sm text-gray-500">

                            atau

                        </span>

                    </div>

                </div>

                {/* GOOGLE */}

                <button
                    type="button"
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        border
                        border-gray-300
                        bg-white
                        py-2.5
                        transition
                        hover:bg-gray-50
                    "
                >

                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="h-5 w-5"
                        alt=""
                    />

                    Daftar dengan Google

                </button>

                {/* LOGIN */}

                <div className="text-center text-sm text-gray-600">

                    Sudah punya akun?

                    <Link
                        href={route("login")}
                        className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
                    >

                        Login

                    </Link>

                </div>

            </form>

        </AuthLayout>

    );

}


