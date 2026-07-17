<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'service_id',
        'client_id',
        'status',
        'message',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function bookings()
    {
    return $this->hasMany(Booking::class);
    }

    public function user()
    {
    return $this->belongsTo(User::class);
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }
}