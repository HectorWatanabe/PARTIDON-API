<?php

namespace App\Http\Controllers;

use App\Member;
use App\Notification;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MembersController extends Controller
{

    public function index($team)
    {
        $members = Member::where('team_id',$team)->get();
        return $members;
    }

    public function store(Request $request, $team)
    {
        $member = new Member;
        $member->team_id = $team;
        $member->player_id = $request->player_id;
        $member->save();

        $notification = new Notification;
        $notification->status = "Eres parte del equipo";
        $notification->player_id = null;
        $notification->match_id = null;
        $notification->team_id = $team;
        $notification->player_tarjet = $request->player_id;
        $notification->save();

        return 'Se agrego un nuevo miembro al equipo';

    }

    public function destroy($team, $player)
    {
        $member = Member::where('team_id', $team)->where('player_id',$player)->first();
        $member->delete();
        return 'Se elimino el negocio';
    }
}
