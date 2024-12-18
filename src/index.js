import standings from './standings.json'
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


