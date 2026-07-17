<?php


use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ServiceApiController;
use App\Http\Controllers\Api\DashboardApiController;
use App\Http\Controllers\Api\BookingApiController;
use App\Http\Controllers\Api\AuthApiController;

// PUBLIC AUTH

Route::post(
    '/register',
    [AuthApiController::class,'register']
);


Route::post(
    '/login',
    [AuthApiController::class,'login']
);




// PROTECTED

Route::middleware('auth:sanctum')->group(function(){


    Route::post(
        '/logout',
        [AuthApiController::class,'logout']
    );


    Route::get(
        '/me',
        [AuthApiController::class,'me']
    );


});

// =======================
// PUBLIC API
// =======================


// API daftar jasa
Route::get(
    '/services',
    [ServiceApiController::class,'index']
);


// API detail jasa
Route::get(
    '/services/{id}',
    [ServiceApiController::class,'show']
);




// =======================
// AUTH API
// =======================


Route::middleware('auth:sanctum')->group(function () {


    // API booking
    Route::post(
        '/bookings',
        [BookingApiController::class,'store']
    );



    // API riwayat booking client
    Route::get(
        '/bookings',
        [BookingApiController::class,'index']
    );



    // API statistik dashboard
    Route::get(
        '/dashboard/stats',
        [DashboardApiController::class,'stats']
    );


});