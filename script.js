// ==UserScript==
// @name         Dynamic Greeting with Proverb in Creole
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Displays a dynamic Creole greeting, current time, and a daily proverb on youtube.com
// @author       Etson Dorival
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Greetings in Creole
    const greetings = {
        morning: 'Bonzou!',
        afternoon: 'Bonswa!',
        evening: 'Bonswa!',
        night: 'Bondye beni ou!',
    };

    // Proverbs in Creole
    const proverbs = [
        'Men anpil, chay pa lou.',
        'Dèyè mòn, gen mòn.',
        'Piti piti wazo fè nich li.',
    ];

    // Get the current date and time
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    // Determine the time of the day
    let timeOfDay;
    if (currentHour >= 5 && currentHour < 12) {
        timeOfDay = 'morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        timeOfDay = 'afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
        timeOfDay = 'evening';
    } else {
        timeOfDay = 'night';
    }

    // Display the greeting, proverb, and current time in the console
    const greetingMessage = greetings[timeOfDay];
    const dailyProverb = proverbs[currentDate.getDay() % proverbs.length];
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    alert(`Sak Pase: ${greetingMessage} | Daily Proverb: ${dailyProverb} | Current Time: ${currentTime}`);
})();
