<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReactController;

Auth::routes();

Route::get('/{route?}', [ReactController::class, 'index'])->where('route', '.*');

//Route::get('/home', [HomeController::class, 'index'])->name('home');



