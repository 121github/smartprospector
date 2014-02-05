<?php 

class UserController extends BaseController {
    
    public function getLogin($username = null, $password = null) 
    {
        if (Auth::attempt(array('username' => $username, 'password' => $password))) {
            $user = Auth::user();
            $user->total_logins += 1;
            $user->last_login_at = new DateTime;
            $user->save();
            $user->role = UserRole::find($user->user_role_id)->role;
            return $user;
        }
        return Response::make('Invalid username or password', 401);
    }
    
    public function postLogout()
    {
        Auth::logout();
    }
    
    public function getAll()
    {
        
    }
    
}
