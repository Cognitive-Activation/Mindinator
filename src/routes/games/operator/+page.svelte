<script>
	let balls = [];
	let NumCircles = 10;
	let counter = 0;
	let circleSize = 50;

	let roundWon = false;

	let line = { startX: 0, startY: 0, endX: 0, endY: 0 };
	let circle = { id: 0, x: 0, y: 0, value: 0 };

	let valArr = [];
	let operators = ['+', '-', '*'];
	let ans = '';
	let expression = '';
	$: expArr = [];

	$: drawnLines = [];

	let prevBtnIdArr = [];

	let dragging = false;
	let clickedFirst = false;

	let prevBtnId;

	let offsetY = 100;


	function generateExpression() {
		// Randomly gets two numbers and an operator from the operator array 
		// and calculates the answer. The ans and the operands are pushed onto the valArr 
		// array which is used to give values to the balls

		let num1 = String(getRandomNumber(0, 10));
		let num2 = String(getRandomNumber(0, 10));
		let op = operators[Math.floor(Math.random() * operators.length)];
		ans = String(eval(num1 + '' + op + '' + num2));

		valArr.push(num1);
		valArr.push(op);
		valArr.push(num2);

		// After pushing operands and the operator onto the valArr, the rest of the array 
		// is filled with random operands and operators
		for (let i = 0; i < NumCircles - 3; i++) {
			getRandomNumber(1, 2) == 1
				? valArr.push(String(getRandomNumber(0, 10)))
				: valArr.push(operators[Math.floor(Math.random() * operators.length)]);
		}
		valArr = valArr.sort(() => 0.5 - Math.random());
	}

	function generateBalls() {
		//Draws the BALLS! ha ha


		//generate the expression and populate the valArr array
		generateExpression();

		//generate the x and y values of the circles to be drawn 
		//also checks for overlapping circles
		//valid circles are pushed onto the balls array which is used to draw circles on the svg
		while (counter < NumCircles) {
			circle = {
				id: counter,
				x: getRandomNumber(100, 700),
				y: getRandomNumber(100, 500),
				value: valArr[counter]
			};

			let overlapping = false;

			// check that it is not overlapping with any existing circle
			// another brute force approach
			for (let i = 0; i < balls.length; i++) {
				let existing = balls[i];

				var xDiff = existing.x - circle.x;
				var yDiff = existing.y - circle.y;

				let d = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

				if (d < 100) {
					// They are overlapping
					overlapping = true;
					// do not add to array
					break;
				}
			}

			// add valid circles to array
			if (!overlapping) {
				balls.push(circle);
				counter++;
			}
		}
	}



	function checkWin() {
		try {

			//when the last line is deleted, one element remains in the expArr
			//clear it
			if (expArr.length == 1) {
				expArr = [];
			}

			let exp = [...expArr].join('');
			expression = exp;

			//Sometimes if the ans is a single number like 9
			//then +9 gets evaluated as true, which is not the desired output
			//therefore we do not check for winning condition
			if(expArr.length == 2){
				return
			}
			
			if (String(eval(exp)) == ans) {
				roundWon = true;
			}
			} catch (error) {
				return;
			}
	}

	//Generate BALLS! ha ha, for the first time
	generateBalls();

	function ballClicked(id) {

		console.log('clicked');

		if ((clickedFirst == false && id == prevBtnId) || prevBtnId == null) {

			if (prevBtnId == null || !(balls[id].value == balls[prevBtnId].value)) {
				expArr.push(balls[id].value);
			}

			prevBtnId = id;
			prevBtnIdArr.push(id);

			line.startX = balls[id].x;
			line.startY = balls[id].y;
			line.endX = balls[id].x;
			line.endY = balls[id].y;

			dragging = true;
			clickedFirst = true;
		} else if (clickedFirst == true) {
			if (!(balls[id].value == balls[prevBtnId].value)) {
				expArr.push(balls[id].value);

				line.endX = balls[id].x;
				line.endY = balls[id].y;
				drawnLines.push({
					startX: line.startX,
					startY: line.startY,
					endX: line.endX,
					endY: line.endY
				});

				prevBtnId = id;

				console.log(expArr);

				drawnLines = drawnLines;
				checkWin();

				dragging = false;
				clickedFirst = false;

				line.startX = 0;
				line.startY = 0;
				line.endX = 0;
				line.endY = 0;

				prevBtnIdArr.push(id);
			}
		}
	}

	function getRandomNumber(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function updateLine(event) {
		//follows the mouse position
		if (dragging) {
			line.endX = event.clientX;
			line.endY = event.clientY;
		}
	}

	function onRightClick() {
		drawnLines.pop();
		drawnLines = drawnLines;

		if (expArr.length == 1) {
			return;
		}

		expArr.pop();
		expArr = expArr;

		prevBtnIdArr.pop();
		prevBtnId = prevBtnIdArr.pop();

		checkWin();

		if (drawnLines.length == 0) {
			prevBtnId = null;
			drawnLines = drawnLines;
		}

		console.log(expArr);
	}


	function resetBoard() {
		balls = [];
		NumCircles = 10;
		counter = 0;
		circleSize = 50;

		line = { startX: 0, startY: 0, endX: 0, endY: 0 };
		circle = { id: 0, x: 0, y: 0, value: 0 };

		valArr = [];
		ans = '';
		expression = '';
		expArr = [];

		drawnLines = [];

		prevBtnIdArr = [];

		dragging = false;
		clickedFirst = false;

		prevBtnId = null;
		generateBalls();
		roundWon = false;
	}
</script>

{#if roundWon}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="wonScreen" on:click={resetBoard}>
		<center>
			<h1>You won</h1>
			<h1>click to continue</h1>
		</center>
	</div>
{:else}
	<div class="board"
	on:mousemove={updateLine} on:contextmenu|preventDefault={onRightClick}>
		<svg class="svgBox">
			{#each balls as ball}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<circle cx={ball.x} cy={ball.y} r={circleSize} on:click={() => ballClicked(ball.id)} />
				<text
					x={ball.x}
					y={ball.y}
					text-anchor="middle"
					alignment-baseline="middle"
					stroke="black"
					style="pointer-events:none; font-size:30px">{ball.value}</text
				>
			{/each}

			{#each drawnLines as drawnLine}
				<line
					x1={drawnLine.startX}
					y1={drawnLine.startY}
					x2={drawnLine.endX}
					y2={drawnLine.endY}
					stroke="red"
				/>
			{/each}

			<line x1={line.startX} y1={line.startY} x2={line.endX} y2={line.endY} stroke="red" />
		</svg>
	</div>

	<div style="position: relative; float:right">
		<h1>ANS:{ans}</h1>
		<h1>Expression:{expression}</h1>
	</div>
{/if}

<style>
	.board {
		position: absolute;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		background-color: #232323;
		border-radius: 15px;
		width: 50%;
		height: 80%;
	}

	.svgBox {
		position: relative;
		background-color: #eee;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 15px;
	}

	circle {
		fill-opacity: 0%;
		stroke: black;
		stroke-width: 2px;
	}

	line {
		stroke: 'red';
		stroke-width: 3px;
	}

	.wonScreen {
		height: 100vh;
		width: 100wh;
		align-content: center;
	}
</style>
