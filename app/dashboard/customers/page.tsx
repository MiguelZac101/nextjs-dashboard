
export default async function Page() {

    await new Promise((resolve) => setTimeout(resolve, 3000));// Simulate a 3-second delay

    return <p>Customers Page</p>;
}