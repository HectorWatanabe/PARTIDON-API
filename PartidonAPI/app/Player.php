<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'players';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'user_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'user_id',
        'created_at',
        'updated_at'
    ];

    protected $appends = [
        'user'
    ];


    /**
    * Obtiene el user con relación al player.
    *
    * @return void
    */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getUserAttribute() {
        return $this->user()->first();
    }

    public function teams()
    {
        return $this->belongsToMany('App\Team', 'members');
    }

    public function matches()
    {
        $result1 = DB::table('matches')
                        ->join('members', 'matches.team_blue_id', '=', 'members.team_id')
                        ->where('members.player_id', $this->id)
                        ->select(
                                'matches.id',
                                'matches.name',
                                'matches.address',
                                'matches.district',
                                'matches.icon_image',
                                'matches.author_id',
                                'matches.sport_id',
                                'matches.team_red_id',
                                'matches.team_blue_id'
                                
                                );

        $result2 = DB::table('matches')
                        ->join('members', 'matches.team_red_id', '=', 'members.team_id')
                        ->where('members.player_id', $this->id)
                        ->select(
                                'matches.id',
                                'matches.name',
                                'matches.address',
                                'matches.district',
                                'matches.icon_image',
                                'matches.author_id',
                                'matches.sport_id',
                                'matches.team_red_id',
                                'matches.team_blue_id'
                                
                            )
                        ->unionAll($result1)
                        ->get();

        return $result2;
    }

}
