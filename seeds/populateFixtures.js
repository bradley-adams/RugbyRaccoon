exports.seed = function(knex, Promise){
    return knex(fixtures).del()
    .then(function () {
        return knex('gear').insert([
            {
            id:1,
            competition: 'Provincial',
            round:1,
            hometeam: 'North Harbour',
            awayteam: 'Northland',
            venue: 'QBE Stadium, North Harbour',
            datetime: '2018-08-16 19:35',
            score: '21-20'
            },
            {
            id:2,
            competition: 'Provincial',
            round:1,
            hometeam: 'Tasman',
            awayteam: 'Canterbury',
            venue: 'Lansdowne Park, Blenheim',
            datetime: '2018-08-17 19:35',
            score: '25-17'
            },
            {
            id:3,
            competition: 'Provincial',
            round:1,
            hometeam: 'Manawatu',
            awayteam: 'Waikato',
            venue: 'Central Energy Trust Arena, Palmerston North',
            datetime: '2018-08-18 14:35',
            score: '24-19'
            },
            {
            id:4,
            competition: 'Provincial',
            round:1,
            hometeam: 'Auckland',
            awayteam: 'Counties Manukau',
            venue: 'Eden Park, Auckland',
            datetime: '2018-08-16 17:05',
            score: '23-19'
            },
            {
            id:5,
            competition: 'Provincial',
            round:1,
            hometeam: 'Bay of Plenty',
            awayteam: 'Taranaki',
            venue: 'Rotorua International Stadium',
            datetime: '2018-08-16 19:35',
            score: '30-10'
            },
            {
            id:6,
            competition: 'Provincial',
            round:1,
            hometeam: 'Wellington',
            awayteam: 'Otago',
            venue: 'Westpac Stadium, Wellington',
            datetime: '2018-08-19 14:05',
            score: '34-16'
            },
            {
            id:7,
            competition: 'Provincial',
            round:1,
            hometeam: 'Southland',
            awayteam: 'Hawke’s Bay',
            venue: 'Rugby Park, Invercargill',
            datetime: '2018-08-19 16:35',
            score: '10-31'
            },
            {
            id:8,
            competition: 'Provincial',
            round:2,
            hometeam: '',
            awayteam: '',
            venue: '',
            datetime: '2018-08-19 16:35',
            score: ''
            },
            
        ])
    })
}