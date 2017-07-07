<?php

namespace App\Http\Controllers;

use App\Team;
use App\Member;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TeamsController extends Controller
{

    public function index()
    {
        $teams = Team::all();
        return $teams;
    }

    public function store(Request $request)
    {
        $number = rand(1, 3);

        $team = new Team;
        $team->name = $request->name;
        $team->players = $request->players;
        $team->icon_image = 'default_team_'.$number;
        $team->author_id = $request->author_id;
        $team->sport_id = $request->sport_id;
        $team->save();

        $member = new Member;
        $member->team_id = $team->id;
        $member->player_id = $request->author_id;
        $member->save();       

        return 'Se creo el equipo';
    }

    public function show($id)
    {
        $team = Team::find($id);
        return $team;
    }

    public function update(Request $request, $id)
    {
        $team = Team::find($id);
        $team->name = $request->name;
        $team->players = $request->players;
        $team->author_id = $request->author_id;
        $team->sport_id = $request->sport_id;
        $team->save();

        return 'Se actualizo el equipo';
    }

    public function destroy($id)
    {
        $team = Team::find($id);
        $team->delete();

        return 'Se elimino el equipo';
    }
}
