// Task 1:
async function getUsers(names) {
    const result = await names.map(async (name) => {
        const response = await fetch(`https://api.github.com/users/${name}`);
        if (!response || !response.ok) {
            return null;
        } else {
            return response.json();
        }
    });

    return await Promise.all(result);
}