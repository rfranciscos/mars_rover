// Rover Object Goes Here
// ======================
let Kata = {
  direction: 'N',
  positionX: 0,
  positionY: 0,
  travelLog: ['0X 0Y'],
  name: 'Kata',
};

let Yutu = {
  direction: 'N',
  positionX: 0,
  positionY: 1,
  travelLog: ['0X 1Y'],
  name: 'Yutu',
};

let grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ['ob', 'ob', null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ['ob', null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, 'ob', null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

function turnLeft(robot) {
  switch (robot.direction) {
    case 'N':
      robot.direction = 'W';
      console.log(`Ok, my direction is ${robot.direction} (West)`);
      break;
    case 'W':
      robot.direction = 'S';
      console.log(`Ok, my direction is ${robot.direction} (South)`);
      break;
    case 'S':
      robot.direction = 'E';
      console.log(`Ok, my direction is ${robot.direction} (East)`);
      break;
    case 'E':
      robot.direction = 'N';
      console.log(`Ok, my direction is ${robot.direction} (North)`);
      break;
    default:
      break;
  }
}

function turnRight(robot) {
  switch (robot.direction) {
    case 'N':
      robot.direction = 'E';
      console.log(`Ok, my direction is ${robot.direction} (East)`);
      break;
    case 'E':
      robot.direction = 'S';
      console.log(`Ok, my direction is ${robot.direction} (South)`);
      break;
    case 'S':
      robot.direction = 'W';
      console.log(`Ok, my direction is ${robot.direction} (West)`);
      break;
    case 'W':
      robot.direction = 'N';
      console.log(`Ok, my direction is ${robot.direction} (North)`);
      break;
    default:
      break;
  }
}

function moveForward(robot) {
  switch (robot.direction) {
    case 'S':
      if (robot.positionX === 9) {
        console.log('Ops, i can not go on');
      } else if (grid[robot.positionX + 1][robot.positionY] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX][robot.positionY + 1] === 'ob') {
        grid[robot.positionX][robot.positionY] = null;
        robot.positionX += 1;
        robot.positionY += 0;
        grid[robot.positionX][robot.positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    case 'E':
      if (robot.positionY === 9) {
        console.log('Ops, i can not go on')
      } else if (grid[robot.positionX][robot.positionY + 1] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX][robot.positionY + 1] === null) {
        grid[robot.positionX][robot.positionY] = null;
        robot.positionX += 0;
        robot.positionY += 1;
        grid[robot.positionX][robot.positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    case 'W':
      if (robot.positionY === 0) {
        console.log('Ops, i can not go on')
      } else if (grid[robot.positionX][robot.positionY - 1] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX][robot.positionY - 1] === null) {
        grid[positionX][positionY] = null;
        robot.positionX -= 0;
        robot.positionY -= 1;
        grid[positionX][positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    case 'N':
      if (robot.positionX === 0) {
        console.log('Ops, i can not go on');
      } else if (grid[robot.positionX - 1][robot.positionY] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX - 1][robot.positionY] === null) {
        grid[positionX][positionY] = null;
        robot.positionX -= 1;
        robot.positionY -= 0;
        grid[positionX][positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    default:
      break;
  }
  console.log(robot.travelLog);
}

function moveBackward(robot) {
  switch (robot.direction) {
    case 'S':
      if (robot.positionX === 9) {
        console.log('Ops, i can not go on');
      } else if (grid[robot.positionX + 1][robot.positionY] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX][robot.positionY + 1] === null) {
        grid[robot.positionX][robot.positionY] = null;
        robot.positionX -= 1;
        robot.positionY -= 0;
        grid[robot.positionX][robot.positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    case 'E':
      if (robot.positionY === 9) {
        console.log('Ops, i can not go on')
      } else if (grid[robot.positionX][robot.positionY + 1] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX][robot.positionY + 1] === null) {
        grid[robot.positionX][robot.positionY] = null;
        robot.positionX -= 0;
        robot.positionY -= 1;
        grid[robot.positionX][robot.positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    case 'W':
      if (robot.positionY === 0) {
        console.log('Ops, i can not go on')
      } else if (grid[robot.positionX][robot.positionY - 1] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX][robot.positionY - 1] === null) {
        grid[positionX][positionY] = null;
        robot.positionX += 0;
        robot.positionY += 1;
        grid[positionX][positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    case 'N':
      if (robot.positionX === 0) {
        console.log('Ops, i can not go on');
      } else if (grid[robot.positionX - 1][robot.positionY] === 'ob') {
        console.log('=/ I can not move, we have obstacle on the way');
      } else if (grid[robot.positionX - 1][robot.positionY] === null) {
        grid[positionX][positionY] = null;
        robot.positionX += 1;
        robot.positionY += 0;
        grid[positionX][positionY] = robot.name;
        robot.travelLog.push(`${robot.positionX}X ${robot.positionY}Y`);
      } else {
        console.log('Sorry, there is another rover in this place');
      }
      break;
    default:
      break;
  }
  console.log(robot.travelLog);

}

function commands(text, robotAux) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'l' || 'r' || 'f' || 'b') {
      switch (text[i]) {
        case 'l':
          turnLeft(robotAux);
          break;
        case 'r':
          turnRight(robotAux);
          break;
        case 'f':
          moveForward(robotAux);
          break;
        case 'b':
          moveBackward(robotAux);
          break;
        default:
          break;
      }
    }
  }
}
