<?php

namespace App\Http\Controllers;

use App\Events\SendData;
use Illuminate\Http\Request;
use Pusher\Pusher;

class TestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     * @throws \Pusher\PusherException
     */
    public function index()
    {
        $data = 'amer ' . date('h:i:s');
//        event(new SendData($data));
        return view('test');
    }
}
