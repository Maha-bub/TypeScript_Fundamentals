type role = 'admin' | 'editor' | 'viewer';
const canEdit = (role: role): boolean => {
    if (role === 'admin' || role === 'editor') {
        return true;
    } else {
        return false;
    }
}

console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
