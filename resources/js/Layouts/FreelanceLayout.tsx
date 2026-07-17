import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function FreelanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user: any = usePage().props.auth.user;
    const [openMenu, setOpenMenu] = useState(false);
   
    
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white shadow-lg">

                {/* LOGO */}
                <div className="p-6 border-b">

                    <h1 className="text-3xl font-bold text-blue-500">
                        FreelanceApp
                    </h1>

                </div>

                {/* MENU */}
                <nav className="p-5 space-y-3">

                    <Link
                        href="/dashboard"
                        className="block p-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/services"
                        className="block p-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        Jasa Saya
                    </Link>

                    <Link
                        href="/services/create"
                        className="block p-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        Tambah Jasa
                    </Link>

                    <Link
                        href="/bookings"
                        className="block p-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        Pesanan Masuk
                    </Link>

                    <Link
                        href="/freelancer/profile"
                        className="block p-3 rounded-xl hover:bg-gray-100 transition"
                    >
                        Profile
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="block w-full text-left p-3 rounded-xl text-red-500 hover:bg-red-50 transition"
                    >
                        Logout
                    </Link>

                </nav>

            </aside>

            {/* MAIN */}
            <div className="flex-1 flex flex-col">

                {/* NAVBAR */}
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

                    <h2 className="text-2xl font-bold">
                        Dashboard
                    </h2>

                    {/* PROFILE DROPDOWN */}
                    <div className="relative">

                        {/* BUTTON */}
                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className="flex items-center gap-3 bg-white hover:bg-gray-100 px-4 py-2 rounded-xl transition"
                        >

                            {/* FOTO */}
                            {user.photo ? (

                                <img
                                    src={`/storage/${user.photo}`}
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />

                            ) : (

                                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                                    {user.name.charAt(0)}
                                </div>

                            )}

                            {/* INFO */}
                            <div className="text-left">

                                <p className="font-semibold">
                                    {user.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {user.role}
                                </p>

                            </div>

                            {/* ARROW */}
                            <svg
                                className={`w-4 h-4 transition-transform ${
                                    openMenu ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>

                        </button>

                        {/* DROPDOWN */}
                        {openMenu && (

                            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border z-50">

                                {/* HEADER */}
                                <div className="p-5 border-b">

                                    <div className="flex items-center gap-3">

                                        {user.photo ? (

                                            <img
                                                src={`/storage/${user.photo}`}
                                                alt="Profile"
                                                className="w-14 h-14 rounded-full object-cover"
                                            />

                                        ) : (

                                            <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
                                                {user.name.charAt(0)}
                                            </div>

                                        )}

                                        <div>

                                            <p className="font-bold text-lg">
                                                {user.name}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {user.role}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* MENU */}
                                <div className="p-3">

                                    <Link
                                        href="/freelancer/profile"
                                        className="block px-4 py-3 rounded-xl hover:bg-gray-100 transition"
                                    >
                                         Edit Profile
                                    </Link>

                                    <Link
                                        href="/freelancer/profile"
                                        className="block px-4 py-3 rounded-xl hover:bg-gray-100 transition"
                                    >
                                         Ubah Foto Profil
                                    </Link>

                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-red-50 text-red-500 transition"
                                    >
                                         Logout
                                    </Link>

                                </div>

                            </div>

                        )}

                    </div>

                </header>

                {/* CONTENT */}
                <main className="p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}