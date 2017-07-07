<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'teams';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'name',
        'players',
        'icon_image',
        'author_id',
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