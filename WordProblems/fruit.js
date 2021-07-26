const data = {
    'Loser': {
        'cherries': 0,
        'oranges': 0,
        'grapes': 0,
        'tie': 2,
    },
    'Bob': {
        'cherries': 2,
        'oranges': 3,
        'grapes': 4,
        'tie': 3,
    },
    'George': {
        'cherries': 3,
        'oranges': 4,
        'grapes': 2,
        'tie': 3
    },
    'Jeff': {
        'cherries': 4,
        'oranges': 2,
        'grapes': 3,
        'tie': 3
    },
    'Winner': {
        'cherries': 8,
        'oranges': 8,
        'grapes': 8,
        'tie': 4,
    }
}

const shapeData = (dataIn) => {
    const categories = Object.keys(dataIn[Object.keys(dataIn)[0]]);

    const shapedData = [];

    for (let category of categories) {
        const newLine = Object.keys(dataIn).reduce((list, key) => {
            list.push([key, dataIn[key][category]]);
            return list;
        }, [])
        shapedData.push(newLine);
    }

    return shapedData;
}

const score = (data) => {
    const scores = shapeData(data);

    for (let score of scores) {
        score.sort((a, b) => a[1] - b[1]);
        let count = 1;
        for (let i=0; i<score.length; i++) {
            let lp = i+1;
            if (lp < score.length && score[i][1] === score[lp][1]) {
                let total = count++;
                while (lp < score.length && score[i][1] === score[lp][1]) {
                    total += count;
                    count++;
                    lp++;
                }
                const places = lp - i;
                const average = total / places;
                while (i < lp) {
                    data[score[i][0]]['totalScore'] = data[score[i][0]]['totalScore'] + average || average;
                    i++;
                }
            } else {
                data[score[i][0]]['totalScore'] = data[score[i][0]]['totalScore'] + count || count;
                count++;
            }
        }
    }
    return data;
}

console.log(score(data));