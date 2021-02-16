import axios from 'axios';
import { Users } from './Users';

//define the URL used
const url ='http://jsonplaceholder.typicode.com/users';

//using axios to get the information from the URL
axios.get(url).then(response=>{
//create variable and asign the return/response
//Typed as User (Interface)  
const mockData: Users[] = response.data;
//const Users = response.data as Users;

//for each record, call printToConsole method and print on the console the info 
mockData.forEach(element => printToConsole(element.id, element.name, element.username, element.email));
//error handling
}).catch(function (error) {
  console.log("Error. Try again"); 
});;

//add type annotation 
const printToConsole = (ID: number, name: string, username: string, email: string) => {
  console.log (`ID: ${ID} 
name: ${name} 
username: ${username}
email: ${email}
-`);
}