<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class BookingApiController extends Controller
{


    public function store(Request $request)
    {


        $request->validate([

            'service_id'=>'required',

            'message'=>'nullable'

        ]);



        $booking = Booking::create([

            'service_id'=>$request->service_id,

            'client_id'=>Auth::id(),

            'message'=>$request->message,

            'status'=>'pending'

        ]);



        return response()->json([


            'success'=>true,


            'message'=>'Booking berhasil dibuat',


            'data'=>$booking


        ]);

    }



    public function index()
    {


        $bookings = Booking::with([
            'service',
            'client'
        ])
        ->where(
            'client_id',
            Auth::id()
        )
        ->latest()
        ->get();



        return response()->json([

            'success'=>true,

            'data'=>$bookings

        ]);


    }


}