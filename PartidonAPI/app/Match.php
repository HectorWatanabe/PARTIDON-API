<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'matches';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'name',
        'address',
        'district',
        'match_date',
        'icon_image',
        'author_id',
        'sport_id',
        'team_red_id',
        'team_blue_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $appends = [
        'team_red',
        'team_blue'
    ];

    public function team_red()
    {
        return $this->belongsTo('App\Team');
    }

    public function team_blue()
    {
        return $this->belongsTo('App\Team');
    }

    public function getTeamRedAttribute() {
        return $this->team_red()->first();
    }

    public function getTeamBlueAttribute() {
        return $this->team_blue()->first();
    }

}