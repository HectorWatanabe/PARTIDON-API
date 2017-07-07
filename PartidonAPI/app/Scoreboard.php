<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Scoreboard extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'scoreboards';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'match_id',
        'score_team_red',
        'score_team_blue'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}