<?php

namespace App\Http\Controllers;

use App\SportField;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SportsFieldsController extends Controller
{

    public function index($id)
    {
        $sports_fields = SportField::with('company')->Where('company_id', $id)->get();
        return $sports_fields;
    }

    public function store(Request $request)
    {
        $sport_field = new SportField;
        $sport_field->material = $request->material;
        $sport_field->size = $request->size;
        $sport_field->seat = $request->seat;
        $sport_field->price = $request->price;
        $sport_field->offer = $request->offer;
        $sport_field->image1 = $request->image1;
        $sport_field->image2 = $request->image2;
        $sport_field->score = $request->score;
        $sport_field->sport_id = $request->sport_id;
        $sport_field->company_id = $request->company_id;
        $sport_field->save();

        return 'Se creo el campo deportivo';
    }

    public function show($id)
    {
        $sport_field = SportField::with('company')->find($id);
        return $sport_field;
    }

    public function update(Request $request, $id)
    {
        $sport_field = SportField::find($id);
        $sport_field->material = $request->material;
        $sport_field->size = $request->size;
        $sport_field->seat = $request->seat;
        $sport_field->price = $request->price;
        $sport_field->offer = $request->offer;
        $sport_field->image1 = $request->image1;
        $sport_field->image2 = $request->image2;
        $sport_field->score = $request->score;
        $sport_field->sport_id = $request->sport_id;
        $sport_field->save();

        return 'Se actualizo el campo deportivo';
    }

    public function destroy($id)
    {
        $sport_field = SportField::find($id);
        $sport_field->delete();

        return 'Se elimino el campo deportivo';
    }
}
