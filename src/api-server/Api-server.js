
class ApiServer {

     _APIKey = 'apiKey=1367a33dfa624450b30f11f2f88ec12b';
     _APIKeyWeather = '567e1b967dc6d01b40f4ed90cbfc190c'
     enpointAll = 'everything';
     enpointHead = 'top-headlines';
     country = ['country=us', 'country=ru', 'country=ua'];
     adress = 'https://newsapi.org/v2/';

     getData = async () => {
      let date = new Date();
      let output = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + (String(date.getDate()).padStart(2, '0') - 1);
      return output;
     }
     getWeather = async () => {
       const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=56.8618601&lon=53.2324285&appid=${this._APIKeyWeather}`);
       if (!result.ok) {
        throw new Error(`Not Fetch GisMeteo - ${result.status}`);
      }
      return await result.json();
     }


     getNewsCountry = async (num)  => {
        const res = await fetch(`${this.adress}${this.enpointHead}?${this.country[num]}&${this._APIKey}`);
        if (!res.ok) {
          throw new Error(`Not Fetch ${this.adress} - ${res.status}`)
        }
        return await res.json();
    }

    getNewsResource = async () => {
      const res = await fetch(`${this.adress}${this.enpointHead}/sources?${this._APIKey}`);
      if (!res.ok) {
        throw new Error(`Not Fetch ${this.adress} - ${res.status}`)
      }
      return await res.json();
    }
    getNewsPopularRequest = async (request) => {
      let data = this.getData();
      const res = await fetch(`https://newsapi.org/v2/everything?q=${request}&from=${data}&to=${data}&sortBy=popularity&apiKey=1367a33dfa624450b30f11f2f88ec12b`);
      if (!res.ok) {
        throw new Error(`Not Fetch ${this.adress} - ${res.status}`)
      }
      return await res.json();
    }



}
export default ApiServer;