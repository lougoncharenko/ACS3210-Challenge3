function checkPasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    return score;
}

module.exports = checkPasswordStrength;