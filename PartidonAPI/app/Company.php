<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'companies';

    /* @var array $fillable Los atributos que son asignables. */
    protected $fillable = [
        'phone_number',
        'description',
        'district',
        'latitude',
        'length',
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

}
