<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SeedUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        $now = new Datetime();
		DB::table('users')->insert(array(
            array(
                'first_name' => 'Stuart',
                'last_name'  => 'Williams',
                'username'   => 'stuart.williams',
                'email'      => 'stuartw@121customerinsight.co.uk',
                'password'   => '$2y$10$LRm/qDfMrB9bgWthFBHsi.HMNolbs7HktNDj4NU7poguBEN7bkG4q',
                'created_at' => $now,
                'updated_at' => $now,
                'role_id'    => 2
            )
        ));
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		DB::table('users')->delete();
	}

}
