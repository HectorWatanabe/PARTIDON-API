<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SportField extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'sports_fields';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'material',
        'size',
        'seat',
        'price',
        'offer',
        'image1',
        'image2',
        'score',
        'sport_id',
        'company_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'company_id',
        'created_at',
        'updated_at'
    ];

    public function sport()
    {
        return $this->belongsTo('App\Sport');
    }

    public function company()
    {
        return $this->belongsTo('App\Company');
    }

}
