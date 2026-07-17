<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


return new class extends Migration
{

    public function up(): void
    {

        DB::statement("
            ALTER TABLE bookings 
            MODIFY status 
            ENUM(
                'pending',
                'accepted',
                'working',
                'completed',
                'rejected'
            )
            DEFAULT 'pending'
        ");

    }


    public function down(): void
    {

        DB::statement("
            ALTER TABLE bookings 
            MODIFY status 
            ENUM(
                'pending',
                'accepted',
                'rejected',
                'completed'
            )
            DEFAULT 'pending'
        ");

    }

};