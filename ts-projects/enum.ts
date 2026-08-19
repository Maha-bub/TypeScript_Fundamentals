enum Day{
    Saturday='Saturday',
    Sunday='Sunday',
    Monday='Monday',
    Tuesday='Tuesday',
    Wednesday='Wednesday',
    Thursday='Thursday',
    Friday='Friday' 
}

enum Roles{
    Admin='Admin',
    Moderator='Moderator',
    User='User',
    Guest='Guest'
}

enum ApiStatus{
    Success=200,
    Loading='Loading',  
    Pending='Pending',
    Error=500
}

const user:Roles=Roles.Admin;
console.log(user)