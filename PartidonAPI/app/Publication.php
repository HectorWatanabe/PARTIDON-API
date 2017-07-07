<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    /* @var string $table Nombre de la tabla. */
    protected $table = 'publications';

    /* @var array $fillable Los atributos que son asignables. */
	protected $fillable = [
        'comment',
        'author_id',
        'user_id',
        'match_id',
        'team_id'
    ];
    
    /* @var array $hidden Los atributos que no son visibles. */
    protected $hidden = [
        'updated_at'
    ];

    /**
    * Obtiene el user con relación al publications.
    *
    * @return void
    */
    public function author()
    {
        return $this->belongsTo('App\User');
    }

}
