package com.app.WeatherAPI.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;



@Service
    public class WeatherService {
        public static final String API_KEY = "c3636a4bf66b92c86a9d711a9ef24732";
        private static final String URL = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid=" + API_KEY;
    
        public String getWeather(String city) {
            RestTemplate restTemplate = new RestTemplate();
            return restTemplate.getForObject(URL, String.class, city);
        }
    }
    

