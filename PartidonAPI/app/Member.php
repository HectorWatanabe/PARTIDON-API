<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'members';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'team_id',
        'player_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $appends = [
        'player'
    ];

    public function player()
    {
        return $this->belongsTo('App\Player');
    }

    public function getPlayerAttribute() {
        return $this->player()->first();
    }

}