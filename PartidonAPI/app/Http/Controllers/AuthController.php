<?php

namespace App\Http\Controllers;

use App\UserAuth;
use App\PlayerAuth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
	public function loginPlayer(Request $request)
	{
		$email		= $request->email;
		$password	= $request->password;

		$user = UserAuth::Where('email', $email)->Where('password', $password)->first();
		$player = PlayerAuth::with('user')->Where('user_id', $user->id)->first();

		return $player;
	}
}