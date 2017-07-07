<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Friendship extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'friendships';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'player_id',
        'friend_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $appends = [
        'friend'
    ];

    public function friend()
    {
        return $this->belongsTo('App\Player');
    }

    public function getFriendAttribute() {
        return $this->friend()->first();
    }

}