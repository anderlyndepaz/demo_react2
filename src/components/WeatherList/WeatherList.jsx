import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import './WeatherList.css';

const WeatherList = ({ weatherData }) => {
  const groupedByDay = weatherData.reduce((result, item) => {   //se agrupan los datos de la api por dias 
    const date = new Date(item.dt * 1000).toDateString();
    result[date] = result[date] || []; //acumulo la multiplicacion de horas en result
    result[date].push(item); //envio el resultado de la fecha
    return result;
  }, {});

  return (
    <div className="weather-list">
      {Object.entries(groupedByDay).map(([day, items]) => ( //conertimos el objeto en un arreglo clave valor 
        <div key={day}>  
          <h3>{day}</h3>
          <div className="weather-cards">
            {items.map((item) => (
              <WeatherCard key={item.dt} weatherData={item} />
            ))} 
          </div>
        </div>
      ))}
    </div>
  );
};

// el div key es un contenedor unico para cada dia y tengo mejor renderizado
// el item.dt es el timestamp UNIX como identificador unico para cada tarjeta 
//luego pasamos los datos como propiedad prop al componenete de weathercard
export default WeatherList;


/////////