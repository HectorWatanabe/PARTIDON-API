<?php

namespace App\Http\Controllers;

use App\User;
use App\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CompaniesController extends Controller
{

    public function index()
    {
        $companies = Company::all();
        return $companies->toArray();
    }

    public function store(Request $request)
    {
        $number = rand(1, 3);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->address = $request->address;
        $user->icon_image = 'default_company_'.$number;
        $user->api_token = str_random(60);
        $user->save();

        $company = new Company;
        $company->user_id = $user->id;
        $company->phone_number = $request->phone_number;
        $company->description = $request->description;
        $company->district = $request->district;
        $company->latitude = $request->latitude;
        $company->length = $request->length;
        $company->save();

        return 'Se creo la empresa';
    }

    public function show($id)
    {
        $company = Company::find($id);
        return $company;
    }

    public function update(Request $request, $id)
    {
        $company = Company::find($id);
        $company->phone_number = $request->phone_number;
        $company->description = $request->description;
        $company->district = $request->district;
        $company->latitude = $request->latitude;
        $company->length = $request->length;

        $user = $company->user;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->address = $request->address;
        $user->save();

        return 'Se actualizaron la empresa';
    }

    public function destroy($id)
    {
        $company = Company::find($id);
        $user = $company->user;
        
        $company->delete();
        $user->delete();

        return 'Se elimino la empresa';
    }
}
