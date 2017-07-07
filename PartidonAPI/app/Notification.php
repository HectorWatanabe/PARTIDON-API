<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'notifications';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'status',
        'player_id',
        'match_id',
        'team_id',
        'player_tarjet'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'updated_at'
    ];


    public function match()
    {
        return $this->belongsTo('App\Match');
    }

    public function team()
    {
        return $this->belongsTo('App\Team');
    }

    public function player()
    {
        return $this->belongsTo('App\Player');
    }

}