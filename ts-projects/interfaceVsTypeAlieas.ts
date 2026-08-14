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

const superAdmin: Admin={
    name: "Super Admin",
    role: "Admin",
    age: 35,
    userPermissions: ["read", "write", "delete"]
}