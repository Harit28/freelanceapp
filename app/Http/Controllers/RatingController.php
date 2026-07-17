<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{


    public function store(Request $request, Booking $booking)
    {


        Rating::create([

            'booking_id' => $booking->id,

            'client_id' => Auth::id(),

            'freelancer_id' => $booking->service->user_id,

            'rating' => $request->rating,

            'review' => $request->review,

        ]);


        return back()->with(
    'success',
    'Rating berhasil disimpan'
);

    }


}