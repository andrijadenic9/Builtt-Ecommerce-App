export const calculateTotalDiscount = (cart) => {
    return cart.reduce((total, item) => {
        if (item.discount) {
            return total + item.price * item.quantity * 0.2; // 20% popusta
        }
        return total;
    }, 0);
};

export const calculateTotalAmount = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
