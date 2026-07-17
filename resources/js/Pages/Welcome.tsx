import { Link,router } from "@inertiajs/react";
import {useState} from "react";


export default function Welcome({services,freelancer}:any){

const [keyword,setKeyword] = useState("");
const [openFaq, setOpenFaq] = useState<number | null>(null);

const faqs = [
    {
        question: "Bagaimana cara memesan jasa?",
        answer: "Pilih jasa yang diinginkan, klik Pesan Jasa, lalu lakukan pembayaran sesuai instruksi."
    },
    {
        question: "Apakah pembayaran aman?",
        answer: "Ya, pembayaran diproses melalui sistem yang aman dan akan diteruskan ke freelancer setelah pekerjaan selesai."
    },
    {
        question: "Apakah bisa melakukan revisi?",
        answer: "Bisa. Jumlah revisi mengikuti ketentuan freelancer yang dipilih."
    },
    {
        question: "Berapa lama pengerjaan project?",
        answer: "Tergantung jenis project dan kesepakatan antara client dengan freelancer."
    }
];
return (

<div className="min-h-screen bg-white">


{/* ================= NAVBAR ================= */}

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">

    <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-center h-20">

            {/* LOGO */}

            <Link href="/" className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">

                    F

                </div>

                <div>

                    <h1 className="text-2xl font-bold text-gray-800">

                        FreelanceApp

                    </h1>

                    <p className="text-xs text-gray-500">

                        Marketplace Freelancer

                    </p>

                </div>

            </Link>



            {/* MENU */}

            <div className="hidden lg:flex items-center gap-8">

                <a
                    href="#services"
                    className="hover:text-blue-600 transition"
                >
                    Services
                </a>

                <a
                    href="#category"
                    className="hover:text-blue-600 transition"
                >
                    Category
                </a>

                <a
                    href="#why"
                    className="hover:text-blue-600 transition"
                >
                    Why Us
                </a>

            </div>



            {/* BUTTON */}

            <div className="flex items-center gap-4">

                <Link
                    href="/login"
                    className="text-gray-700 hover:text-blue-600 font-semibold"
                >
                    Login
                </Link>

                <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl shadow-lg"
                >
                    Join Now
                </Link>

            </div>

        </div>

    </div>

</nav>





{/* ================= HERO ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">

    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-200 blur-3xl opacity-40"></div>



    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

                    🚀 #1 Freelancer Marketplace Indonesia

                </span>



                <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">

                    Temukan

                    <span className="text-blue-600">

                        {" "}Freelancer{" "}

                    </span>

                    Terbaik Untuk

                    Bisnis Anda

                </h1>



                <p className="mt-8 text-xl text-gray-600 leading-9">

                    Bangun website, aplikasi mobile,

                    desain grafis, digital marketing,

                    editing video, hingga kebutuhan

                    digital lainnya hanya dalam

                    satu platform.

                </p>



                {/* SEARCH */}

                <div className="mt-10 bg-white rounded-2xl shadow-xl p-3 flex">

                    <input

                        value={keyword}

                        onChange={(e)=>setKeyword(e.target.value)}

                        placeholder="Cari freelancer atau jasa..."

                        className="flex-1 px-5 outline-none text-lg"

                    />



                    <button

                        onClick={()=>router.get(`/search-services?keyword=${keyword}`)}

                        className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 rounded-xl"

                    >

                        Cari

                    </button>

                </div>



                {/* BUTTON */}

                <div className="mt-8 flex flex-wrap gap-5">

                    <a

                        href="#services"

                        className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl shadow-lg"

                    >

                        Explore Services

                    </a>



                    <Link

                        href="/register"

                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl"

                    >

                        Become Freelancer

                    </Link>

                </div>



                {/* STATS */}

                <div className="grid grid-cols-3 gap-8 mt-14">

                    <div>

                        <h2 className="text-4xl font-bold text-blue-600">

                            500+

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Freelancer

                        </p>

                    </div>



                    <div>

                        <h2 className="text-4xl font-bold text-green-600">

                            900+

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Projects

                        </p>

                    </div>



                    <div>

                        <h2 className="text-4xl font-bold text-yellow-500">

                            4.9★

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Rating

                        </p>

                    </div>

                </div>

            </div>



            {/* RIGHT */}

            <div>

                <div className="bg-white rounded-[40px] shadow-2xl p-10">

                    <img

                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"

                        className="rounded-3xl w-full h-[450px] object-cover"

                    />



                    <div className="grid grid-cols-3 gap-4 mt-6">

                        <div className="bg-blue-50 rounded-2xl p-4 text-center">

                            💻

                            <p className="mt-2 font-semibold">

                                Website

                            </p>

                        </div>



                        <div className="bg-green-50 rounded-2xl p-4 text-center">

                            🎨

                            <p className="mt-2 font-semibold">

                                Design

                            </p>

                        </div>



                        <div className="bg-yellow-50 rounded-2xl p-4 text-center">

                            📱

                            <p className="mt-2 font-semibold">

                                Mobile App

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

{/* CATEGORY */}

<section
    id="category"
    className="px-12 py-16"
>

<h2 className="text-3xl font-bold mb-8">

Kategori Populer

</h2>




<div className="grid md:grid-cols-4 gap-6">


{

[
"Website",
"Design",
"Programming",
"Marketing"

].map((item)=>(


<div

className="bg-gray-100 p-8 rounded-2xl text-center"

key={item}

>


<h3 className="text-xl font-bold">

{item}

</h3>


</div>


))

}


</div>


</section>

{/* ================= FEATURED SERVICES ================= */}

<section
    id="services"
    className="py-24 bg-gray-50"
>

    <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-center mb-12">

            <div>

                <span className="text-blue-600 font-semibold">

                    FEATURED SERVICES

                </span>

                <h2 className="text-5xl font-bold mt-3">

                    Jasa Terpopuler

                </h2>

                <p className="text-gray-500 mt-3">

                    Temukan freelancer terbaik sesuai kebutuhan Anda.

                </p>

            </div>

            <Link

                href="/search-services"

                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"

            >

                Lihat Semua

            </Link>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {

                services.map((service:any)=>(

                    <div

                        key={service.id}

                        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"

                    >

                        {/* IMAGE */}

                        {

                            service.image ?

                            <img

                                src={`/storage/${service.image}`}

                                className="h-60 w-full object-cover"

                            />

                            :

                            <div className="h-60 bg-gray-200 flex items-center justify-center">

                                Tidak ada gambar

                            </div>

                        }



                        <div className="p-6">

                            <div className="flex justify-between">

                                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">

                                    Freelance

                                </span>

                                <span className="text-yellow-500">

                                    ⭐ 4.9

                                </span>

                            </div>



                            <h3 className="text-2xl font-bold mt-5">

                                {service.title}

                            </h3>



                            <p className="text-gray-500 mt-3 line-clamp-2">

                                {service.description}

                            </p>



                            <div className="flex items-center gap-4 mt-6">

                                <img
                                    src={`https://ui-avatars.com/api/?name=${service.user?.name}`}
                                    className="w-12 h-12 rounded-full"
                                />



                                <div>

                                    <p className="font-bold">

                                        {service.user?.name}

                                    </p>

                                    <p className="text-gray-500 text-sm">

                                        Freelancer

                                    </p>

                                </div>

                            </div>



                            <div className="flex justify-between items-center mt-8">

                                <div>

                                    <p className="text-gray-500">

                                        Mulai dari

                                    </p>

                                    <h2 className="text-blue-600 text-2xl font-bold">

                                        Rp {Number(service.price).toLocaleString("id-ID")}

                                    </h2>

                                </div>



                                <Link

                                    href={`/service-detail/${service.id}`}

                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"

                                >

                                    Detail

                                </Link>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    </div>

</section>


{/* ================= WHY CHOOSE US ================= */}

<section
    id="why"
    className="py-24 bg-white"
>

    <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase">

                Why Choose Us

            </p>

            <h2 className="text-5xl font-bold mt-3">

                Kenapa Memilih FreelanceApp?

            </h2>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">

                Kami menghubungkan client dengan freelancer profesional
                yang telah diverifikasi sehingga pekerjaan selesai lebih
                cepat, aman, dan berkualitas.

            </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition">

                <div className="text-5xl">

                    🛡️

                </div>

                <h3 className="font-bold text-2xl mt-5">

                    Aman

                </h3>

                <p className="text-gray-500 mt-3">

                    Pembayaran aman dengan sistem escrow.

                </p>

            </div>



            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition">

                <div className="text-5xl">

                    ⭐

                </div>

                <h3 className="font-bold text-2xl mt-5">

                    Freelancer Terbaik

                </h3>

                <p className="text-gray-500 mt-3">

                    Freelancer telah melalui proses verifikasi.

                </p>

            </div>



            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition">

                <div className="text-5xl">

                    ⚡

                </div>

                <h3 className="font-bold text-2xl mt-5">

                    Cepat

                </h3>

                <p className="text-gray-500 mt-3">

                    Proses pemesanan hanya beberapa menit.

                </p>

            </div>



            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition">

                <div className="text-5xl">

                    💬

                </div>

                <h3 className="font-bold text-2xl mt-5">

                    Support

                </h3>

                <p className="text-gray-500 mt-3">

                    Tim support siap membantu kapan saja.

                </p>

            </div>

        </div>

    </div>

</section>

{/* ================= STATISTICS ================= */}

<section className="bg-blue-600 py-20">

    <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">

            <div>

                <h2 className="text-5xl font-bold">

                    700+

                </h2>

                <p className="mt-3">

                    Freelancer

                </p>

            </div>

            <div>

                <h2 className="text-5xl font-bold">

                    1.500+

                </h2>

                <p className="mt-3">

                    Project

                </p>

            </div>

            <div>

                <h2 className="text-5xl font-bold">

                    450+

                </h2>

                <p className="mt-3">

                    Client

                </p>

            </div>

            <div>

                <h2 className="text-5xl font-bold">

                    98%

                </h2>

                <p className="mt-3">

                    Success Rate

                </p>

            </div>

        </div>

    </div>

</section>

{/* ================= TESTIMONIAL ================= */}

<section className="py-24 bg-gray-50">

    <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

            <h2 className="text-5xl font-bold">

                Apa Kata Mereka?

            </h2>

            <p className="text-gray-500 mt-5">

                Testimoni dari client yang telah menggunakan platform kami.

            </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8 mt-16">

            {

                [

                    {
                        name:"Budi Santoso",
                        text:"Website saya selesai lebih cepat dari perkiraan.",
                    },

                    {
                        name:"Andi Wijaya",
                        text:"Freelancernya profesional dan komunikatif.",
                    },

                    {
                        name:"Siti Rahma",
                        text:"Sangat puas, pasti akan menggunakan lagi.",
                    }

                ].map((item,index)=>(

                    <div

                        key={index}

                        className="bg-white rounded-3xl shadow-lg p-8"

                    >

                        <div className="text-yellow-500 text-xl">

                            ⭐⭐⭐⭐⭐

                        </div>

                        <p className="mt-6 text-gray-600">

                            "{item.text}"

                        </p>

                        <h3 className="font-bold mt-8">

                            {item.name}

                        </h3>

                    </div>

                ))

            }

        </div>

    </div>

</section>

<section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

    <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">

            Siap Memulai Project Anda?

        </h2>

        <p className="mt-6 text-xl">

            Temukan freelancer terbaik dan wujudkan ide Anda hari ini.

        </p>

        <div className="mt-10">

            <Link

                href="/register"

                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition"

            >

                Mulai Sekarang

            </Link>

        </div>

    </div>

</section>

{/* ================= TRUSTED BY ================= */}

<section className="py-20 bg-white">

    <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

            <p className="text-gray-500 uppercase tracking-widest">

                Trusted by leading companies

            </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-12">

            {
                [
                    "Google",
                    "Microsoft",
                    "Amazon",
                    "Shopee",
                    "Tokopedia",
                    "Traveloka"
                ].map((item)=>(

                    <div
                        key={item}
                        className="bg-gray-50 hover:bg-blue-50 transition rounded-2xl p-6 flex justify-center items-center shadow-sm hover:shadow-lg"
                    >

                        <h2 className="text-xl font-bold text-gray-400 hover:text-blue-600 transition">

                            {item}

                        </h2>

                    </div>

                ))
            }

        </div>

    </div>

</section>

<section
id="category"
className="py-24 bg-gray-50"
>

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<h2 className="text-5xl font-bold">

Popular Categories

</h2>

<p className="text-gray-500 mt-4">

Temukan freelancer berdasarkan kategori.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{

[
["💻","Website",120],
["🎨","UI UX Design",80],
["📱","Mobile Apps",65],
["📈","Digital Marketing",150],
["🛒","Marketplace",55],
["🎬","Video Editing",70],
["🤖","AI Developer",25],
["☁️","Cloud Engineer",40],

].map((item:any)=>(

<div

key={item[1]}

className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition p-8"

>

<div className="text-6xl">

{item[0]}

</div>

<h2 className="text-2xl font-bold mt-6">

{item[1]}

</h2>

<p className="text-gray-500 mt-3">

{item[2]} Freelancer

</p>

</div>

))

}

</div>

</div>

</section>

{/* ================= FAQ ================= */}

<section className="py-24 bg-gray-50">

    <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

            <h2 className="text-5xl font-bold">

                Frequently Asked Questions

            </h2>

            <p className="text-gray-500 mt-5">

                Pertanyaan yang paling sering diajukan.

            </p>

        </div>

        <div className="mt-16 space-y-5">

            {
                faqs.map((faq, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow"
                    >

                        <button
                            onClick={() =>
                                setOpenFaq(openFaq === index ? null : index)
                            }
                            className="w-full flex justify-between items-center px-8 py-6"
                        >

                            <span className="font-bold text-lg">

                                {faq.question}

                            </span>

                            <span className="text-2xl">

                                {openFaq === index ? "−" : "+"}

                            </span>

                        </button>

                        {
                            openFaq === index && (

                                <div className="px-8 pb-6 text-gray-600">

                                    {faq.answer}

                                </div>

                            )
                        }

                    </div>

                ))
            }

        </div>

    </div>

</section>

{/* FOOTER */}

<footer className="bg-slate-900 text-white">

    <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div>

                <h2 className="text-3xl font-bold">

                    FreelanceApp

                </h2>

                <p className="text-gray-400 mt-5">

                    Platform marketplace freelancer Indonesia
                    untuk website, desain, aplikasi mobile,
                    digital marketing, dan berbagai kebutuhan digital lainnya.

                </p>

            </div>

            <div>

                <h3 className="font-bold text-xl">

                    Marketplace

                </h3>

                <ul className="space-y-3 mt-6 text-gray-400">

                    <li>Explore Service</li>

                    <li>Freelancer</li>

                    <li>Categories</li>

                    <li>Projects</li>

                </ul>

            </div>

            <div>

                <h3 className="font-bold text-xl">

                    Support

                </h3>

                <ul className="space-y-3 mt-6 text-gray-400">

                    <li>Help Center</li>

                    <li>FAQ</li>

                    <li>Privacy Policy</li>

                    <li>Terms & Conditions</li>

                </ul>

            </div>

            <div>

                <h3 className="font-bold text-xl">

                    Contact

                </h3>

                <ul className="space-y-3 mt-6 text-gray-400">

                    <li>📧 admin@freelanceapp.com</li>

                    <li>📞 +62 812-3456-7890</li>

                    <li>📍 Indonesia</li>

                </ul>

            </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-500">

                © 2026 FreelanceApp. All Rights Reserved.

            </p>

            <div className="flex gap-5 mt-5 md:mt-0">

                <span className="hover:text-blue-400 cursor-pointer">
                    Facebook
                </span>

                <span className="hover:text-blue-400 cursor-pointer">
                    Instagram
                </span>

                <span className="hover:text-blue-400 cursor-pointer">
                    LinkedIn
                </span>

                <span className="hover:text-blue-400 cursor-pointer">
                    Github
                </span>

            </div>

        </div>

    </div>

</footer>




</div>

);


}