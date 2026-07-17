<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index()
{
    $services = Service::where('user_id', request()->user()->id)
        ->latest()
        ->get();

    return Inertia::render('Services/index', [
        'services' => $services
    ]);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
{
    return Inertia::render('Services/create');
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'title' => 'required',
        'description' => 'required',
        'price' => 'required|numeric',
        'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $imagePath = null;

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')
            ->store('services', 'public');
    }

    Service::create([
        'user_id' => request()->user()->id,
        'title' => $request->title,
        'description' => $request->description,
        'price' => $request->price,
        'image' => $imagePath,
    ]);

    return redirect('/services');
}
    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
   public function edit(Service $service)
{
    return Inertia::render('Services/edit', [
        'service' => $service
    ]);
}

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, Service $service)
{
    $request->validate([
        'title' => 'required',
        'description' => 'required',
        'price' => 'required|numeric',
    ]);

    $service->update([
        'title' => $request->title,
        'description' => $request->description,
        'price' => $request->price,
    ]);

    return redirect('/services');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
{
    $service->delete();

    return redirect('/services');
}
}
