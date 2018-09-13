import React from 'react';
import Hobbies from './Hobbies.png';

const stopProp = (e) => e.stopPropagation();

export const TEXTS = [
  [
    "I am Juho Keski-Rahkonen, a Full-stack Web developer, and this is my Portfolio.",
    "I currently live in Turku, Finland and would like to land a permanent position locally. I have graduated with a Bachelor's degree in IT from the University of Applied Sciences in Turku.",
    "I am a self-taught coder with over 9 years of experience. I've mostly done hobby projects and some freelancer projects. I always try to deliver a project well-done to the client.",
    "I'm always on the lookout for new challenges and new things to learn. I'm a quick learner and can take a hold on existing systems quite easily.",
    <span><a href="mailto:thesilentcoder@outlook.com">Email</a> <a href="https://www.linkedin.com/in/juho-keski-rahkonen-236366a1/">LinkedIn</a></span>
  ],
  [
    "United Support - Freelancer (2014) - PHP with CodeIgniter",
    "This was my first time using a framework to make a website. It was an experience.",
    "Microsoft - Summer trainee (2015)",
    "This was my first actual job, but I didn't get to code anything. I was in a testing team and we tested the new phones for bugs. I had some free time so I studied Angular and Ruby on Rails on the side.",
    "ITT2 Dota2 Custom game - Freelancer (2016) - Lua with Javascript&HTML&CSS",
    "This project came to me as a surprise. I didn't know at the time that Dota2 used Lua for modding purposes and so I helped them out with the game. It also used HTML with CSS&Javascript for the front-end.",
    "menukaarten.nl - Freelancer (2016) - Ruby on Rails",
    "My first project with Ruby on Rails. They had an already-made website that I then extended with additional features, like reviews on restaurants and booking.",
    "SynermetricGroup - Freelancer (2017) - Angular2 + Ionic2 + ExpressJS",
    "This came after I graduated from the University of Applied Sciences. I had made my thesis on using Angular2 and Ionic2, so this project was a good continuation from that. I made everything from the ground-up, with some help from their designer.",
    "Maplet - Full-stack web developer (2018) - React + React-native + KoaJS",
    "My first actual coding job. I worked as a developer alongside a few others and I built new features and extended existing ones. It was a good learning experience, but it's a shame that I couldn't stay there longer than I did."
  ],
  [
    "Garry's mod Gamemodes (Lua)",
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Trappola" onClick={stopProp}>Trappola</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/spaceage-reloaded-" onClick={stopProp}>SpaceAge -Reloaded-</a>,
    "Python",
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Solitaire" onClick={stopProp}>Solitaire</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Mandelbrot" onClick={stopProp}>Mandelbrot</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Custom%20Encryption" onClick={stopProp}>My own Encryption Method</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Pseudo-Random%20Number%20Generator" onClick={stopProp}>My own Pseudo-random number generator</a>,
    "C++",
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/NoooCard" onClick={stopProp}>NoooCard</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Pathfinding" onClick={stopProp}>A* Pathfinding</a>,
    <a href="https://github.com/Nooobody/OldHobbyProjects/tree/master/Game%20of%20Life" onClick={stopProp}>Conway's Game of Life</a>,
    "Web-related Projects",
    <a href="https://github.com/Nooobody/portfolioreact" onClick={stopProp}>Source for this website</a>,
    <a href="http://bc2standings.eu/Reikland" onClick={stopProp}>Blood bowl 2 Leagueboard (React & Firebase)</a>,
    <span><a href="http://spotty-string.surge.sh/" onClick={stopProp}>A real-time squad management game (React with Redux)</a> <a href="https://github.com/Nooobody/TextCombat" onClick={stopProp}>(Source)</a></span>,
    <span><a href="https://nooobody.github.io/Blox/" onClick={stopProp}>Blox/Space Break (Angular2)</a> <a href="https://github.com/Nooobody/Blox" onClick={stopProp}>(Source)</a></span>
  ],
  [
    "At the age of 16, I found out about a sandbox game called Garry's mod. It gave you the freedom to build almost anything. It was unprecedented at the time, since this was before Minecraft.",
    "This sparked my young mind to do almost anything imaginable by building things. I spent a few months just messing around, until I stumbled on a multiplayer server where people used code to do what they wanted.",
    "This was an entirely new thing for me and at some point I just decided to learn how to do it too. I became very passionate about it, even skipping school just so I could code. I spent around a year just coding and building things.",
    "I then spent a few years doing gamemodes for Garry's mod using the Lua scripting language, which Garry's mod uses for all scripting purposes.",
  ],
  [
    "Through a friend, I was inspired to learn Python, which also has a library for doing graphics, PyGame. I learned how to do certain low-level tasks through Python, which weren't possible before. Things like the event queue were completely new to me, but I also enjoyed the freedom to have almost total control over what happens in the code.",
    "I did some tests with ideas for games because of course, I had spent my life with gaming so I wanted to do games too. Some of the things I made didn't come out so well, but I did manage to make a fully-fledged Solitaire game, which I meant to do as a parting gift for my mom as I was moving out from home for the first time in my life.",
    "My pet project though was the Mandelbrot renderer. I even used Multithreading on it as it was easy to use in Python.",
  ],
  [
    "Since I believed at the time that Python was too 'slow' for running the Mandelbrot renderer, I decided to learn C++. It led me do the same kind of tests that I had done in Python, but with C++.",
    "For rendering, I first tried to use GDL which is the one that Windows uses by default. However, I wanted something more advanced (go figure), so I learned how to work with Direct2D. That's a subset of Directx10, which actual game companies used to make games used at the time.",
    "I did try to make the Mandelbrot renderer in C++, and the single-threaded version worked great. However I couldn't make the multithreading work properly.",
    "At the time I wanted to make a 2D RPG game, so I spent around half a year working on a 2D-Game engine. That, in the end, amounted only to a simple map editor with some character editing. I did however do a good job with the actual menu system used in the editor. You could even make custom skins for the menu UI.",
    "Looking back now, some of the things I tried to do in Python ended up being made in C++, like the Maze generator. I tried that in Python but failed, but in C++ I succeeded. I guess the experience really does stack up.",
  ],
  [
    "During my first internship, I stumbled on web development for the first time. We did two projects in Wordpress, which weren't that impressive by themselves. However, they did spark an inspiration in me to try to get into Web Development.",
    "After my internship finished, I decided to look for Freelancer jobs on freelancer.com, a website where freelancers can look for jobs. I managed to land a job with a medium-sized company, that required some custom front-end work done.",
    "They were very impressed by it, so I got some more work from them. This time a private web app, so I used a PHP framework called CodeIgniter. Using PHP was no problem, as I had done some small scripts with it during my time with Garry's Mod.",
    "As the years went by, I had used another PHP framework called CakePHP. I found out about client-side frameworks like Angular and studied them. I also experimented on using Ruby on Rails, but that didn't go that well.",
    "Currently I'm using NodeJS and React primarily. I do have one hobby project where I use VueJS, but otherwise I use React. I'm currently doing some work with Firebase and AWS, as those are proving to be useful on a financial basis.",
  ],
  [
    "I have been looking at some of the new technologies, like Elixir and Elm. I would like to use those someday in a project, as I am sure that my passion for finding new ways to code never ends. Since the Javascript is shifting into a more functional paradigm, it wouldn't hurt to actually try out a pure functional language.",
    "I wouldn't mind sticking with React though. It has a lot of potential and I'm also rooting for VueJS. It's a 50/50 on which one I like more, mostly because Vue is so simple to use.",
    "However, as I've always been working alone most of the time, I would be very glad to get to work in a team someday. I've had a designer work with me on a couple of freelancer projects, but other than that I've had no contribution outside of conversation from my clients.",
    "Also, at my last job, my employer strongly believed that I would surely become better at coding if I had a mentor guide me on my path. I agree on this sentiment, but unfortunately there hasn't been any chances for that."
  ],
  [
    "Ever since I was 4 years old, I've been on a computer playing games. That hasn't changed at all since then, but I've had some new additions to my hobbies along the way.",
    "I've been doing cycling since I was a kid. I had to drive my bicycle everyday to school and that was my only source of exercise outside of school. I do like cycling, don't get me wrong. I still like to go out on a stroll every now and then.",
    "We've always had a dog in our family. It's always lovely to play around with a dog.",
    "Recently I've started doing Yoga and I also started learning how to play the Piano. I also play board games with my friends. it's always a pleasure to spend some time with friends.",
    <img src={Hobbies} className="img-fluid w-50 m-5" alt="Hobbies" />,
  ]
]
