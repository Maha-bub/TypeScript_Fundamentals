type UserRole = "Admin" | "User" | "Guest" | "Moderator";
interface User {
    name: string;
    role: UserRole,
    age: number;
}

interface Admin extends User {
    userPermissions: string[];
}

interface Moderator extends User {
    moderationPermissions: string[];
}
