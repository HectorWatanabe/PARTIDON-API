<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlayerAuth extends Model
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


    /**
    * Obtiene el user con relación al player.
    *
    * @return void
    */
    public function user()
    {
        return $this->belongsTo('App\UserAuth');
    }
    
}
