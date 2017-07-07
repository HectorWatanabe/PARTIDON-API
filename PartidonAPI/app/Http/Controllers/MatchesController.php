<?php

namespace App\Http\Controllers;

use App\Match;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MatchesController extends Controller
{

    public function index()
    {
        $matches = Match::all();
        return $matches;
    }

    public function store(Request $request)
    {

        $number = rand(1, 3);

        $match = new Match;
        $match->name = $request->name;
        $match->address = $request->address;
        $match->district = $request->district;
        $match->match_date = $request->match_date;
        $match->icon_image = 'default_match_'.$number;
        $match->author_id = $request->author_id;
        $match->sport_id = $request->sport_id;
        $match->team_red_id = $request->team_red_id;
        $match->team_blue_id = $request->team_blue_id;
        $match->save();

        return 'Se creo el partido';
    }

    public function show($id)
    {
        $match = Match::find($id);
        return $match;
    }

    public function update(Request $request, $id)
    {
        $match = Match::find($id);
        $match->name = $request->name;
        $match->address = $request->address;
        $match->district = $request->district;
        $match->match_date = $request->match_date;
        $match->author_id = $request->author_id;
        $match->sport_id = $request->sport_id;
        $match->team_red_id = $request->team_red_id;
        $match->team_blue_id = $request->team_blue_id;
        $match->save();

        return 'Se actualizo el partido';
    }

    public function destroy($id)
    {
        $match = Match::find($id);
        $match->delete();

        return 'Se elimino el partido';
    }
}
