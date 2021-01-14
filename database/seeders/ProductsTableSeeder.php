<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use DateTime;
use DB;
class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'name' => "Mountain",
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua consequat.',
                'units' => 13,
                'price' => 4000.00,
                'image' => '/storage/uploads/mountain.jpg',
                'created_at' => new DateTime,
                'updated_at' => null,
            ],
            [
                'name' => "Desert",
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua consequat.',
                'units' => 12,
                'price' => 1600.00,
                'image' => '/storage/uploads/desert.jpg',
                'created_at' => new DateTime,
                'updated_at' => null,
            ],
            [
                'name' => "Snow",
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua consequat.',
                'units' => 11,
                'price' => 3700.00,
                'image' => '/storage/uploads/snow.jpg',
                'created_at' => new DateTime,
                'updated_at' => null,
            ],
            [
                'name' => 'Water',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua consequat.',
                'units' => 10,
                'price' => 1000.00,
                'image' => '/storage/uploads/water.jpg',
                'created_at' => new DateTime,
                'updated_at' => null,
            ]
        ];

        DB::table('products')->insert($products);
    }
}