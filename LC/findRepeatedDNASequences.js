const findRepeatedDnaSequences = (s) => {
    if (s.length < 20) return [];
    const windowLength = 10;
    let i = 0;
    let j = i + windowLength;
    let start1 = -1, start2 = -1;
    
    while (j < s.length) {
        // i and j match for the first time
        if (s[i] === s[j] && start1 < 0) {
            
        }
        // i and j match, we're in a sequence
        // i and j don't match
        else {
            
            // See if window length is at least 10
            if (start1 >= 0 && )

            // Reset window start pointers
            start1 = -1;
            start2 = -1;
        }
        
        i++;
        j++;
    }
};

s1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
s2 = "AAAAAAAAAAAAA";
s3 = "AAAAAAAAA";
s4 = "";