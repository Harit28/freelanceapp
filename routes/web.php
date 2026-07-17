<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\RatingController;
use App\Models\Service;
use App\Models\Booking;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Welcome Page
|--------------------------------------------------------------------------
*/

Route::get('/', function () {

    $services = Service::with('user')
        ->latest()
        ->take(6)
        ->get();

    $freelancers = User::where('role', 'freelancer')
        ->latest()
        ->take(4)
        ->get();

    return Inertia::render('Welcome', [

        'services' => $services,

        'freelancers' => $freelancers,

        'canLogin' => Route::has('login'),

        'canRegister' => Route::has('register'),

    ]);

});

Route::get('/search-services', function(\Illuminate\Http\Request $request){


    $keyword = $request->keyword;


    $services = Service::with('user')

        ->where('title','like',"%$keyword%")

        ->orWhere('description','like',"%$keyword%")

        ->latest()

        ->get();



    return Inertia::render(
        'SearchServices',
        [
            'services'=>$services,
            'keyword'=>$keyword
        ]
    );

});
/*
Route::get('/services/{service}', function (Service $service) {

    $service->load('user');

    return Inertia::render('Client/ServiceDetail', [
        'service' => $service
    ]);

});
*/
/*
|--------------------------------------------------------------------------
| Dashboard Redirect by Role
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {

    if (request()->user()->role === 'freelancer') {
        return redirect('/freelancer/dashboard');
    }

    return redirect('/client/dashboard');

})->middleware(['auth'])->name('dashboard');

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Freelancer Dashboard
    |--------------------------------------------------------------------------
    */
    Route::get('/freelancer/dashboard', function () {

    $services = Service::where(
        'user_id',
        Auth::id()
    );

    return Inertia::render(
        'Freelancer/Dashboard',
        [
            'totalServices' => $services->count(),

            'pendingBookings' => 0,

            'completedBookings' => 0,

            'income' => 0,

            'latestServices' => $services
                ->latest()
                ->take(5)
                ->get(),
        ]
    );

})->middleware('auth');
    Route::get('/freelancer/profile', function () {

    return Inertia::render('Freelancer/Profil', [
        'user' => request()->user()
    ]);

});

Route::post('/freelancer/profile', function (\Illuminate\Http\Request $request) {

    $user = $request->user();

    $photoPath = $user->photo;

    if ($request->hasFile('photo')) {

        $photoPath = $request->file('photo')
            ->store('profiles', 'public');

    }

    $user->update([
        'name' => $request->name,
        'bio' => $request->bio,
        'skills' => $request->skills,
        'photo' => $photoPath,
    ]);

    return redirect()->back();

});

    /*
|--------------------------------------------------------------------------
| Client Dashboard
|--------------------------------------------------------------------------
*/

Route::get('/client/dashboard', function () {

    return Inertia::render('Client/Dashboard');

})->middleware('auth');


Route::get('/my-bookings', function () {

    return Inertia::render('Client/MyBooking');

})->middleware('auth');


Route::get('/client/profile', function () {

    return Inertia::render('Client/Profil');

})->middleware('auth');

Route::post('/client/profile', function (Request $request) {

    /** @var \App\Models\User $user */
    $user = Auth::user();

    if (!$user) {
        abort(403);
    }

    $data = $request->validate([
        'name' => 'required',
        'bio' => 'nullable',
        'skills' => 'nullable',
        'photo' => 'nullable|image|max:2048',
    ]);


    if ($request->hasFile('photo')) {

        if ($user->photo) {
            Storage::disk('public')->delete($user->photo);
        }

        $data['photo'] = $request
            ->file('photo')
            ->store('profiles', 'public');
    }


    $user->update($data);

    return redirect()->back();

})->middleware('auth');
    /*
    |--------------------------------------------------------------------------
    | Services CRUD
    |--------------------------------------------------------------------------
    */
    Route::resource('services', ServiceController::class);

    /*
    |--------------------------------------------------------------------------
    | Profile
    |--------------------------------------------------------------------------
    */
    Route::get('/profile', [ProfileController::class, 'edit'])
        ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
        ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
        ->name('profile.destroy');

    /*
|--------------------------------------------------------------------------
| Booking
|--------------------------------------------------------------------------
*/


// Client membuat booking
Route::post('/bookings', [BookingController::class, 'store'])
    ->middleware('auth');


// Freelancer melihat pesanan masuk
Route::get('/bookings', function () {


    $bookings = Booking::with([
        'service',
        'client'
    ])
    ->whereHas('service', function ($query) {

        $query->where(
            'user_id',
            Auth::id()
        );

    })
    ->latest()
    ->get();


    return Inertia::render(
        'Freelancer/Bookings',
        [
            'bookings' => $bookings
        ]
    );

})->middleware('auth');

// Client melihat riwayat booking

Route::get('/my-bookings', function () {


    $bookings = Booking::with([
        'service.user'
    ])
    ->where(
        'client_id',
        Auth::id()
    )
    ->latest()
    ->get();


    return Inertia::render(
        'Client/MyBooking',
        [
            'bookings' => $bookings
        ]
    );

})-> middleware('auth');



// Terima booking
Route::post('/bookings/{booking}/accept', function (Booking $booking) {


    $booking->update([
        'status' => 'accepted'
    ]);


    return back();


})->middleware('auth');

Route::post('/bookings/{booking}/start', function (Booking $booking) {


    $booking->update([
        'status' => 'working'
    ]);


    return back();


})->middleware('auth');

// Selesaikan pekerjaan

Route::post('/bookings/{booking}/complete', function (Booking $booking) {


    $booking->update([
        'status' => 'completed'
    ]);


    return back();


})->middleware('auth');

// Tolak booking
Route::post('/bookings/{booking}/reject', function (Booking $booking) {


    $booking->update([
        'status' => 'rejected'
    ]);


    return back();


})->middleware('auth');


    /*
    |--------------------------------------------------------------------------
    | Services
    |--------------------------------------------------------------------------
    */
    Route::get('/explore-services', function () {

    $services = Service::with('user')
    ->latest()
    ->get();

    return Inertia::render(
        'Client/ExploreServices',
        [
            'services' => $services
        ]
    );
   
    })->middleware('auth');
    
    Route::get('/services/{service}', function (Service $service) {

    $service->load('user');

    return Inertia::render('Client/ServiceDetail', [
        'service' => $service
    ]);

})->middleware('auth');
    

    

Route::get('/client/dashboard', function () {

    return Inertia::render(
        'Client/Dashboard',
        [
            'totalBookings' => Booking::where(
                'client_id',
                Auth::id()
            )->count(),

            'activeBookings' => Booking::where(
                'client_id',
                Auth::id()
            )
            ->where('status', 'accepted')
            ->count(),

            'completedBookings' => Booking::where(
                'client_id',
                Auth::id()
            )
            ->where('status', 'completed')
            ->count(),
        ]
    );

})->middleware('auth');   

/*
    |--------------------------------------------------------------------------
    | Rating
    |--------------------------------------------------------------------------
    */

    Route::post('/bookings/{booking}/rating',
    [RatingController::class,'store']
)
->middleware('auth');

});

require __DIR__ . '/auth.php';