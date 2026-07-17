<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;


class ServiceApiController extends Controller
{


    /**
     * API daftar jasa
     */
    public function index()
    {

        $services = Service::with('user')
            ->latest()
            ->get();


        return response()->json([

            'success' => true,

            'data' => $services

        ]);

    }




    /**
     * API detail jasa
     */
    public function show($id)
    {


        $service = Service::with('user')
            ->find($id);



        if (!$service) {

            return response()->json([

                'success'=>false,

                'message'=>'Jasa tidak ditemukan'

            ],404);

        }



        return response()->json([

            'success'=>true,

            'data'=>$service

        ]);


    }


}