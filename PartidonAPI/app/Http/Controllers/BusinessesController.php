<?php

namespace App\Http\Controllers;

use App\Business;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BusinessesController extends Controller
{

    public function index2($sport)
    {
        $businesses = Business::with('company')->where('sport_id',$sport)->get();
        return $businesses;
    }

    public function index($company)
    {
        $businesses = Business::with('company')->where('company_id',$company)->get();
        return $businesses;
    }

    public function store(Request $request, $company)
    {
        $business = new Business;
        $business->company_id = $company;
        $business->sport_id = $request->sport_id;
        $business->save();

        return 'Se creo el negocio';
    }

    public function destroy($company, $sport)
    {
        $business = Business::where('company_id', $company)->where('sport_id',$sport)->first();
        $business->delete();
        return 'Se elimino el negocio';
    }
}
