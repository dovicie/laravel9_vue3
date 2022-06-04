<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert(
            [
                [
                    'content'=>'Vue.jsを勉強する',
                    'is_done'=>false,
                    'created_at'=>now(),
                    'updated_at'=>now(),
                ],
                [
                    'content'=>'Reactを勉強する',
                    'is_done'=>false,
                    'created_at'=>now(),
                    'updated_at'=>now(),
                ],
                [
                    'content'=>'TypeScriptを勉強する',
                    'is_done'=>false,
                    'created_at'=>now(),
                    'updated_at'=>now(),
                ],
            ]
        );
    }
}
