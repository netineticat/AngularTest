import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
export class User
{
    id:number;
    icon:string;
    sanitizedIcon:SafeResourceUrl
    name:string;
    following:User[];
    followed:User[];
    description:String;
}