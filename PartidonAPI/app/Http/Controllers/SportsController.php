<?php

namespace App\Http\Controllers;

use App\Sport;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SportsController extends Controller
{

    public function index()
    {
        $sports = Sport::all();
        return $sports;
    }

    public function store(Request $request)
    {
        $sport = new Sport;
        $sport->name = $request->name;
        $sport->save();

        return 'Se creo un deporte';
    }

    public function show($id)
    {
        $sport = Sport::find($id);
        return $sport;
    }

    public function update(Request $request, $id)
    {
        $sport = Sport::find($id);
        $sport->name = $request->name;
        $sport->save();

        return 'Se actualizo el deporte';
    }

    public function destroy($id)
    {
        $sport = Sport::find($id);
        $sport->delete();

        return 'Se elimino el deporte';
    }
}
