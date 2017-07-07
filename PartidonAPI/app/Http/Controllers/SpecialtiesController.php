<?php

namespace App\Http\Controllers;

use App\Specialty;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SpecialtiesController extends Controller
{

    public function index($player)
    {
        $specialties = Specialty::where('player_id',$player)->get();
        return $specialties;
    }

    public function store(Request $request, $player)
    {
        $specialty = new Specialty;
        $specialty->player_id = $player;
        $specialty->sport_id = $request->sport_id;
        $specialty->save();

        return 'Se creo la especialidad';
    }

    public function destroy($player, $sport)
    {
        $specialty = Specialty::where('player_id', $player)->where('sport_id',$sport)
            ->first();
        $specialty->delete();
        return 'Se elimino la especialidad';
    }
}
