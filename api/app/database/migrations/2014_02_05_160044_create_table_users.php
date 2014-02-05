<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableUsers extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function($table) {
            $table->increments('id');
            $table->string('first_name', 45);
            $table->string('last_name', 45);
            $table->string('username', 45)->unique();
            $table->string('email')->unique();
            $table->string('password', 64);
            $table->timestamps();
            $table->softDeletes();
            $table->timestamp('last_login_at')->nullable()->default(null);
            $table->smallInteger('total_logins')->default(0)->unsigned();
            $table->integer('role_id')->unsigned();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
