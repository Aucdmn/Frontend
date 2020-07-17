let score = 0;
let board = new Array();

window.onload = prepareLinks;
function prepareLinks() {
    let links = document.querySelectorAll('a');
    for(let i = 0; i < links.length; i++){
        if(links[i].getAttribute('id') === 'newGameButton') {
            links[i].onclick = function() {
                NewGame();
            }
        }
    }
}

// $(document).ready(function() {
//     NewGame();
// });

function NewGame() {
    // 初始化界面
    Init();
    // 随机生成两个数字
    GenerateOneNumber();
    GenerateOneNumber();
};


function Init() {
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            let gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css('top', getPosTop(i, j));
            gridCell.css('left', getPosLeft(i ,j));
        }
    }

    for(let i = 0; i < 4; i++){
        board[i] = new Array();
        for(let j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }

    updateBoardView();
}

function updateBoardView() {
      $(".number-cell").remove();
      for(let i = 0; i < 4; i++){
          for(let j = 0; j < 4; j++){
              $("#grid-container").append(' <div class="number-cell" id="number-cell-' + i + '-' + j +'"></div> ');
              let theNumberCell = $('#number-cell-' + i + '-' + j);

              if(board[i][j] === 0){
                  theNumberCell.css('width', '0px');
                  theNumberCell.css('height', '0px');
                  theNumberCell.css('top', getPosTop(i, j) + 50);
                  theNumberCell.css('left', getPosLeft(i, j) + 50);
              }
              else{
                  theNumberCell.css('width', '100px');
                  theNumberCell.css('height', '100px');
                  theNumberCell.css('top', getPosTop(i, j));
                  theNumberCell.css('ledt', getPosLeft(i, j));
                  theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                  theNumberCell.css('color', getNumberColor(board[i][j]));
                  theNumberCell.text(board[i][j]);
              }
          }
      }
}

function GenerateOneNumber() {
    if(NoSpace(board)) {
        return false;
    }

    // 随机一个位置
    let random_x = parseInt(Math.floor(Math.random() * 4));
    let random_y = parseInt(Math.floor(Math.random() * 4));
    while(1) {
        if(board[random_x][random_y] === 0)
            break;
        random_x = parseInt(Math.floor(Math.random() * 4));
        random_y = parseInt(Math.floor(Math.random() * 4));
    }
    // 随机一个数字
    let random_num = Math.random() > 0.5 ? 2 : 4;

    //在随机位置显示随机数字
    board[random_x][random_y] = random_num;
    // console.log(random_x, random_y, random_num);
    ShowNumberWithAnimation(random_x, random_y, random_num);
    
        
    

    return true;  

}

