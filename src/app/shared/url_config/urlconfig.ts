import { env } from 'process';
import { environment } from 'src/environments/environment';

export class Urlconfig {

    //account feature urls statrts here
    public static save_acc = environment.baseURL+"/accounts/save";
    public static get_allaccs = environment.baseURL+"/accounts/getAllAccs";
    public static get_accbyid = environment.baseURL+"/accounts/getAccbyId?page";
    public static update_acc = environment.baseURL+"/accounts/updateAccById";
    public static remove_acc =  environment.baseURL+"/accounts/deleteAccById";
    public static activate_Acc = environment.baseURL+"/accounts/ActivateAcc";
    //plan feature urls starts here
    public static save_plan = environment.baseURL+"/plans/save";
    //index feature urls start here
    public static user_login = environment.baseURL+"/accounts/getAccByEmail";

}
