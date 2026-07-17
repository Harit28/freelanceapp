import InputError from "@/Components/InputError";
import AuthLayout from "@/Layouts/AuthLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    Briefcase,
} from "lucide-react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthLayout>

            <Head title="Login" />

            {status && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="space-y-6"
            >

                {/* LOGO */}

                <div className="text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl">

                        <Briefcase
                            className="text-white"
                            size={38}
                        />

                    </div>

                    <h1 className="mt-6 text-3xl font-bold text-gray-800">

                        Selamat Datang 

                    </h1>

                    <p className="mt-3 text-gray-500">

                        Login untuk mengelola project dan jasa Anda.

                    </p>

                </div>

                {/* EMAIL */}

                <div>

                    <label className="mb-2 block font-semibold text-gray-700">

                        Email

                    </label>

                    <div className="relative">

                        <Mail
                            size={20}
                            className="absolute left-4 top-4 text-gray-400"
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
                            bg-white
                            py-3
                            pl-12
                            pr-4
                            outline-none
                            transition
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

                {/* PASSWORD */}

                <div>

                    <label className="mb-2 block font-semibold text-gray-700">

                        Password

                    </label>

                    <div className="relative">

                        <Lock
                            size={20}
                            className="absolute left-4 top-4 text-gray-400"
                        />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Masukkan password..."
                            className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            py-3
                            pl-12
                            pr-12
                            outline-none
                            transition
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-3 text-gray-500 hover:text-blue-600"
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

                            {/* REMEMBER & FORGOT */}

                <div className="flex items-center justify-between">

                    <label className="flex items-center gap-2 text-sm text-gray-600">

                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />

                        Ingat saya

                    </label>

                    {canResetPassword && (

                        <Link
                            href={route("password.request")}
                            className="text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                            Lupa Password?
                        </Link>

                    )}

                </div>

                {/* LOGIN BUTTON */}

                <button
                    type="submit"
                    disabled={processing}
                    className="
                        w-full
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        py-3
                        font-semibold
                        text-white
                        shadow-lg
                        transition
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-xl
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                    "
                >

                    {processing ? "Sedang Masuk..." : "Masuk"}

                </button>

                {/* DIVIDER */}

                <div className="relative">

                    <div className="absolute inset-0 flex items-center">

                        <div className="w-full border-t border-gray-300"></div>

                    </div>

                    <div className="relative flex justify-center text-sm">

                        <span className="bg-white px-4 text-gray-500">
                            atau
                        </span>

                    </div>

                </div>

                {/* GOOGLE LOGIN (Coming Soon) */}

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
                        py-3
                        font-medium
                        transition
                        hover:bg-gray-50
                    "
                >

                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="h-5 w-5"
                        alt="Google"
                    />

                    Login dengan Google

                </button>

                {/* REGISTER */}

                <div className="pt-4 text-center text-gray-600">

                    Belum punya akun?

                    <Link
                        href={route("register")}
                        className="ml-2 font-bold text-blue-600 hover:text-blue-700"
                    >
                        Daftar Sekarang
                    </Link>

                </div>

            </form>

        </AuthLayout>

    );

}    