exports.seed = function (knex, Promise) {
    return knex(fixtures).del()
        .then(function () {
            return knex('gear').insert([
                {
                    id: 1,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'North Harbour',
                    awayteam: 'Northland',
                    venue: 'QBE Stadium, North Harbour',
                    datetime: '2018-08-16 19:35',
                    score: '21-20'
                },
                {
                    id: 2,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'Tasman',
                    awayteam: 'Canterbury',
                    venue: 'Lansdowne Park, Blenheim',
                    datetime: '2018-08-17 19:35',
                    score: '25-17'
                },
                {
                    id: 3,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'Manawatu',
                    awayteam: 'Waikato',
                    venue: 'Central Energy Trust Arena, Palmerston North',
                    datetime: '2018-08-18 14:35',
                    score: '24-19'
                },
                {
                    id: 4,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'Auckland',
                    awayteam: 'Counties Manukau',
                    venue: 'Eden Park, Auckland',
                    datetime: '2018-08-16 17:05',
                    score: '23-19'
                },
                {
                    id: 5,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'Bay of Plenty',
                    awayteam: 'Taranaki',
                    venue: 'Rotorua International Stadium',
                    datetime: '2018-08-16 19:35',
                    score: '30-10'
                },
                {
                    id: 6,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'Wellington',
                    awayteam: 'Otago',
                    venue: 'Westpac Stadium, Wellington',
                    datetime: '2018-08-19 14:05',
                    score: '34-16'
                },
                {
                    id: 7,
                    competition: 'Provincial',
                    round: 1,
                    hometeam: 'Southland',
                    awayteam: 'Hawke’s Bay',
                    venue: 'Rugby Park, Invercargill',
                    datetime: '2018-08-19 16:35',
                    score: '10-31'
                },
                {
                    id: 8,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Counties Manukau',
                    awayteam: 'Bay of Plenty	',
                    venue: 'Navigation Homes Stadium, Pukekohe',
                    datetime: '2018-08-23 19:35',
                    score: '17-22'
                },
                {
                    id: 9,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Otago',
                    awayteam: 'Hawke’s Bay',
                    venue: 'Forsyth Barr Stadium, Dunedin',
                    datetime: '2018-08-24 17:45',
                    score: '25-31'
                },
                {
                    id: 10,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Taranaki',
                    awayteam: 'Manawatu',
                    venue: 'Yarrow Stadium, Taranaki',
                    datetime: '2018-08-24 19:35',
                    score: '41-21'
                },
                {
                    id: 11,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Canterbury',
                    awayteam: 'Wellington',
                    venue: 'Christchurch Stadium, Christchurch',
                    datetime: '2018-08-25 14:05',
                    score: '27-20'
                },
                {
                    id: 12,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Waikato',
                    awayteam: 'North Harbour',
                    venue: 'FMG Stadium Waikato, Hamilton',
                    datetime: '2018-08-25 16:35',
                    score: '28-29'
                },
                {
                    id: 13,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Tasman',
                    awayteam: 'Southland',
                    venue: 'Lansdowne Park, Blenheim',
                    datetime: '2018-08-26 14:05',
                    score: '45-24'
                },
                {
                    id: 14,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Northland',
                    awayteam: 'Auckland',
                    venue: 'Toll Stadium, Whangarei',
                    datetime: '2018-08-26 16:35',
                    score: ''
                },
                {
                    id: 15,
                    competition: 'Provincial',
                    round: 2,
                    hometeam: 'Counties Manukau',
                    awayteam: 'Taranaki',
                    venue: 'Navigation Homes Stadium, Pukekohe',
                    datetime: '2018-08-29 19:35',
                    score: '19-26'
                },
                {
                    id: 16,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'Auckland',
                    awayteam: 'Waikato',
                    venue: 'Eden Park, Auckland',
                    datetime: '2018-08-30 19:35',
                    score: '35-17'
                },
                {
                    id: 17,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'Wellington',
                    awayteam: 'Southland',
                    venue: 'Westpac Stadium, Wellington',
                    datetime: '2018-08-31 19:35',
                    score: '52-7'
                },
                {
                    id: 18,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'Bay of Plenty',
                    awayteam: 'Canterbury',
                    venue: 'Tauranga Domain, Tauranga',
                    datetime: '2018-09-01 14:35',
                    score: '19-31'
                },
                {
                    id: 19,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'Manawatu',
                    awayteam: 'Otago',
                    venue: 'Central Energy Trust Arena, Palmerston North',
                    datetime: '2018-09-01 17:05',
                    score: '17-50'
                },
                {
                    id: 20,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'North Harbour',
                    awayteam: 'Tasman',
                    venue: 'QBE Stadium, North Harbour',
                    datetime: '2018-09-01 19:35',
                    score: '20-32'
                },
                {
                    id: 21,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'Hawke’s Bay',
                    awayteam: 'Counties Manukau',
                    venue: 'McLean Park, Napier',
                    datetime: '2018-09-02 14:05',
                    score: '25-29'
                },
                {
                    id: 22,
                    competition: 'Provincial',
                    round: 3,
                    hometeam: 'Northland',
                    awayteam: 'Taranaki',
                    venue: 'Toll Stadium, Whangarei',
                    datetime: '2018-09-02 16:35',
                    score: '18-17'
                },
                {
                    id: 23,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Waikato',
                    awayteam: 'Wellington',
                    venue: 'FMG Stadium Waikato, Hamilton',
                    datetime: '2018-09-05 19:35',
                    score: '43-31'
                },
                {
                    id: 24,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Canterbury',
                    awayteam: 'Manawatu',
                    venue: '	Christchurch Stadium, Christchurch',
                    datetime: '2018-09-06 19:35',
                    score: '34-23'
                },
                {
                    id: 25,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Otago',
                    awayteam: 'Northland',
                    venue: 'Forsyth Barr Stadium, Dunedin',
                    datetime: '2018-09-07 17:45',
                    score: '0'
                },
                {
                    id: 26,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Auckland',
                    awayteam: 'Tasman',
                    venue: 'Eden Park, Auckland',
                    datetime: '2018-09-07 19:45',
                    score: '0'
                },
                {
                    id: 27,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Southland',
                    awayteam: 'Counties Manukau',
                    venue: 'Rugby Park, Invercargill',
                    datetime: '2018-09-08 14:05',
                    score: '0'
                },
                {
                    id: 28,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Hawke’s Bay',
                    awayteam: 'Bay of Plenty',
                    venue: 'McLean Park, Napier',
                    datetime: '2018-09-08 16:35',
                    score: '0'
                },
                {
                    id: 29,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Wellington',
                    awayteam: 'North Harbour',
                    venue: 'Westpac Stadium, Wellington',
                    datetime: '2018-09-09 14:05',
                    score: '0'
                },
                {
                    id: 30,
                    competition: 'Provincial',
                    round: 4,
                    hometeam: 'Taranaki',
                    awayteam: 'Waikato',
                    venue: 'Yarrow Stadium, Taranaki',
                    datetime: '2018-09-09 16:35',
                    score: '0'
                },
                {
                    id: 31,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'North Harbour',
                    awayteam: 'Canterbury',
                    venue: 'QBE Stadium, North Harbour',
                    datetime: '2018-09-12 19:35',
                    score: '0'
                },
                {
                    id: 32,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'Waikato',
                    awayteam: 'Hawke’s Bay',
                    venue: 'FMG Stadium Waikato, Hamilton',
                    datetime: '2018-09-13 19:35',
                    score: '0'
                },
                {
                    id: 33,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'Northland',
                    awayteam: 'Manawatu',
                    venue: 'Toll Stadium, Whangarei',
                    datetime: '2018-09-14 17:45',
                    score: '0'
                },
                {
                    id: 34,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'Tasman',
                    awayteam: 'Taranaki',
                    venue: '	Trafalgar Park, Nelson',
                    datetime: '2018-09-14 19:45',
                    score: '0'
                },
                {
                    id: 35,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'Counties Manukau',
                    awayteam: 'Wellington ',
                    venue: 'Navigation Homes Stadium, Pukekohe',
                    datetime: '2018-09-15 14:05',
                    score: '0'
                },
                {
                    id: 36,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'Southland',
                    awayteam: 'Otago',
                    venue: 'Rugby Park, Invercargill',
                    datetime: '2018-09-15 16:35',
                    score: '0'
                },
                {
                    id: 37,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'North Harbour',
                    awayteam: 'Bay of Plenty',
                    venue: 'QBE Stadium, North Harbour',
                    datetime: '2018-09-16 14:05',
                    score: '0'
                },
                {
                    id: 38,
                    competition: 'Provincial',
                    round: 5,
                    hometeam: 'Canterbury',
                    awayteam: 'Auckland',
                    venue: 'Christchurch Stadium, Christchurch',
                    datetime: '2018-09-16 16:35',
                    score: '0'
                },
                {
                    id: 39,
                    competition: 'Provincial',
                    round: 6,
                    hometeam: '',
                    awayteam: '',
                    venue: '',
                    datetime: '2018-09-12 19:35',
                    score: ''
                },
                {
                    id: 40,
                    competition: 'Provincial',
                    round: 6,
                    hometeam: '',
                    awayteam: '',
                    venue: '',
                    datetime: '2018-09-12 19:35',
                    score: ''
                },
            ])
        })
}