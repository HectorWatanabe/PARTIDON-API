<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
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

    /**
    * Elimina el image del json, ya que solo solo se necesita el objeto.
    *
    * @return void
    */
    public function toArray()
    {
        $attributes = $this->attributesToArray();
        $attributes = array_merge($attributes, $this->relationsToArray());
        unset($attributes['api_token']);

        return $attributes;
    }
    
}
