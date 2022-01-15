const createSnow = (n) => {


    const style = document.createElement('style');
    style.textContent = `
        body {
            position: relative;
        }
        .snow {
            width: 20px;
            height: 20px;
            position: fixed;
            top: -20px;
            pointer-events: none;
            background-repeat: no-repeat;


            animation: fall linear 5s;
        }
        @keyframes fall {
            100% {
                transform: translateY(100vh);
            }
        }
    `;
    
    document.head.append(style);

    let i = 1;
    const count = 4;
    const createSnowFlake = () => {
        const snow = document.createElement('div');
        snow.classList.add('snow');

        i++;

        if (i > count) {
            i = 1;
        }

        snow.style.left = Math.random() * window.innerWidth + 'px';
        snow.style.opacity = Math.random();
        snow.style.animationDuration = (Math.random() * n + 2 ) + 's';
        snow.style.backgroundImage = `url('snow/img/snowflake${i}.svg')`;


        // const size = i * 10;

        // snow.style.width = size + 'px';
        // snow.style.height = size + 'px';

        document.body.append(snow);

        setTimeout(() => {
            snow.remove();
        }, (n + 2) * 1000);

    };

    setInterval(createSnowFlake, 50);

};

createSnow(6);