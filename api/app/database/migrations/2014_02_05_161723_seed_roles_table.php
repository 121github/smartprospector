<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SeedRolesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		DB::table('roles')->insert(array(
            array(
                'name'        => 'Prospector',
                'description' => 'Basic access rights only'
            ),
            array(
                'name'        => 'Admin',
                'description' => 'Full access rights'
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
		DB::table('roles')->delete();
	}

}
