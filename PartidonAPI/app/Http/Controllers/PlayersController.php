<?php

namespace App\Http\Controllers;

use App\User;
use App\Player;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PlayersController extends Controller
{

    public function index()
    {
        $players = Player::all();
        return $players->toArray();
    }

    public function store(Request $request)
    {

        $number = rand(1, 3);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->address = $request->address;
        $user->icon_image = 'default_player_'.$number;
        $user->api_token = str_random(60);
        $user->save();

        $player = new Player;
        $player->user_id = $user->id;
        $player->save();

        return 'Se creo un jugador';
    }

    public function show($id)
    {
        $player = Player::find($id);
        return $player;
    }

    public function update(Request $request, $player)
    {
        $player = Player::find($player);
        $user = $player->user;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->address = $request->address;
        $user->save();

        return 'Se actualizo el jugador';
    }

    public function destroy($id)
    {
        $player = Player::find($id);
        $user = $player->user;
        $player->delete();
        $user->delete();

        return 'Se elimino el jugador';
    }

    public function player_teams($player)
    {
        $player = Player::find($player);

        return $player->teams;
    }

    public function player_matches($player)
    {
        $player = Player::find($player);

        return $player->matches();
    }
}
