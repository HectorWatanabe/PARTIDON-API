<?php

namespace App\Http\Controllers;

use App\Publication;
use App\Notification;
use App\Member;
use App\Team;
use App\Match;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PublicationsController extends Controller
{

    public function indexUser($user)
    {
        $wall = Publication::with('author')->where('user_id', $user)->get();
        return $wall;
    }

    public function indexMatch($match)
    {
        $wall = Publication::with('author')->where('match_id', $match)->get();
        return $wall;
    }

    public function indexTeam($team)
    {
        $wall = Publication::with('author')->where('team_id', $team)->get();
        return $wall;
    }


    public function store(Request $request)
    {
        $publication = new Publication;
        $publication->comment = $request->comment;
        $publication->author_id = $request->author_id;
        $user = User::find($request->author_id);

        if( $request->user_id == 0 )
        {
            $publication->user_id = null;
        }
        else{
            $publication->user_id = $request->user_id;
        }

        if( $request->match_id == 0 )
        {
            $publication->match_id = null;
        }
        else{

            $publication->match_id = $request->match_id;

            $match = Match::find($request->match_id);

            // Team Red

            $team_red = Team::find($match->team_red_id);

            $members_red = Member::Where('team_id', $team_red->id)->get();

            foreach ($members_red as $member) {
                
                $notification = new Notification;
                $notification->status = 'Nueva publicación en '.$match->name;
                $notification->player_id = $user->id;
                $notification->match_id = $match->id;
                $notification->team_id = null;
                $notification->player_tarjet = $member->player_id;
                $notification->save();

            }

            // Team Blue

            $team_blue = Team::find($match->team_blue_id);

            $members_blue = Member::Where('team_id', $team_blue->id)->get();

            foreach ($members_blue as $member) {
                
                $notification = new Notification;
                $notification->status = 'Nueva publicación en '.$match->name;
                $notification->player_id = $user->id;
                $notification->match_id = $match->id;
                $notification->team_id = null;
                $notification->player_tarjet = $member->player_id;
                $notification->save();

            }

            $publication->save();

            return 'Se creo una publicacion';
        }

        if( $request->team_id == 0 )
        {
            $publication->team_id = null;
        }
        else{
            
            $publication->team_id = $request->team_id;

            $team = Team::find($request->team_id);

            $members = Member::Where('team_id', $team->id)->get();
            
            foreach ($members as $member) {
                
                $notification = new Notification;
                $notification->status = 'Nueva publicación en '.$team->name;
                $notification->player_id = $user->id;
                $notification->match_id = null;
                $notification->team_id = $team->id;
                $notification->player_tarjet = $member->player_id;
                $notification->save();

            }
        }

        $publication->save();

        return 'Se creo una publicacion';
    }
}
