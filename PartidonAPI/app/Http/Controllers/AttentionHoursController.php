<?php

namespace App\Http\Controllers;

use App\AttentionHour;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AttentionHoursController extends Controller
{

    public function index($company)
    {
        $attentionHours = AttentionHour::where('company_id',$company)->get();
        return $attentionHours;
    }

    public function store(Request $request, $company)
    {
        $attentionHour = new AttentionHour;
        $attentionHour->company_id = $company;
        $attentionHour->weekday = $request->weekday;
        $attentionHour->start_at = $request->start_at;
        $attentionHour->end_at = $request->end_at;
        $attentionHour->save();

        return 'Se agrego un nuevo horario de atencion a la empresa';
    }

    public function destroy($attentionhour)
    {
        $attentionHour = AttentionHour::find($attentionhour);
        $attentionHour->delete();
        return 'Se elimino el horario';
    }
}
