<?php

namespace App\Http\Controllers;

use App\Notification;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class NotificationsController extends Controller
{

    public function index($player)
    {
        $notification = Notification::with('team')
        							->with('match')
        							->with('player')
        							->where('player_tarjet', $player)
        							->get();
        return $notification;
    }
}