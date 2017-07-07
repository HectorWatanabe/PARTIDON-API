<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'sports';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'name'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
