<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Service;

class DashboardApiController extends Controller
{
    public function stats()
    {
        $totalFreelancer = User::where('role', 'freelancer')->count();
        $totalClient = User::where('role', 'client')->count();
        $totalServices = Service::count();

        return response()->json([
            'success' => true,
            'data' => [
                'total_freelancer' => $totalFreelancer,
                'total_client' => $totalClient,
                'total_services' => $totalServices,
            ]
        ]);
    }
}