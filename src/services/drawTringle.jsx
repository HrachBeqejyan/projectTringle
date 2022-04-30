export const tringle = height => {
    let result = [];
    for (let i = 1; i <= height; i++) {
        result.push('*'.repeat(i))
    }
    return result
};

export const reverseTringle = height => {
    let result = [];
    for (let i = height; i > 0; i--) {
        result.push('*'.repeat(i));
    }
    return result;
};


