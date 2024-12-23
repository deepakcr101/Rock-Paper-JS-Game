let userScore = 0;
        let computerScore = 0;
        let draws = 0;

        const images = [
            "/Images/rock.png",
            "/Images/paper.png",
            "/Images/scissors.png"
        ];

        const choices = ['Rock', 'Paper', 'Scissors'];

        // Generate computer choice: 0 = Rock, 1 = Paper, 2 = Scissors
        function computerPlay() {
            return Math.floor(Math.random() * 3);
        }

        // Determine the game result
        function giveResult(userChoice, computerChoice) {
            if (userChoice === computerChoice) {
                return 'Draw';
            } else if (
                (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
                (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
                (userChoice === 2 && computerChoice === 1)    // Scissors beats Paper
            ) {
                return 'User Wins';
            } else {
                return 'Computer Wins';
            }
        }

        // Update scores and display them
        function updateScores(result) {
            if (result === 'User Wins') {
                userScore++;
            } else if (result === 'Computer Wins') {
                computerScore++;
            } else {
                draws++;
            }
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('computerScore').innerText = computerScore;
            document.getElementById('draws').innerText = draws;
        }

        // Display the game result and choices
        function showResponse(userChoice, computerChoice, result) {
            document.getElementById('result-space').innerText = result;

            // Display user choice
            const yourImage = document.getElementById('yourImage');
            yourImage.src = images[userChoice];
            yourImage.classList.remove('hidden');
            document.getElementById('yourSymbol').innerText = choices[userChoice];

            // Display computer choice
            const computerImage = document.getElementById('computerImage');
            computerImage.src = images[computerChoice];
            computerImage.classList.remove('hidden');
            document.getElementById('computerSymbol').innerText = choices[computerChoice];
        }

        // Play a round of the game
        function playRound(userChoice) {
            const computerChoice = computerPlay();
            const result = giveResult(userChoice, computerChoice);
            showResponse(userChoice, computerChoice, result);
            updateScores(result);
        }

        // Reset scores and update the UI
        function resetScores() {
            userScore = 0;
            computerScore = 0;
            draws = 0;
            document.getElementById('userScore').innerText = userScore;
            document.getElementById('computerScore').innerText = computerScore;
            document.getElementById('draws').innerText = draws;
            document.getElementById('result-space').innerText = 'Make Your Move!';
            document.getElementById('yourImage').classList.add('hidden');
            document.getElementById('computerImage').classList.add('hidden');
            document.getElementById('yourSymbol').innerText = '';
            document.getElementById('computerSymbol').innerText = '';
        }