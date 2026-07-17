<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'service_id' => 'required',
            'message' => 'nullable'
        ]);
        Booking::create([
            'service_id' => $request->service_id,
            'client_id' => Auth::id(),
            'message' => $request->message,
            'status' => 'pending',
        ]);

        return redirect()->back()
            ->with('success', 'Booking berhasil dikirim');
    }
}