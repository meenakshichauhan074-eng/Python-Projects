var player1 = prompt("Enter Name of Player 1 (Blue)");
var player2 = prompt("Enter Name of Player 2 (Red)");

var player1_color = 'rgb(0, 0, 255)';
var player2_color = 'rgb(255, 0, 0)';

var table = $('table tr');
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1_color;
var game_on = true;

$('h3').text(currentName + " it is your turn, pick a column to drop in!");

// Function to change button color
function changeColor(rowIndex, colIndex, color) {
    table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// Function to get current color of button
function returnColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Find bottom empty row in a column
function checkBottom(colIndex) {
    for (var row = 4; row >= 0; row--) {
        var color = returnColor(row, colIndex);
        if (color === 'rgb(128, 128, 128)') {
            return row;
        }
    }
}

// Check for 4 matching colors
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// Horizontal win check
function horizontalWinCheck() {
    for (var row = 0; row < 5; row++) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row, col + 1),
                returnColor(row, col + 2),
                returnColor(row, col + 3)
            )) {
                reportWin(row, col);
                return true;
            }
        }
    }
}

// Vertical win check
function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 2; row++) {
            if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row + 1, col),
                returnColor(row + 2, col),
                returnColor(row + 3, col)
            )) {
                reportWin(row, col);
                return true;
            }
        }
    }
}

// Diagonal win check
function diagonalWinCheck() {
    for (var col = 0; col < 4; col++) {
        for (var row = 0; row < 2; row++) {
            if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row + 1, col + 1),
                returnColor(row + 2, col + 2),
                returnColor(row + 3, col + 3)
            ) || colorMatchCheck(
                returnColor(row + 3, col),
                returnColor(row + 2, col + 1),
                returnColor(row + 1, col + 2),
                returnColor(row, col + 3)
            )) {
                reportWin(row, col);
                return true;
            }
        }
    }
}

// Show win message
function reportWin(rowNum, colNum) {
    console.log('you win starting at row ' + rowNum + ' and column ' + colNum);
}

// Click event
$('table button').on('click', function () {
    if (!game_on) return;

    var col = $(this).closest('td').index();
    var bottomAvail = checkBottom(col);

    if (bottomAvail === undefined) return; // Column full

    changeColor(bottomAvail, col, currentColor);

    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        $('h1').text(currentName + " wins!");
        $('h2, h3').fadeOut();
        game_on = false;
        return;
    }

    // Switch player
    currentPlayer *= -1;

    if (currentPlayer === 1) {
        currentName = player1;
        currentColor = player1_color;
    } else {
        currentName = player2;
        currentColor = player2_color;
    }

    $('h3').text(currentName + " it is your turn, pick a column to drop in!");
});
