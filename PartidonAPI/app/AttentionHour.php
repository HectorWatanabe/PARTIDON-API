<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttentionHour extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'attention_hours';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'weekday',
        'start_at',
        'end_at',
        'company_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
