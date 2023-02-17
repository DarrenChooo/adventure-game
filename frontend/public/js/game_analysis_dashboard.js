/// //////////////////////////////////////////////////////////////////
// Linking to gameDuration url
/// //////////////////////////////////////////////////////////////////
GAMEDURATION_URL = `${API_URL  }/gameDuration`;

const today = new Date();
const time = today.getHours().toString() + today.getMinutes().toString();

console.log(time);

// the following section declares the array different 7 duration ranges according game 1
const game1Range1 = [];
const game1Range2 = [];
const game1Range3 = [];
const game1Range4 = [];
const game1Range5 = [];

// the following section declares the array different 7 duration ranges according game 2
const game2Range1 = [];
const game2Range2 = [];
const game2Range3 = [];
const game2Range4 = [];
const game2Range5 = [];

// the following section declares the array different 7 duration ranges according game 3
const game3Range1 = [];
const game3Range2 = [];
const game3Range3 = [];
const game3Range4 = [];
const game3Range5 = [];

// the following section declares the array different 7 duration ranges according game 4
const game4Range1 = [];
const game4Range2 = [];
const game4Range3 = [];
const game4Range4 = [];
const game4Range5 = [];

// the following section declares the array different 7 duration ranges according game 5
const game5Range1 = [];
const game5Range2 = [];
const game5Range3 = [];
const game5Range4 = [];
const game5Range5 = [];

// the following section declares the array for the total stats data for each of the 5 games
const game1Stats = [];
const game2Stats = [];
const game3Stats = [];
const game4Stats = [];
const game5Stats = [];

axios.get(GAMEDURATION_URL, {})

    // Handle success response
    .then((response) => {
        // console.log(response.data[0].duration);

        response.data.map((data) => {

            // For game 1
            if (data.gameid === 1 && data.duration >= 0 && data.duration <= 1) {
                game1Range1.push(data.userid);
            }
            if (data.gameid === 1 && data.duration >= 2 && data.duration <= 5) {
                game1Range2.push(data.userid);
            }
            if (data.gameid === 1 && data.duration >= 6 && data.duration <= 10) {
                game1Range3.push(data.userid);
            }
            if (data.gameid === 1 && data.duration >= 11 && data.duration <= 15) {
                game1Range4.push(data.userid);
            }
            if (data.gameid === 1 && data.duration > 15) {
                game1Range5.push(data.userid);
            }

            // For game 2 
            if (data.gameid === 2 && data.duration >= 0 && data.duration <= 1) {
                game2Range1.push(data.userid);
            }
            if (data.gameid === 2 && data.duration >= 2 && data.duration <= 5) {
                game2Range2.push(data.userid);
            }
            if (data.gameid === 2 && data.duration >= 6 && data.duration <= 10) {
                game2Range3.push(data.userid);
            }
            if (data.gameid === 2 && data.duration >= 11 && data.duration <= 15) {
                game2Range4.push(data.userid);
            }
            if (data.gameid === 2 && data.duration > 15) {
                game2Range5.push(data.userid);
            }

            // For game 3
            if (data.gameid === 3 && data.duration >= 0 && data.duration <= 1) {
                game3Range1.push(data.userid);
            }
            if (data.gameid === 3 && data.duration >= 2 && data.duration <= 5) {
                game3Range2.push(data.userid);
            }
            if (data.gameid === 3 && data.duration >= 6 && data.duration <= 10) {
                game3Range3.push(data.userid);
            }
            if (data.gameid === 3 && data.duration >= 11 && data.duration <= 15) {
                game3Range4.push(data.userid);
            }
            if (data.gameid === 3 && data.duration > 15) {
                game3Range5.push(data.userid);
            }

            // For game 4
            if (data.gameid === 4 && data.duration >= 0 && data.duration <= 1) {
                game4Range1.push(data.userid);
            }
            if (data.gameid === 4 && data.duration >= 2 && data.duration <= 5) {
                game4Range2.push(data.userid);
            }
            if (data.gameid === 4 && data.duration >= 6 && data.duration <= 10) {
                game4Range3.push(data.userid);
            }
            if (data.gameid === 4 && data.duration >= 11 && data.duration <= 15) {
                game4Range4.push(data.userid);
            }
            if (data.gameid === 4 && data.duration > 15) {
                game4Range5.push(data.userid);
            }

            // For game 5
            if (data.gameid === 5 && data.duration >= 0 && data.duration <= 1) {
                game5Range1.push(data.userid);
            }
            if (data.gameid === 5 && data.duration >= 2 && data.duration <= 5) {
                game5Range2.push(data.userid);
            }
            if (data.gameid === 5 && data.duration >= 6 && data.duration <= 10) {
                game5Range3.push(data.userid);
            }
            if (data.gameid === 5 && data.duration >= 11 && data.duration <= 15) {
                game5Range4.push(data.userid);
            }
            if (data.gameid === 5 && data.duration > 15) {
                game5Range5.push(data.userid);
            }

        })

        // Pushing the array length of each game range into the game stats for the needed for the graph
        game1Stats.push(game1Range1.length);
        game1Stats.push(game1Range2.length);
        game1Stats.push(game1Range3.length);
        game1Stats.push(game1Range4.length);
        game1Stats.push(game1Range5.length);

        // Pushing the length of each game range into the game stats for the needed for the graph
        game2Stats.push(game2Range1.length);
        game2Stats.push(game2Range2.length);
        game2Stats.push(game2Range3.length);
        game2Stats.push(game2Range4.length);
        game2Stats.push(game2Range5.length);

        // Pushing the length of each game range into the game stats for the needed for the graph
        game3Stats.push(game3Range1.length);
        game3Stats.push(game3Range2.length);
        game3Stats.push(game3Range3.length);
        game3Stats.push(game3Range4.length);
        game3Stats.push(game3Range5.length);

        // Pushing the length of each game range into the game stats for the needed for the graph
        game4Stats.push(game4Range1.length);
        console.log(game4Range1.length)
        game4Stats.push(game4Range2.length);
        game4Stats.push(game4Range3.length);
        game4Stats.push(game4Range4.length);
        game4Stats.push(game4Range5.length);

        // Pushing the length of each game range into the game stats for the needed for the graph
        game5Stats.push(game5Range1.length);
        game5Stats.push(game5Range2.length);
        game5Stats.push(game5Range3.length);
        game5Stats.push(game5Range4.length);
        game5Stats.push(game5Range5.length);

        // Pushing the length of each game range into the game stats for the needed for the graph
        console.log(game1Stats);
        console.log(game2Stats);
        console.log(game3Stats);
        console.log(game4Stats);
        console.log(game5Stats);

        const storedData = [
            {
                game: 'Game 1',
                stats: game1Stats
            },
            {
                game: 'Game 2',
                stats: game2Stats
            },
            {
                game: 'Game 3',
                stats: game3Stats
            },
            {
                game: 'Game 4',
                stats: game4Stats
            },
            {
                game: 'Game 5',
                stats: game5Stats
            }
        ];

        console.log(storedData[0].stats)

        // data and labels to plot
        const data = storedData[0].stats;
        const labels = ['0 - 1', '2 - 5', '6 - 10', '11 - 15', '> 15'];

        // maximum width of single bar so bar doesn't look like a box
        const max_bar_width = 80;

        // maximum height of the svg element
        // this will include top and bottom offset
        const svg_height = 360;

        // bg color of bars
        const bar_color = "#b892fc";

        // top and bottom margins
        const top_offset = 10;
        const bottom_offset = 50;

        // colour of the graph on hover
        const shadeColor = (color, percent) => {

            let R = parseInt(color.substring(1, 3), 16);
            let G = parseInt(color.substring(3, 5), 16);
            let B = parseInt(color.substring(5, 7), 16);

            R = parseInt(R * (100 + percent) / 100);
            G = parseInt(G * (100 + percent) / 100);
            B = parseInt(B * (100 + percent) / 100);

            R = (R < 255) ? R : 255;
            G = (G < 255) ? G : 255;
            B = (B < 255) ? B : 255;

            const RR = ((R.toString(16).length == 1) ? `0${  R.toString(16)}` : R.toString(16));
            const GG = ((G.toString(16).length == 1) ? `0${  G.toString(16)}` : G.toString(16));
            const BB = ((B.toString(16).length == 1) ? `0${  B.toString(16)}` : B.toString(16));

            return `#${  RR  }${GG  }${BB}`;
        }

        const selectItems = ["GAME 1", "GAME 2", "GAME 3", "GAME 4", "GAME 5"];

        // Chart changes based on drop down selection
        d3.select("#selection").on("change", function () {
            const selectedOption = d3.select(this).node().value;
            console.log(selectedOption);

            if (selectedOption == "GAME 1") {
                const data = storedData[0].stats;
                console.log(data);
                displayData(data)
            }

            else if (selectedOption == "GAME 2") {
                const data = storedData[1].stats;
                console.log(data);
                displayData(data)
            }

            else if (selectedOption == "GAME 3") {
                const data = storedData[2].stats;
                console.log(data);
                displayData(data)
            }

            else if (selectedOption == "GAME 4") {
                const data = storedData[3].stats;
                console.log(data);
                displayData(data)
            }

            else if (selectedOption == "GAME 5") {
                const data = storedData[4].stats;
                console.log(data);
                displayData(data)
            }
        })

        const displayData = (data) => {
            if (document.getElementById("chart").firstChild) {
                document.getElementById("chart").removeChild(document.getElementById("chart").firstChild);
            }

            // append svg
            const svg = d3.select("#chart")
                .append("svg")
                .attr("fill", "black")
                // .style("font-weight", "bold")
                .attr("width", '100%')
                .attr("height", svg_height)

            // to make graph responsive calcuate we set width 100%
            const svg_width = svg.node().getBoundingClientRect().width;

            // decide bar width depending upon available space and no. of bars to plot
            let bar_width = Math.round((svg_width - 90) / data.length);
            if (bar_width > max_bar_width) {
                bar_width = max_bar_width;
            }

            // spacing between two bars
            // instead of having a fixed value we set it dynamically
            const spacing = 0.15 * bar_width;

            // to center align graph we move it from left to right
            // this is applicable if there's any space left
            let left_offset = Math.round((svg_width - bar_width * data.length) / 2);
            if (left_offset < 0) {
                left_offset = 0;
            }

            // create scale
            const scale = d3.scaleLinear()
                .domain([0, Math.max(...data)])
                .range([0, svg_height - top_offset - bottom_offset]);

            // create scale for Y-Axis
            // we could have used scale above but for Y-Axis we need domain reversed
            const scale_y_axis = d3.scaleLinear()
                .domain([Math.max(...data), 0])
                .range([0, svg_height - top_offset - bottom_offset]);


            // append rect
            const rect = svg.selectAll("g")
                .data(data)
                .enter()
                .append("rect")
                .attr("fill", bar_color)
                .attr("x", (d, i) => left_offset + bar_width * i)
                .attr("y", d => svg_height - bottom_offset)
                .attr("width", bar_width - spacing)

            // append text  
            svg.selectAll("g")
                .data(data)
                .enter()
                .append("text")
                .attr("dominant-baseline", "text-before-edge")
                .attr("text-anchor", "middle")
                .attr("fill", "#000000")
                .attr("x", (d, i) => left_offset + bar_width * i + bar_width / 2 - spacing / 2)
                .attr("y", svg_height - bottom_offset + 5)
                .attr("style", "font-family:Roboto")
                .text((d, i) => labels[i]);

            // append X-Axis label
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", max_bar_width + 290)
                .attr("y", 340)
                .attr("dy", ".75em")
                .text("Time Used in Minutes");

            // append Y-Axis label
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("x", -100)
                .attr("y", 50)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Number of Users");

            // append X-Axis  
            svg.append("line")
                .attr("stroke", "#000000")
                .attr("stroke-width", 2)
                .attr("x1", left_offset)
                .attr("y1", svg_height - bottom_offset)
                .attr("x2", bar_width * data.length + left_offset - spacing)
                .attr("y2", svg_height - bottom_offset);

            // appen Y-Axis        
            svg.append("g")
                .attr("transform", `translate(100,${  top_offset  })`)
                .call(d3.axisLeft(scale_y_axis).ticks(Math.max(...data)));

            // set animation
            rect.transition()
                .ease(d3.easeLinear)
                .duration(600)
                .attr("y", d => svg_height - bottom_offset - scale(d))
                .attr("height", d => scale(d));

        };


        // declaring 5 different arrays to store the number of attempts for each game
        const game1Attempts = [];
        const game2Attempts = [];
        const game3Attempts = [];
        const game4Attempts = [];
        const game5Attempts = [];

        // declaring 6th array to push in the highest attempt for each game
        const allGamesAttempts = [];
        let largestNumber = 0;

        // axios GET request to retrive all data for the game duration table
        axios.get(GAMEDURATION_URL, {})

            // Handle success response
            .then((response) => {

                response.data.map((data) => {
                    // filtering data accrding to gameid, then push the attempt number into the 5 different game arrays
                    if (data.gameid === 1) {
                        game1Attempts.push(data.attempt);
                    }
                    if (data.gameid === 2) {
                        game2Attempts.push(data.attempt);
                    }
                    if (data.gameid === 3) {
                        game3Attempts.push(data.attempt);
                    }
                    if (data.gameid === 4) {
                        game4Attempts.push(data.attempt);
                    }
                    if (data.gameid === 5) {
                        game5Attempts.push(data.attempt);
                    }

                })

                // for each game array, using for loop to get the highest attempt number then push it into the highest attempt array
                for (i = 0; i < game1Attempts.length; i++) {
                    if (game1Attempts[i] > largestNumber) {
                        largestNumber = game1Attempts[i];
                    }
                }
                allGamesAttempts.push(largestNumber);
                largestNumber = 0;

                for (i = 0; i < game2Attempts.length; i++) {
                    if (game2Attempts[i] > largestNumber) {
                        largestNumber = game2Attempts[i];
                    }
                }
                allGamesAttempts.push(largestNumber);
                largestNumber = 0;

                for (i = 0; i < game3Attempts.length; i++) {
                    if (game3Attempts[i] > largestNumber) {
                        largestNumber = game3Attempts[i];
                    }
                }
                allGamesAttempts.push(largestNumber);
                largestNumber = 0;

                for (i = 0; i < game4Attempts.length; i++) {
                    if (game4Attempts[i] > largestNumber) {
                        largestNumber = game4Attempts[i];
                    }
                }
                allGamesAttempts.push(largestNumber);
                largestNumber = 0;

                for (i = 0; i < game5Attempts.length; i++) {
                    if (game5Attempts[i] > largestNumber) {
                        largestNumber = game5Attempts[i];
                    }
                }
                allGamesAttempts.push(largestNumber);
                largestNumber = 0;

                for (i = 0; i < allGamesAttempts.length; i++) {
                    if (allGamesAttempts[i] > largestNumber) {
                        largestNumber = allGamesAttempts[i];
                    }
                }

                const mySelectionPieChart = document.getElementById("selectMePieChart");

                const index = allGamesAttempts.indexOf(largestNumber);

                console.log(allGamesAttempts);

                const width = 280;
                    const height = 280;
                    const radius = Math.min(width, height) / 2;

                const color = d3.scaleOrdinal()
                    .range([
                        "#b892fc",
                        "#e2affd",
                        "#c59cfc",
                        "#d2a5fd",
                        "#efbafb",
                        "#f5c6fa",
                        "#f9d4f9",
                    ]);

                const pie = d3.pie()
                    .value((d) => d);

                const arc = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(95);

                const labelArc = d3.arc()
                    .outerRadius(radius - 40)
                    .innerRadius(radius - 40);

                const svg = d3.select("#pieChart")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", `translate(${  width / 2  },${  height / 2  })`);

                const g = svg.selectAll(".arc")
                    .data(pie(allGamesAttempts))
                    .enter().append("g")
                    .attr("class", "arc");

                g.append("path")
                    .attr("d", arc)
                    .style("fill", (d, i) => color(i))


                    .transition()
                    .duration(1000)
                    .attrTween("d", tweenPie);

                function tweenPie(b) {
                    b.innerRadius = 0;
                    const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
                    return (t) => arc(i(t));
                }

                // Append text to show data analytics summary
                g.append("text")
                    .attr("text-anchor", "middle")
                    .attr("dy", "-0.7em")
                    .text(`Game ${  index + 1}`)
                    .style("font-size", "28px")
                    .style("font-weight", "bold");

                g.append("text")
                    .attr("text-anchor", "middle")
                    .attr("dy", "0.25em")
                    .text("Has The Highest")
                    .style("font-size", "18px");

                g.append("text")
                    .attr("text-anchor", "middle")
                    .attr("dy", "1.6em")
                    .text(" Attempt Count of ")
                    .style("font-size", "20px")
                    .style("font-weight", "bold")

                g.append("text")
                    .attr("text-anchor", "middle")
                    .attr("dy", "2.3em")
                    .text(largestNumber)
                    .style("font-size", "28px")
                    .style("font-weight", "bold")

            })

            // Handle error response
            .catch((error) => {
                alert(error);
                console.log(error);

            });

        let currentDataSet = 0;
        const mySelection = document.getElementById("selectMe");

        displayData(storedData[0].stats)

        setInterval(() => {

            if (currentDataSet === 0) {
                mySelection.innerHTML = `Playing Duration Statistics for Game 2`
                displayData(storedData[1].stats);
                currentDataSet = 1;
            }

            else if (currentDataSet === 1) {
                mySelection.innerHTML = `Playing Duration Statistics for Game 3`
                displayData(storedData[2].stats);
                currentDataSet = 2;
            }

            else if (currentDataSet === 2) {
                mySelection.innerHTML = `Playing Duration Statistics for Game 4`
                displayData(storedData[3].stats);
                currentDataSet = 3;
            }

            else if (currentDataSet === 3) {
                mySelection.innerHTML = `Playing Duration Statistics for Game 5`
                displayData(storedData[4].stats);
                currentDataSet = 4;
            }

            else if (currentDataSet === 4) {
                mySelection.innerHTML = `Playing Duration Statistics for Game 1`
                displayData(storedData[0].stats);
                currentDataSet = 0;
            }

        }, 2500)
        
    })

    // error repsonse
    .catch((error) => {
        alert(error);
        console.log(error);
    });

