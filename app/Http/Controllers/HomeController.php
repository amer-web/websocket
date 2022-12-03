<?php

namespace App\Http\Controllers;

use App\Events\SendData;
use Illuminate\Http\Request;
use Pusher\Pusher;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct()
//    {
//        $this->middleware('auth');
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     * @throws \Pusher\PusherException
     */
    public function index()
    {
//        $pusher = new Pusher(config('broadcasting.connections.pusher.key'),
//            config('broadcasting.connections.pusher.secret')
//            , config('broadcasting.connections.pusher.app_id'),
//            config('broadcasting.connections.pusher.options')
//        );
//        $data['message'] = 'hello world';

//
//        $pusher->trigger('amer-channel', 'amer.event', $data);
//
//        $options = array(
//            'cluster' => 'mt1',
//            'useTLS' => true
//        );
//        $pusher = new Pusher(
//            'ad5520f8d382cce19657',
//            'df70b7b71898064c6c0f',
//            '1514494',
//            $options
//        );
//
//        $data['message'] = 'hello world';
//        $pusher->trigger('amer-channel', 'amer-event', $data);
        event(new SendData('مرحباً بكم فى شركة قلارى'));
        return view('home');
    }
}
