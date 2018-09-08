import React from 'react';

const stopProp = (e) => e.stopPropagation();

export const TEXTS = [
  [
    "I am Juho Keski-Rahkonen, a Full-stack Web developer. You have come upon my portfolio website, which portrays my coding journey.",
    "I am a self-taught coder. I've been doing coding as a hobby for over 9 years now and still my passion runs deep. I'm always on the lookout for new challenges that interest me.",
    "Feel free to navigate either by using the sidemenu, scrolling down or by just clicking anywhere.",
    "The source code for this website can be found at the link below.",
    <a href="https://github.com/Nooobody/portfolioreact" onClick={stopProp}>Source for this website</a>
  ],
  [
    "At the age of 16, I found out about a sandbox game called Garry's mod. It gave you the freedom to build almost anything, and with a certain addon you could also code anything you wanted.",
    "This sparked my young mind to do almost anything imaginable by building and coding. I spent around a year just coding in the game.",
    "I then spent a few years doing gamemodes for Garry's mod using the Lua scripting language, which Garry's mod uses for all scripting purposes.",
    "My most prominent of them can be found at the link below.",
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Trappola" onClick={stopProp}>Trappola</a>
  ],
  [
    "Through a friend, I was inspired to learn Python, which also has a library for doing graphics, PyGame. I learned how to do certain low-level tasks through Python, which weren't possible before.",
    "I did some tests with ideas for games and also did a fully-fledged Solitaire game, which I meant to do as a parting gift for my mom as I was moving out from home.",
    "My pet project though was the Mandelbrot renderer. I even used Multithreading on it as it was easy to use in Python.",
    "Here are the featured projects I did with Python:",
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Solitaire" onClick={stopProp}>Solitaire</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Mandelbrot" onClick={stopProp}>Mandelbrot</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Custom%20Encryption" onClick={stopProp}>My own Encryption Method</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Pseudo-Random%20Number%20Generator" onClick={stopProp}>My own Pseudo-random number generator</a>,
  ],
  [
    "Since I believed at the time that Python was too 'slow' for running the Mandelbrot renderer, I decided to learn C++. It led me do the same kind of tests that I had done in Python, but with C++.",
    "I did try to make the Mandelbrot renderer in C++, and the single-threaded version worked great. However I couldn't make the multithreading work properly.",
    "At the time I wanted to make a 2D RPG game, so I spent around half a year working on a 2D-Game engine. That, in the end, amounted only to a simple map editor with some character editing. I did however do a good job with the actual menu system used in the editor.",
    "Here are the featured projects I did with C++:",
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/NoooCard" onClick={stopProp}>NoooCard</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Pathfinding" onClick={stopProp}>A* Pathfinding</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Game%20of%20Life" onClick={stopProp}>Conway's Game of Life</a>
  ],
  [
    "During my first internship, I stumbled on web development for the first time. We did two projects in Wordpress, which weren't that impressive by themselves. However, they did spark an inspiration in me to try to get into Web Development.",
    "After my internship finished, I decided to look for Freelancer jobs on freelancer.com, a website where freelancers can look for jobs. I managed to land a job with a medium-sized company, that required some custom front-end work done.",
    "They were very impressed by it, so I got some more work from them. This time a private web app, so I used a PHP framework called CodeIgniter. Using PHP was no problem, as I had done some small scripts with it during my time with Garry's Mod.",
    " ",
    "As the years went by, I had used another PHP framework called CakePHP. I found out about client-side frameworks like Angular and studied them. I also experimented on using Ruby on Rails, but that didn't go that well.",
    "Currently I'm using NodeJS and React primarily. I do have one hobby project where I use VueJS, but otherwise I use React. I'm currently doing some work with Firebase and AWS, as those are proving to be useful on a financial basis.",
    "My featured Web projects:",
    <a href="http://bc2standings.eu/Reikland" onClick={stopProp}>Blood bowl 2 Leagueboard (React & Firebase)</a>,
    <span><a href="http://spotty-string.surge.sh/" onClick={stopProp}>A real-time squad management game (React with Redux)</a> <a href="https://github.com/Nooobody/TextCombat" onClick={stopProp}>(Source)</a></span>,
    <span><a href="https://nooobody.github.io/Blox/" onClick={stopProp}>Blox/Space Break (Angular2)</a> <a href="https://github.com/Nooobody/Blox" onClick={stopProp}>(Source)</a></span>
  ],
  [
    "United Support - Freelancer (2014) - PHP with CodeIgniter",
    "Microsoft - Summer trainee (2015)",
    "ITT2 - Dota2 Custom game (2016) - Lua with Javascript&HTML&CSS",
    "menukaarten.nl - Freelancer (2016) - Ruby on Rails",
    "SynermetricGroup - Freelancer (2017) - Angular2 + Ionic2 + ExpressJS",
    "Maplet - Full-stack web developer (2018) - React + React-native + KoaJS"
  ],
  [
    "I have been looking on some new technologies, like Elixir and Elm. I would like to use those someday in a project. I am sure that my passion for finding new ways to code never ends.",
    "However, as I've always been working alone most of the time, I would be very glad to get to work in a team someday. I've had a designer work with me on a couple of freelancer projects, but other than that I've had no contribution outside of conversation from my clients.",
    "Also, at my last job, my employer strongly believed that I would surely become better at coding if I had a mentor guide me on my path. I agree on this sentiment, but unfortunately there hasn't been any chances for that."
  ],
  [
    "Ever since I was 4 years old, I've been on a computer playing games. That hasn't changed at all since then, but I've had some new additions to my hobbies along the way.",
    "I've been doing cycling since I was a kid. I had to drive my bicycle everyday to school and that was my only source of exercise outside of school.",
    "Recently I've started doing Yoga and I also started learning how to play the Piano. I also play board games with my friends, I also play a lot of games on the PC with them. it's always a pleasure to spend some time with friends."
  ]
]
