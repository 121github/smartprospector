<?php 

class UserController extends BaseController {
    
    public function getLogin($username = null, $password = null) 
    {
        
        Log::info($username . " " . $password);
        
        if (Auth::attempt(array('username' => $username, 'password' => $password))) {
            $user = Auth::user();
            $user->total_logins += 1;
            $user->last_login_at = new DateTime;
            $user->save();
            return $user;
        }
        return Response::make('Invalid username or password', 400);
    }
    
    public function postLogout()
    {
        Auth::logout();
    }
    
    public function missingMethod($parameters = array())
    {
        return Response::make('Invalid request method', 400);
    }
    
}
