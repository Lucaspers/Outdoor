<?php

namespace Database\Seeders;
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $user = new User;
        $user->name = "Admin";
        $user->email = "lucas@test.com";
        $user->password = bcrypt('secret');
        $user->is_admin = true;
        $user->save();
    }
}