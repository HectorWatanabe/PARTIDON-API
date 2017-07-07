<?php

namespace App\Http\Controllers;

use App\Scoreboard;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ScoreboardsController extends Controller
{

    public function index($match)
    {
        $scoreboards = Scoreboard::where('match_id',$match)
            ->get();
        return $scoreboards;
    }

    public function store(Request $request, $match)
    {
        $scoreboard = new Scoreboard;
        $scoreboard->match_id =$match;
        $scoreboard->score_team_red =$request->score_team_red;
        $scoreboard->score_team_blue =$request->score_team_blue;
        $scoreboard->save();

        return 'Se agrego el score al partido';
    }
}
