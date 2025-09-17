async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        
        console.log("first 5 users:");
        users.slice(0, 5).forEach(user => {
            console.log(`- ${user.id}: ${user.username}`);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
fetchUsers();