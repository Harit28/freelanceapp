import { Link } from "@inertiajs/react";


export default function SearchServices({services,keyword}:any){



return (

<div className="min-h-screen bg-gray-50 p-10">


<h1 className="text-3xl font-bold">

Hasil pencarian:
{keyword}

</h1>




<div className="grid md:grid-cols-3 gap-6 mt-8">


{

services.length === 0 ?


<p>

Tidak ada jasa ditemukan

</p>


:


services.map((service:any)=>(


<div

key={service.id}

className="bg-white rounded-2xl shadow overflow-hidden"

>



{
service.image &&

<img

src={`/storage/${service.image}`}

className="h-48 w-full object-cover"

/>

}




<div className="p-5">


<h2 className="font-bold text-xl">

{service.title}

</h2>



<p>

Oleh {service.user.name}

</p>



<p className="text-blue-600 font-bold mt-3">

Rp {service.price}

</p>



<Link

href={`/services/${service.id}`}

className="block mt-4 bg-blue-600 text-white text-center py-3 rounded-xl"

>

Lihat Detail

</Link>


</div>


</div>


))


}



</div>



</div>

);


}