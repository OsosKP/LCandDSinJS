const permute = (string) => {
    const result = [];
    
    if (string.length <= 1) return string;
    
    const char = string[0];
    const permutations = permute(string.substring(1))
    
}