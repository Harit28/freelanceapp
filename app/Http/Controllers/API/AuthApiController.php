<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class AuthApiController extends Controller
{


    public function register(Request $request)
    {


        $data = $request->validate([

            'name'=>'required',

            'email'=>'required|email|unique:users',

            'password'=>'required|min:6',

            'role'=>'required'

        ]);



        $user = User::create([

            'name'=>$data['name'],

            'email'=>$data['email'],

            'password'=>Hash::make($data['password']),

            'role'=>$data['role']

        ]);



        $token = $user->createToken('api-token')->plainTextToken;



        return response()->json([

            'success'=>true,

            'token'=>$token,

            'user'=>$user

        ]);

    }






    public function login(Request $request)
    {


        $request->validate([

            'email'=>'required',

            'password'=>'required'

        ]);



        $user = User::where(
            'email',
            $request->email
        )->first();



        if(
            !$user ||
            !Hash::check(
                $request->password,
                $user->password
            )
        ){

            return response()->json([

                'message'=>'Email atau password salah'

            ],401);

        }




        $token = $user
            ->createToken('api-token')
            ->plainTextToken;



        return response()->json([

            'success'=>true,

            'token'=>$token,

            'user'=>$user

        ]);

    }





    public function logout(Request $request)
    {


        $request->user()
            ->currentAccessToken()
            ->delete();



        return response()->json([

            'message'=>'Logout berhasil'

        ]);

    }




    public function me(Request $request)
    {


        return response()->json([

            'user'=>$request->user()

        ]);

    }



}