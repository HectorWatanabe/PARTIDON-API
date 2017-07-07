<?php

namespace App\Http\Controllers;

use App\Friendship;
use App\Notification;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FriendshipsController extends Controller
{

    public function index($player)
    {
        $friendships = Friendship::where('player_id',$player)->get();
        return $friendships;
    }

    public function store(Request $request, $player)
    {
        $friendships = new Friendship;
        $friendships->player_id = $player;
        $friendships->friend_id = $request->friend_id;
        $friendships->save();

        $notification = new Notification;
        $notification->status = "Ahora son amigos";
        $notification->player_id = $request->friend_id;
        $notification->match_id = null;
        $notification->team_id = null;
        $notification->player_tarjet = $player;
        $notification->save();

        $friendships2 = new Friendship;
        $friendships2->player_id = $request->friend_id;
        $friendships2->friend_id = $player;
        $friendships2->save();

        $notification = new Notification;
        $notification->status = "Ahora son amigos";
        $notification->player_id = $player;
        $notification->match_id = null;
        $notification->team_id = null;
        $notification->player_tarjet = $request->friend_id;
        $notification->save();
        

        return 'Se agrego el jugador a tus amistades';
    }

    public function destroy($friend)
    {
        $friendship = Friendship::find($friend);
        $friendship->delete();
        return 'Se elimino al jugador de tus amistades';
    }
}
