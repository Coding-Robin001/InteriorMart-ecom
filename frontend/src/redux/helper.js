export function findExistingCartItem(cartItems, itemId) {
    // Log the cart items and the item ID we're searching for
    console.log("Looking for item ID:", itemId);
    console.log("Current Cart Items:", JSON.stringify(cartItems, null, 2));

    // Use the `.find()` method to locate the item with the matching ID
    const existingItem = cartItems.find(item => item.id === itemId);

    // Log the result of the search
    if (existingItem) {
        console.log("Found existing item:", existingItem);
    } else {
        console.log("No existing item found with ID:", itemId);
    }
}