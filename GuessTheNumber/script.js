let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let blasteffect = document.getElementById("blasteffect");
        let ctx = blasteffect.getContext("2d");
        
        function resizeCanvas() {
            blasteffect.width = window.innerWidth;
            blasteffect.height = window.innerHeight;
        }
        
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        
        function startConfetti() {
            blasteffect.style.display = "block";
            let blastParticles = [];
            for (let i = 0; i < 100; i++) {
                blastParticles.push({
                    x: Math.random() * blasteffect.width,
                    y: Math.random() * blasteffect.height - blasteffect.height,
                    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    size: Math.random() * 5 + 2,
                    speed: Math.random() * 5 + 2
                });
            }
            function drawblast() {
                ctx.clearRect(0, 0, blasteffect.width, blasteffect.height);
                blastParticles.forEach(p => {
                    ctx.fillStyle = p.color;
                    ctx.fillRect(p.x, p.y, p.size, p.size);
                    p.y += p.speed;
                    if (p.y > blasteffect.height) p.y = 0;
                });
                requestAnimationFrame(drawblast);
            }
            drawblast();
            setTimeout(() => {
                blasteffect.style.display = "none";
            }, 100000);
        }
        
        function checkGuess() {
            let userGuess = document.getElementById("userGuess").value;
            let message = document.getElementById("message");
            let attemptsDisplay = document.getElementById("attempts");
            
            attempts++;
            attemptsDisplay.textContent = attempts;
            
            if (userGuess == randomNumber) {
                message.innerHTML = "🎉 Congratulations! You guessed the right number! 🎉";
                message.style.color = "green";
                startConfetti();
            }else if(userGuess == randomNumber - 1 || userGuess == randomNumber+1){
                message.textContent = "You are Close..";
                message.style.color = "red";
            } 
            else if (userGuess < randomNumber) {
                message.textContent = "Too low! Try again.";
                message.style.color = "red";
            } else {
                message.textContent = "Too high! Try again.";
                message.style.color = "red";
            }
        }
        function restartGame(){
            randomNumber = Math.floor(Math.random() * 100)+1;
            attempts = 0;
            document.getElementById("attempts").textContent = attempts;
            document.getElementById("message").textContent = "";
            document.getElementById("userGuess").value = "";
            blasteffect.style.display = "none";
        }