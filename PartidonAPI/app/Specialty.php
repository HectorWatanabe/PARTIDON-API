<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'specialties';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'player_id',
        'sport_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function sport()
    {
        return $this->belongsTo('App\Sport');
    }

}
