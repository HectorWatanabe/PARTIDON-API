<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('address');
            $table->string('district');
            $table->date('match_date');
            $table->string('icon_image');
            $table->integer('author_id')->unsigned();
            $table->foreign('author_id')->references('id')->on('players');
            $table->integer('referee_id')->unsigned();
            $table->foreign('referee_id')->references('id')->on('players');
            $table->integer('sport_id')->unsigned();
            $table->foreign('sport_id')->references('id')->on('sports');
            $table->integer('team_red_id')->unsigned();
            $table->foreign('team_red_id')->references('id')->on('teams');
            $table->integer('team_blue_id')->unsigned();
            $table->foreign('team_blue_id')->references('id')->on('teams');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matches');
    }
}
