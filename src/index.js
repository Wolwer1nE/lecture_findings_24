const standings = {
    "students": [
        {
            "name": "Мария",
            "id": 1,
            "scores": [10, 17, 8]
        },
        {
            "name": "Кирилл З.",
            "id": 2,
            "scores": [15, 9, 6]
        },
        {
            "name": "Вадим Б.",
            "id": 3,
            "scores": [10, 7]
        },
        {
            "name": "Роман",
            "scores": [10]
        },
        {
            "name": "Виктория",
            "id": 5,
            "scores": [10, 15, 7]
        },
        {
            "name": "Михаил",
            "id": 6,
            "scores": [15, 10, 7]
        },
        {
            "name": "Екатерина К.",
            "id": 7,
            "scores": [20, 10, 8]
        },
        {
            "name": "Сергей",
            "id": 8,
            "scores": [10]
        },
        {
            "name": "Александр",
            "id": 9,
            "scores": [12.5]
        },
        {
            "name": "Ярослав",
            "id": 10,
            "scores": [20, 6]
        },
        {
            "name": "Леонид",
            "id": 11,
            "scores": [10, 8]
        },
        {
            "name": "Олег",
            "id": 12,
            "scores": [9, 7]
        },
        {
            "name": "Екатерина Д.",
            "id": 12,
            "scores": [18]
        },
        {
            "name": "Александра",
            "id": 13,
            "scores": [8]
        }
    ]
}
document.addEventListener('DOMContentLoaded', ()=>{
        standings.students.forEach((x)=>{
            x.avatarUrl = `https://api.dicebear.com/9.x/bottts/svg?seed=${x.name}-${x.id}`
            x.totalScore = x.scores.reduce((a, c) => {
                return a + c
            },0)
        })
    standings.students = standings.students
        .sort((a, b) => b.totalScore - a.totalScore)

    const previousStandings = standings.students.map(x=>{
        return {
            id: x.id,
            totalScore: x.totalScore - x.scores[x.scores.length-1]
        }
    }).sort((a, b) => b.totalScore - a.totalScore)

    for (let i = 0; i < standings.students.length; i++) {
        const student = standings.students[i]
        student.progress = previousStandings.findIndex(x=>x.id===student.id) - i
    }
    var app = new Vue({
        el: '#studentsList',
        data: {
            students: standings.students
        }
    })

})


