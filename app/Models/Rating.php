<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Rating extends Model
{

    protected $fillable = [

        'booking_id',
        'client_id',
        'freelancer_id',
        'rating',
        'review'

    ];


    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }


    public function client()
    {
        return $this->belongsTo(User::class,'client_id');
    }


    public function freelancer()
    {
        return $this->belongsTo(User::class,'freelancer_id');
    }

}