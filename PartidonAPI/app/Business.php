<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'businesses';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'company_id',
        'sport_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function company()
    {
        return $this->belongsTo('App\Company');
    }

}
