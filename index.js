
function NewYearCounter () {
    const NewYearsDay = new Date ("January 1, 2024 00:00"); 
    const now = new Date ();
    const diff = NewYearsDay - now;

    const msInSec = 1000;
    const msInMin = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000 * 60 * 60 * 24; 

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff&msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinutes = Math.floor((diff%msInHour)/msInMin);
    document.querySelector('.minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMin)/msInSec);
    document.querySelector('.seconds').textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(counter);
        document.querySelector('.title').textContent = "Happy New Year!"
    }
}


let counter = setInterval(NewYearCounter, 1000)

const button = document.querySelector('.btn');
const audio = document.querySelector('#music');

button.addEventListener ('click', function() {

    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})


const now = new Date().getTime()

const date = [1671051600526, 1671138000526, 1671224400526, 1671310800526, 1671397200526, 1671483600526, 1671570000526, 1671656400526,
    1671742800526, 1671829200526, 1671915600526, 1672002000526, 1672088400526, 1672174800526, 1672261200526, 1672347600526, 1672347600526, 
    1672434000526, 1640984400526];
const outer = document.querySelectorAll('.outer');
const inner = document.querySelectorAll('.inner');

outer.forEach((item, index) => {
    if(now  >  date[index]) {
    item.style.display = "none";
    }
})

inner.forEach((item, index)=> {
    if(now  > date[index]) {
        item.style.display = "block";
    }
})


//https://github.com/VincentGarreau/particles.js/
//https://codepen.io/insane-dev/pen/yZxZyM

particlesJS("particles-js", 
{"particles":{
  "number":{
  "value":400,"density":{
    "enable":true,
    "value_area":800
  }
},
"color":{
  "value":"#fff"
},
"shape":{
  "type":"circle",
  "stroke":{
    "width":0,
    "color":"#000000"
  },
  "polygon":{
    "nb_sides":5
  },
  "image":{
    "src":"img/github.svg",
    "width":100,
    "height":100
  }
},
"opacity":{
  "value":0.5,
  "random":true,
  "anim":{
    "enable":false,
    "speed":1,
    "opacity_min":0.1,
    "sync":false
  }
},
"size":{
  "value":8.33451405615796,
  "random":true,
  "anim":{
    "enable":false,
    "speed":40,
    "size_min":0.1,
    "sync":false
  }
},
"line_linked":{
  "enable":false,
  "distance":500,
  "color":"#ffffff",
  "opacity":0.4,
  "width":2
},
"move":{
  "enable":true,
  "speed":1.5,
  "direction":"bottom",
  "random":true,
  "straight":false,
  "out_mode":"out",
  "bounce":false,
  "attract":{
    "enable":false,
    "rotateX":600,
    "rotateY":1200
  }
}
}
,"interactivity":{
  "detect_on":"canvas",
  "events":{
    "onhover":{
      "enable":false,
      "mode":"bubble"
    },
    "onclick":{
      "enable":true,
      "mode":"repulse"
    },
    "resize":true
  },
  "modes":{
    "grab":{
      "distance":400,
      "line_linked":{
        "opacity":0.5
      }
    }
    ,"bubble":{
      "distance":400,
      "size":4,
      "duration":0.3,
      "opacity":1,
      "speed":3
    },
    "repulse":{
      "distance":200,
      "duration":0.4
    },
    "push":{
      "particles_nb":4
    },
    "remove":{
      "particles_nb":2
    }
  }
}
,"retina_detect":true
}
);
var count_particles, stats, update; stats = new Stats; 
stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); 
update = function() { stats.begin(); stats.end(); 
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
  { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
  } 
  requestAnimationFrame(update); 
}; 
requestAnimationFrame(update);


