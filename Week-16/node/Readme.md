To fetch weather data of multiple cities with pagination:
http://localhost:3000/cities?cityName=New%20York&cityCode=212&page=1&limit=10

To fetch the detailed forecast for a city for the next X days:
GET http://localhost:3000/forecast?city=London&days=5

To filter weather data by a specific city, date, or moment:
GET http://localhost:3000/filter?city=London&date=2023-03-20&moment=morning

To fetch the current weather conditions for a specific city:
GET http://localhost:3000/current?city=London