<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserAuth extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'users';

    /* @var array $fillable Los atributos que son asignables. */
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'icon_image',
        'api_token'
    ];

    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'password',
        'created_at',
        'updated_at'
    ];

}
